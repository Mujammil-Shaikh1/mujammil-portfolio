import { lazy, Suspense } from "react";

const Header = lazy(() => import("../header/header"));
const Navbar = lazy(() => import("../navbar/navbar"));
const AboutMe = lazy(() => import("../about-me/about-me"));
const HeroImage = lazy(() => import("../hero-image/hero-image"));
const Experience = lazy(() => import("../experience/experience"));
const Portfolio = lazy(() => import("../portfolio/Portfolio"));
const Technologies = lazy(() => import("../technologies/technologies"));
const Footer = lazy(() => import("../footer/footer"));
const ContactUs = lazy(() => import("../contact-us/contact-us"));
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
        <Technologies />
        <ContactUs />
        <Footer />
        <Navbar />
      </Suspense>
    </div>
  );
};

export default Home;
