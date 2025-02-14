import { lazy, Suspense } from "react";
import Experience from "../experience/experience";
import Portfolio from "../portfolio/Portfolio";

const Header = lazy(() => import("../header/header"));
const Navbar = lazy(() => import("../navbar/navbar"));
const AboutMe = lazy(() => import("../about-me/about-me"));
const HeroImage = lazy(() => import("../hero-image/hero-image"));

const Home = () => {
  return (
    <div className="h-screen overflow-auto">
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center text-[#4df0ff]"></div>
        }
      >
        <Header />
        <HeroImage />
        <AboutMe />
        <Experience />
        <Portfolio />
        <Navbar />
      </Suspense>
    </div>
  );
};

export default Home;
