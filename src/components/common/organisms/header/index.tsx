import { Link } from "react-router";
import { SearchInput } from "src/components/common/molecules";

export const Header = () => {
  return (
    <>
      <header className="w-full">
        <nav aria-label="Main navigation" className="w-full px-8 py-4">
          <div className="w-full flex md:flex-row flex-col justify-between md:items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2"
              aria-label="Wookie Movies - Home"
            >
              <h1 className="text-5xl text-center font-light w-fit">
                Wookie <br /> Movies
              </h1>
            </Link>
            <div className="w-full md:w-1/3">
              <SearchInput />
            </div>
          </div>
        </nav>
        <hr className="w-full h-1 bg-blue-900" aria-hidden="true" />
      </header>
    </>
  );
};
