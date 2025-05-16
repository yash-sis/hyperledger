import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PresentationControlsProps {
  currentSlide: number;
  totalSlides: number;
  goToSlide: (slideIndex: number) => void;
}

const PresentationControls: React.FC<PresentationControlsProps> = ({
  currentSlide,
  totalSlides,
  goToSlide,
}) => {
  const handlePrevious = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    } else {
      goToSlide(0); // Wrap to first slide
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide, totalSlides]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-2 px-4 z-10">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          disabled={currentSlide === 0}
          className="rounded-full shadow-md"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>

        <div className="flex-1 mx-4">
          <div className="relative h-1 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-1 bg-blue-500 rounded-full"
              style={{ width: `${(currentSlide / (totalSlides - 1)) * 100}%` }}
            ></div>
          </div>

          <div className="flex justify-center mt-2">
            <span className="text-sm text-gray-500">
              {currentSlide + 1} / {totalSlides}
            </span>
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="rounded-full shadow-md"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PresentationControls;
