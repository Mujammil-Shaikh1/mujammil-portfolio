import { useState, useEffect, lazy, Suspense } from "react";
import { HeroHighlight } from "./components/ui/hero-highlight";
import Home from "./components/home/home";
const StepperLoading = lazy(
  () => import("./components/stepper-loading/stepper-loading")
);

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const loadingStates = [
    { text: "Setting up the components..." },
    { text: "Writing clean code..." },
    { text: "Flexboxing like a pro..." },
    { text: "Optimizing for all screens..." },
    { text: "Adding a pinch of CSS magic..." },
    { text: "Debugging the quirks..." },
    { text: "Almost there..." },
    { text: "Launching the portfolio!" },
  ];

  const stepDuration = 1500;
  const totalDuration = loadingStates.length * stepDuration;
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.add("dark");
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, [totalDuration]);

  return (
    <>
      {loading ? (
        <Suspense fallback={<div></div>}>
          <StepperLoading
            loading={loading}
            loadingStates={loadingStates}
            stepDuration={stepDuration}
            totalDuration={totalDuration}
          />
        </Suspense>
      ) : (
        <HeroHighlight>
          <Home />
        </HeroHighlight>
      )}
    </>
  );
};

export default App;
