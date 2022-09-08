import React from "react";
import { HeroList } from "../components/HeroList";

export const DcPage = () => {
   return (
      <>
         <h1 className="mt-3">DcPage</h1>
         <hr />
         <HeroList publisher={"DC Comics"} />
      </>
   );
};
