import React from "react";

const LoginScreen = ({ signIn, status }) => (
  <div>
    {status === "init" && <span>Restaurando sesión...</span>}
    {status === "restored" && (
      <button onClick={signIn}>Inicia sesión con google</button>
    )}
  </div>
);

export default LoginScreen;
