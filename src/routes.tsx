import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";

import { DashboardPage } from "./pages/DashboardPage";
import { MovieDetailsPage } from "./pages/[slug]/MovieDetailsPage";
import { Header } from "./components/common/organisms";
import {
  ComponentErrorBoundary,
  NotFound,
  ErrorBoundary,
} from "./components/errors";

export const Router = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route
            index
            element={<DashboardPage />}
            errorElement={<ComponentErrorBoundary />}
          />
          <Route
            path=":movieSlug"
            element={<MovieDetailsPage />}
            errorElement={<ComponentErrorBoundary isHomePage={false} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer
          className="toast-container"
          position="top-center"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ErrorBoundary>
    </>
  );
};
