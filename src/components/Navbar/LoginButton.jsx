import { useContext } from "react";
import { auth, googleProvider } from "../../../firebase/firebase.js";
import { AuthContext } from "../../context/AuthContext.jsx";
import { signInWithPopup, signOut } from "firebase/auth";

const LoginButton = () => {
  const { user } = useContext(AuthContext);
  
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {user ? <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleSignOut}>Hi, {user?.displayName}. Logout</button> : <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogin}>
        Login
      </button>}
    </>
  )
}

export default LoginButton;