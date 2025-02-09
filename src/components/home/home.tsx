import { lazy, Suspense } from "react";

const Header = lazy(() => import("../header/header"));
const Navbar = lazy(() => import("../navbar/Navbar"));
const HeroImage = lazy(() => import("../hero-image/HeroImage"));

const Home = () => {
  return (
    <div className="h-screen overflow-auto">
      <Suspense fallback={<></>}>
        <Header />
      </Suspense>
      <Suspense fallback={<></>}>
        <HeroImage />
      </Suspense>
      <Suspense fallback={<></>}>
        <Navbar />
      </Suspense>
    </div>
  );
};

export default Home;
