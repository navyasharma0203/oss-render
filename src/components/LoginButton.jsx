import { useContext } from 'react';
import { auth, googleProvider } from '../../firebase/firebase.js';
import { AuthContext } from '../context/AuthContext.jsx';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/main');
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user ? (
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSignOut}
        >
         Logout
        </button>
      ) : (
        <button
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      )}
    </>
  );
};

export default LoginButton;
