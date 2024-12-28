import { HeroHighlight } from "./components/ui/hero-highlight";

const App = () => {
  if (typeof window !== "undefined") {
    document.documentElement.classList.add("dark");
  }
  return <HeroHighlight children="Hello world" />;
};

export default App;
