import { lazy, Suspense } from "react";
import { routes } from "./router";
import { RouterProvider } from "react-router";
import Loading from "./components/Loading";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./components/Error";

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const ContentLayout = lazy(() => import("./layouts/ContentLayout"));
const Navbar = lazy(() => import("./components/Navbar"));

const App = () => {
  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <MainLayout>
          <Navbar />
          <ContentLayout>
            <RouterProvider fallbackElement={<Loading />} router={routes} />
          </ContentLayout>
        </MainLayout>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
