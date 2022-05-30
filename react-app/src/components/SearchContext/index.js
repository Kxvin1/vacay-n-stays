import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export default function SearchProvider({ children }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const [searchState, setSearchState] = useState("");

  return (
    <SearchContext.Provider
      value={{
        showSearch,
        setShowSearch,
        searchCity,
        setSearchCity,
        searchState,
        setSearchState,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
