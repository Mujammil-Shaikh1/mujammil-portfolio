import Home from "./components/home/home";
import { HeroHighlight } from "./components/ui/hero-highlight";

const App = () => {
  if (typeof window !== "undefined") {
    document.documentElement.classList.add("dark");
  }
  return <HeroHighlight children={<Home />} />;
};

export default App;
