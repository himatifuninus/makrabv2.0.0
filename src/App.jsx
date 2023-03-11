import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Router from "./router";
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const ContentLayout = lazy(() => import("./layouts/ContentLayout"));
const Error = lazy(() => import("./components/Error"));
const Loading = lazy(() => import("./components/Loading"));
const Navbar = lazy(() => import("./components/Navbar"));
const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<Loading />}>
            <ContentLayout>
              <Router />
            </ContentLayout>
          </Suspense>
        </ErrorBoundary>
      </Suspense>
    </MainLayout>
  );
};

export default App;
