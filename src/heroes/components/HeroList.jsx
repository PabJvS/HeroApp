import { HeroCard } from "./HeroCard";
import { getHeroByPublisher } from "../helpers";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {
   //
   const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

   return (
      <>
         {/* <div className="row rows-col-1 row-cols-md-3 g-3">
          */}
         <div className="row row-cols-1 row-cols-md-3 g-4 pt-2 content-cards animate__animated animate__fadeIn">
            {heroes.map((hero) => (
               <HeroCard key={hero.id} {...hero} />
            ))}
         </div>
      </>
   );
};
