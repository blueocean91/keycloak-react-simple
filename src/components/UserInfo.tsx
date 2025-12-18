import type { KeycloakTokenParsed } from "keycloak-js";

interface UserInfoProps {
    tokenParsed: KeycloakTokenParsed | undefined;
    onLogout: () => void;
}

const UserInfo = ({ tokenParsed, onLogout }: UserInfoProps) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <span className="status-badge status-success">Authenticated</span>
                    <h2 style={{ margin: "0.5rem 0 0 0", fontSize: "1.75rem", fontWeight: 700 }}>
                        Hi, {tokenParsed?.name || tokenParsed?.preferred_username}!
                    </h2>
                </div>
                <button
                    onClick={onLogout}
                    className="btn btn-outline"
                >
                    Logout
                </button>
            </div>
            <p style={{ color: "var(--text-muted)", margin: 0 }}>
                You are successfully logged in via Keycloak. You can find your session details below.
            </p>
        </div>
    );
};

export default UserInfo;
