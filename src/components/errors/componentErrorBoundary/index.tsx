import { BugIcon } from "@phosphor-icons/react";
import { Link } from "react-router";

interface ComponentErrorBoundaryProps {
  isHomePage?: boolean;
}

export const ComponentErrorBoundary = ({
  isHomePage = true,
}: ComponentErrorBoundaryProps) => {
  return (
    <div className="text-center flex flex-col gap-8 w-fit mx-auto my-auto h-[70vh] items-center justify-center">
      <div className="flex items-center justify-center p-4 mx-auto bg-blue-100 rounded-full">
        <BugIcon size={32} className=" text-blue-600" />
      </div>
      <h1 className="md:text-6xl text-5xl italic">Oops!</h1>
      <h2 className="md:text-4xl text-3xl">Something has gone wrong</h2>
      {!isHomePage ? (
        <Link to="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-fit cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <h4 className="text-xl">Return home</h4>
          </button>
        </Link>
      ) : null}
    </div>
  );
};
