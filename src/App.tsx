import { useState, useEffect, useRef } from "react";
import Keycloak, { type KeycloakTokenParsed } from "keycloak-js";
import UserInfo from "./components/UserInfo";
import TokenDetails from "./components/TokenDetails";
import LoginView from "./components/LoginView";

// --- 設定 ---
// Keycloakのインスタンスを作成
const client = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
});

function App() {
  const isRun = useRef(false);
  // ログイン状態
  const [isLogin, setLogin] = useState(false);
  // トークン情報 (TypeScriptの型定義を使用)
  const [tokenParsed, setTokenParsed] = useState<KeycloakTokenParsed | undefined>(
    undefined
  );

  useEffect(() => {
    // React18 StrictModeでの2重実行防止
    if (isRun.current) return;
    isRun.current = true;

    console.log("### Keycloak初期化開始 ###");

    client
      .init({
        onLoad: "check-sso", // ログインチェック (強制リダイレクトはしない)
        checkLoginIframe: false, // 動作が不安定な場合はコメントアウトを外す
        pkceMethod: "S256", // PKCEを有効化 (モダンな推奨設定)
      })
      .then((authenticated) => {
        console.log("### 認証結果:", authenticated);
        setLogin(authenticated);
        if (authenticated) {
          console.log("### トークン取得成功");
          // 型安全にトークン情報をセット
          setTokenParsed(client.tokenParsed);
        }
      })
      .catch((err) => {
        console.error("### 認証初期化エラー:", err);
      });

    // トークンの有効期限が切れた際の自動更新設定 (オプション)
    client.onTokenExpired = () => {
      console.log("### トークン期限切れ。更新を試みます...");
      client
        .updateToken(70)
        .then((refreshed) => {
          if (refreshed) {
            console.log("### トークン更新成功");
            setTokenParsed(client.tokenParsed);
          }
        })
        .catch(() => {
          console.error("### トークン更新失敗。再ログインが必要です。");
          setLogin(false);
        });
    };
  }, []);

  // ログアウト処理
  const handleLogout = () => {
    client.logout();
  };

  // ログイン処理
  const handleLogin = () => {
    client.login();
  };

  return (
    <main>
      <h1 className="brand-title">Keycloak Connect</h1>

      {isLogin ? (
        // --- ログイン済み ---
        <div className="card">
          <UserInfo tokenParsed={tokenParsed} onLogout={handleLogout} />
          <hr style={{ border: 0, borderTop: "1px solid var(--border)", margin: "2rem 0" }} />
          <TokenDetails tokenParsed={tokenParsed} />
        </div>
      ) : (
        // --- 未ログイン ---
        <LoginView onLogin={handleLogin} />
      )}
    </main>
  );
}

export default App;