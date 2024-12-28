import { useState, useEffect } from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";

interface StepperLoadingProps {
  loading: boolean;
  loadingStates: { text: string }[];
  stepDuration: number;
  totalDuration: number;
}

const StepperLoading: React.FC<StepperLoadingProps> = ({
  loading,
  loadingStates,
  stepDuration,
  totalDuration,
}) => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => {
        setIsDone(true);
      }, totalDuration);

      return () => clearTimeout(timeout);
    }
  }, [loading, totalDuration]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black">
      {!isDone && (
        <>
          <Loader
            loadingStates={loadingStates}
            loading={loading}
            duration={stepDuration}
          />
          <div className="absolute bottom-0 w-full h-1/6 bg-gradient-to-t from-cyan-800 via-transparent to-transparent backdrop-blur-lg"></div>
        </>
      )}
    </div>
  );
};

export default StepperLoading;
