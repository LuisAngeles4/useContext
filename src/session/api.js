//Almacenamis metodos para iniciar, cerrar sesión y uno para escuchar cada vez que haya un cambio en la sesión
import { auth, providers } from "../firebase";

export default {
  signIn: () => auth.signInWithPopup(providers.google),
  signOut: () => auth.signOut(),
  onChange: (callback) => auth.onAuthStateChanged(callback),
};
