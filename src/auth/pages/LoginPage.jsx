import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {
   const navigate = useNavigate();
   const { login } = useContext(AuthContext);

   const onLogin = () => {
      const lastPath = localStorage.getItem('lastPath') || '/';

      login('Usuario Invitado');

      navigate(lastPath, {
         replace: true,
      });
   };

   return (
      // <div className="container mt-5">
      //    <h1>Login</h1>
      //    <hr />

      //    <button className="btn btn-primary" onClick={onLogin}>
      //       Login
      //    </button>
      // </div>
      <div className='animate__animated animate__fadeIn'>
         <div className='header'>
            <div className='login'>
               <h1 className=' mb-2'>HeroApp</h1>
               <img
                  className='App-logo'
                  src='./assets/login/superhero_robin_comic_hero_icon-icons.com_69229.png'
                  alt=''
               />
               {/* <hr/> */}

               <button className='login-button ' onClick={onLogin}>
                  Login
               </button>
            </div>
            <footer className='footer-login'>
               "Front-End"
               <a href='https://github.com/PabJvS'> Developer </a>
            </footer>
         </div>
      </div>
   );
};
