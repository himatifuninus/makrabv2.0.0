import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import { ErrorBoundary } from "react-error-boundary";
import Error from "../components/Error";

const Home = lazy(() => import("../views/Home"));
const Daftar = lazy(() => import("../views/Daftar"));
const Peserta = lazy(() => import("../views/Peserta"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      </ErrorBoundary>
    ),
  },

  {
    path: "/daftar",
    element: (
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <Daftar />
        </Suspense>
      </ErrorBoundary>
    ),
  },

  {
    path: "/peserta",
    element: (
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <Peserta />
        </Suspense>
      </ErrorBoundary>
    ),
  },
]);
