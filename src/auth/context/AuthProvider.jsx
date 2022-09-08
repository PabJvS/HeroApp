import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

export const AuthProvider = ({ children }) => {
   // const initialState = {
   //   logged: false,
   // };

   const init = () => {
      const user = JSON.parse(localStorage.getItem('user'));

      return {
         logged: !!user,
         user,
      };
   };

   const login = (name = '') => {
      const user = { id: 'ABC', name };

      const action = {
         type: types.login,
         payload: user,
      };

      localStorage.setItem('user', JSON.stringify(user));
      dispatch(action);
   };

   const logout = () => {
      localStorage.removeItem('user');
      const action = {
         type: types.logout,
      };
      dispatch(action);
   };

   const [authState, dispatch] = useReducer(authReducer, {}, init);
   // console.log(authState);

   return (
      <AuthContext.Provider value={{ ...authState, login, logout }}>
         {children}
      </AuthContext.Provider>
   );
};
