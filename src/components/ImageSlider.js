import React,{useState} from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import {RxDotFilled } from "react-icons/rx"

const ImageSlider = () => {
  const slides = [
    {
      url: 'https://reviewvilla.vn/wp-content/uploads/2022/05/du-lich-Sa-Pa-8.jpg',
      title: 'Lobster',
    },
    {
      url: 'https://danviet.mediacdn.vn/296231569849192448/2021/10/25/cahoisapa1-16347770435361016445602-16351394477291264540656.jpg',
      title: 'Sushi',
    },
    {
      url: 'https://dulichkhatvongviet.com/wp-content/uploads/2014/07/xoi-bay-mau-sa-pa.jpg',
      title: 'Pasta',
    },
    {
      url: 'https://vietsensetravel.com/view/at_thit-trau-gac-bep_a8a87316e67912af20400d9d83b81910.jpg',
      title: 'Salmon',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer" >
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer" >
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            className='text-2xl cursor-pointer'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
