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
        <div className="flex items-center">
        <p className=" profile-name text-md font-bold hover:text-blue-900 py-2 px-4 rounded">Hi {user.displayName}</p>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSignOut}
        >
          Logout
        </button>
      </div>
       
        // <button
        //   className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex"
        //   onClick={handleSignOut}
        // >
        //   Hi {user.displayName}, Logout 
        // </button>
        
      ) : (
        <button
          className="lbtn bg-blue-800 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      )}
    </>
  );
};

export default LoginButton;
