import React, { useState, useEffect } from 'react';
import Card from './card';
import { RootState } from '../../../app/store';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';

interface SliderProps {
  searchQuery: string;
  selectedOption: string;
  sortOrder: 'asc' | 'desc';
  onViewDetails: (exercise: any) => void;
}

const Slider: React.FC<SliderProps> = ({ searchQuery, selectedOption, sortOrder, onViewDetails }) => {
  const exercise = useSelector((state: RootState) => state.workouts.workouts);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [filteredExercises, setFilteredExercises] = useState(exercise);
  const [muscleGroupFromPath, setMuscleGroupFromPath] = useState<string>('All');

  const pathname = usePathname();

  useEffect(() => {
    const pathSegments = pathname.split('/');
    const muscleGroup = pathSegments[2] || 'All';
    setMuscleGroupFromPath(muscleGroup);
  }, [pathname]);

  useEffect(() => {
    let filtered = exercise.filter((exercise) => {
      const matchesMuscleGroup =
        muscleGroupFromPath === 'All' || exercise.muscleGroup.toLowerCase() === muscleGroupFromPath.toLowerCase();
      const matchesOption =
        selectedOption === 'All' || exercise.type.toLowerCase() === selectedOption.toLowerCase();
      const matchesQuery = exercise.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesMuscleGroup && matchesOption && matchesQuery;
    });

    filtered = filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setFilteredExercises(filtered);
    setCurrentSlide(0);
  }, [searchQuery, selectedOption, sortOrder, muscleGroupFromPath, exercise]);

  const numSlides = Math.ceil(filteredExercises.length / 6);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? numSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === numSlides - 1 ? 0 : prev + 1));
  };

  const renderCardsForSlide = (slideIndex: number) => {
    const startIndex = slideIndex * 6;
    const selectedExercises = filteredExercises.slice(startIndex, startIndex + 6);

    return (
      <div className="grid grid-cols-3 gap-4">
        {selectedExercises.map((exercise, index) => (
          <Card
            key={index}
            _id={exercise._id}
            name={exercise.name}
            type={exercise.type}
            isChecked={exercise.isChecked}
            youtubeLink={exercise.youtubeLink}
            imageUrl={exercise.imageUrl}
            musclesWorkedIMG={exercise.musclesWorkedIMG}
            muscleGroup={exercise.muscleGroup}
            routineGroup={exercise.routineGroup}
            musclesWorked={exercise.musclesWorked}
            instructions={exercise.instructions}
            benefits={exercise.benefits}
            commonMistakes={exercise.commonMistakes}
            onViewDetails={() => onViewDetails(exercise)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {filteredExercises.length > 0 ? (
        <>
          <div className="flex items-center w-full">
            {numSlides > 1 && (
              <button
                onClick={handlePrevSlide}
                className="hidden sm:block text-[50px] font-bold text-gray-400 px-4 py-2 rounded-md absolute left-[-90px] z-10">
                <span className="nf nf-fa-angle_left"></span>
              </button>
            )}
            <div
              className="flex transition-transform duration-500 ease-in-out w-full space-x-8 gap-20 ml-5 overflow-x-auto sm:overflow-visible sm:transform sm:translate-x-0"
              style={{ transform: `translateX(-${currentSlide * 109.5}%)` }}
            >
              {Array.from({ length: numSlides }).map((_, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  {renderCardsForSlide(index)}
                </div>
              ))}
            </div>
            {numSlides > 1 && (
              <button
                onClick={handleNextSlide}
                className="hidden sm:block text-[50px] font-bold text-gray-400 px-4 py-2 rounded-md absolute right-[-90px] z-10">
                <span className="nf nf-fa-angle_right"></span>
              </button>
            )}
          </div>
          <div className="hidden sm:block absolute bottom-[-35px] flex space-x-2 z-5">
            {Array.from({ length: numSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-transform duration-300 ease-in-out ${
                  currentSlide === index ? 'bg-gray-800 scale-125' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500 text-lg mx-auto">
          No workouts have been added to this category yet. we're still on it!
        </div>
      )}
    </div>
  );
};

export default Slider;
