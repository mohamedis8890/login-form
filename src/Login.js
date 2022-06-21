import React, { useEffect, useState } from "react";
import Classes from "./Login.module.css";

export default function Login({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (username && password) setDisabled(false);
  }, [username, password]);

  return (
    <div className={Classes.container}>
      <div className={Classes["input-group"]}>
        <label htmlFor="username-input">Username</label>
        <input
          type="text"
          id="username-input"
          name="username-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={Classes["input-group"]}>
        <label htmlFor="password-input">Password</label>
        <input
          type="password"
          id="password-input"
          name="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={Classes["input-group"]}>
        <button
          disabled={disabled}
          onClick={() => onSubmit(username, password)}
        >
          Login
        </button>
      </div>
    </div>
  );
}
