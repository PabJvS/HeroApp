import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/userForm";
import { HeroCard } from "../components/HeroCard";
import queryString from "query-String ";
import { getHeroByName } from "../helpers";
import { heroes } from "../data/hero";

export const SearchPage = () => {
   const navigate = useNavigate();
   const location = useLocation();

   const { q = "" } = queryString.parse(location.search);
   // console.log({ location });
   const heroes = getHeroByName(q);

   const { searchText, onInputChange } = useForm({ searchText: q });

   const showSearch = q.length === 0;
   const showError = q.length > 0 && heroes.length === 0;

   const onSearchSubmit = (event) => {
      event.preventDefault();
      // if (searchText.trim().length <= 1) return;
      // console.log({ searchText });
      navigate(`?q=${searchText}`);
   };

   return (
      <>
         <h1 className="mt-3 ">Search</h1>
         <hr />
         <div className="row">
            <div className="col-lg-5">
               <h4>Searching</h4>
               <hr />
               <form onSubmit={onSearchSubmit}>
                  <input
                     type="text"
                     placeholder="Search a hero"
                     className="form-control"
                     name="searchText"
                     autoComplete="off"
                     value={searchText}
                     onChange={onInputChange}
                  />
                  <button className="btn btn-outline-primary mt-2 w-100">Search</button>
               </form>
            </div>
            <div className="col-lg-7 text-center">
               <h4 className="mt-lg-0 mt-4">Results</h4>
               <hr />

               {/* {q === "" ? (
            <div className="alert alert-primary">Search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className=" alert alert-danger">
                {" "}
                no hero with <b>{q}</b>
              </div>
            )
          )} */}

               <div
                  className="alert alert-primary animate__animated animate__fadeIn"
                  style={{ display: showSearch ? "" : "none" }}
               >
                  Search a hero
               </div>

               <div
                  className=" alert alert-danger animate__animated animate__fadeIn"
                  style={{ display: showError ? "" : "none" }}
               >
                  {" "}
                  no hero with <b>{q}</b>
               </div>

               {heroes.map((hero) => (
                  <HeroCard key={hero.id} {...hero} />
               ))}
            </div>
         </div>
      </>
   );
};
