import logo from "./logo.svg";
import "./App.css";
import { useUser, useSignOut } from "./session/hooks";

function App() {
  const user = useUser();
  const signOut = useSignOut();
  return (
    <div>
      Bienvenido: {user.displayName} - {user.email}
      <button onClick={signOut}>cerrar sesion</button>
    </div>
  );
}

export default App;
