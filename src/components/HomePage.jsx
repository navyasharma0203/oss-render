import React,{useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';
import NavBar from './NavBar';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase/firebase';

function HomePage() {
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

  return (
    <div>
      <NavBar />
      <div class="bg" style={{ content: 'center' }}>
        <div class="container">
          <div className="text-box">
            <div className="line1">lets build from here</div>
            <div className="line2">
              <br></br>
             Simplify. Optimize.<br></br>
              "Transforming the way you work and collaborate."
            </div>
          </div>
          <div class="flex justify-items-center	">
              <a className='btn' onClick={ () => {
                if (user) {
                  navigate('/main')
                }
                else{
                  return handleLogin()
                }
              }}>
                <svg>
                  <defs>
                    <linearGradient id="grad1">
                      <stop offset="0%" stop-color="#eaecee" />
                      <stop offset="100%" stop-color="#566573" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="5"
                    y="5"
                    rx="25"
                    fill="none"
                    stroke="url(#grad1)"
                    width="266"
                    height="50"
                  ></rect>
                </svg>
                <span id="get-btn">GET STARTED</span>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
