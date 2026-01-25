import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import "./Login.css";

function Login() {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = login(name, password);
    if (!ok) {
      setError("Invalid password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome to CUMart</h2>
        <p className="subtitle">Login to continue shopping</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="hint">Password: 1234</p>
      </div>
    </div>
  );
}

export default Login;
