import { lazy, Suspense } from "react";
import image from "../../assets/logo-makrab.png";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { ErrorBoundary } from "react-error-boundary";

const FormModules = lazy(() => import("../../modules/Daftar/Form"));

const Daftar = () => {
  document.title = "Makrab | Register";
  return (
    <div className="flex justify-between items-center w-full h-auto px-8">
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <img src={image} />
      </div>
      <div className="w-full md:w-1/2 h-full">
        <h1 className="text-[#0014FF] font-semibold text-3xl text-center">
          <span className="text-[#3FE1A7] px-2">MAKRAB</span> 2023
        </h1>
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<Loading />}>
            <FormModules />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Daftar;
