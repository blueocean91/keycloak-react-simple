import type { KeycloakTokenParsed } from "keycloak-js";

interface TokenDetailsProps {
    tokenParsed: KeycloakTokenParsed | undefined;
}

const TokenDetails = ({ tokenParsed }: TokenDetailsProps) => {
    return (
        <div style={{ marginTop: "2rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1rem" }}>
                Session Payload (ID Token)
            </h3>
            <div className="token-preview">
                <pre style={{ margin: 0, lineHeight: 1.4 }}>
                    {JSON.stringify(tokenParsed, null, 2)}
                </pre>
            </div>
        </div>
    );
};

export default TokenDetails;
