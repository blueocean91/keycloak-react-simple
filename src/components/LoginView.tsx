interface LoginViewProps {
    onLogin: () => void;
}

const LoginView = ({ onLogin }: LoginViewProps) => {
    return (
        <div className="card auth-card">
            <h2 style={{ marginTop: 0, fontSize: "1.5rem", fontWeight: 600 }}>
                Welcome Back
            </h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
                Please sign in with Keycloak to continue to the application.
            </p>
            <button
                onClick={onLogin}
                className="btn btn-primary"
                style={{ width: "100%" }}
            >
                Sign In with Keycloak
            </button>
        </div>
    );
};

export default LoginView;
