import { lazy, Suspense } from "react";
import ContactUs from "../contact-us/contact-us";

const Header = lazy(() => import("../header/header"));
const Navbar = lazy(() => import("../navbar/navbar"));
const AboutMe = lazy(() => import("../about-me/about-me"));
const HeroImage = lazy(() => import("../hero-image/hero-image"));
const Experience = lazy(() => import("../experience/experience"));
const Portfolio = lazy(() => import("../portfolio/Portfolio"));
const Technologies = lazy(() => import("../technologies/technologies"));
const Home = () => {
  return (
    <div className="h-screen overflow-auto px-20">
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
        <Technologies />
        <ContactUs />
        <Navbar />
      </Suspense>
    </div>
  );
};

export default Home;
