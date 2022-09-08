import { HeroList } from '../components';

export const MarvelPage = () => {
   return (
      <>
         <h1 className='mt-3'>MarvelPage</h1>
         <hr />
         <HeroList publisher={'Marvel Comics'} />
      </>
   );
};
