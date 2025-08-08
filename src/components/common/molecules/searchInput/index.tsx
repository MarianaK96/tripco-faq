import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { debounce } from "lodash";

import { Input } from "../../atoms";
import { useWookieStore } from "src/store";
import { useCallback, useEffect, useState } from "react";

export const SearchInput = () => {
  const setMovieSearch = useWookieStore().setMovieSearch;
  const movieSearch = useWookieStore().movieSearch;

  const [localSearch, setLocalSearch] = useState<string | undefined>(
    movieSearch
  );
  const debouncedQuerySubmit = debounce((v: string) => setMovieSearch(v), 500);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearch(value);
    debouncedQuerySubmit(value);
  }, []);

  useEffect(() => {
    setLocalSearch(movieSearch);
  }, [movieSearch]);

  return (
    <div role="search" className="flex items-center justify-center gap-2">
      <MagnifyingGlassIcon weight="bold" size={32} aria-hidden="true" />
      <Input
        aria-label="Search movies"
        type="search"
        placeholder="Search..."
        value={localSearch}
        onChange={handleSearch}
      />
    </div>
  );
};
