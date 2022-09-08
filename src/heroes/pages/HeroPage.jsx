import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { heroes } from '../data/hero';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
   //

   const params = useParams();
   const { id } = params;
   const navigate = useNavigate();

   const hero = useMemo(() => getHeroById(id), [id]);

   const onNavigate = () => {
      navigate(-1);
   };

   const heroImageUrl = `../assets/heroes/${id}.jpg`;

   if (!hero) {
      return <Navigate to='/marvel' />;
   }

   return (
      <div className='row mt-4'>
         {' '}
         <div className='col-4'>
            <img
               src={heroImageUrl}
               alt={hero.superhero}
               className='img-thumbnail animate__animated animate__fadeInLeft'
            />
         </div>
         <div className='col-8'>
            <h3>{hero.superhero}</h3>
            <ul className=' list-group list-group-flush'>
               <li className=' list-group-item'>
                  <b> Alter ego: </b>
                  {hero.alter_ego}
               </li>
               <li className=' list-group-item'>
                  <b> Publisher: </b>
                  {hero.publisher}
               </li>
               <li className=' list-group-item'>
                  <b> First appearence: </b>
                  {hero.first_appearance}
               </li>
            </ul>
            <h5 className=' mt-3'> Characters </h5>
            <p>{hero.characters}</p>
            <button className=' btn btn-outline-primary' onClick={onNavigate}>
               Regresar
            </button>
         </div>
      </div>
   );
};
