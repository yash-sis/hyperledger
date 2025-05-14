
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, totalSlides]);

  return (
    <>
      <div className="navigation-controls">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handlePrevious} 
          disabled={currentSlide === 0}
          className="rounded-full shadow-md"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm text-gray-500">
          {currentSlide + 1} / {totalSlides}
        </span>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleNext} 
          disabled={currentSlide === totalSlides - 1}
          className="rounded-full shadow-md"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="progress-indicator">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div 
            key={index}
            className={`progress-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </>
  );
};

export default PresentationControls;
