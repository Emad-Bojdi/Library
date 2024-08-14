import "./Search.css"
import { HiMagnifyingGlass } from "react-icons/hi2";
export const Search = ({search,setSearch,searchHandler}) => {
  return (
    <>
      <div className="container">
        <input type="text" className="SearchBar" placeholder="Search title" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
        <button className="Searcher" onClick={searchHandler}>
          <HiMagnifyingGlass className="Icon"/>
        </button>
      </div>
    </>
  );
};
