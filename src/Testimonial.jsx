import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";

export default function Testimonial({ data = [] }) {
  const [slide, setSlide] = useState(0);
  const contentRef = useRef(null);

  const canGoBack = slide > 0;
  const canGoForward = slide < data.length - 1;

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [slide]);

  const goTo = (index) => {
    if (index >= 0 && index < data.length) setSlide(index);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => canGoForward && setSlide(s => s + 1),
    onSwipedRight: () => canGoBack && setSlide(s => s - 1),
    trackMouse: true
  });

  return (
    <div className="container py-24 mx-auto max-w-[1024px] px-1 mb-24">
      <h2 className="mx-auto py-1 mb-8 border-b-bandito-red border-b-2 font-display text-2xl w-fit">
        What Our Customers Are Saying
      </h2>

      {/* Slider Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
        
        {/* Left Arrow - hidden on mobile */}
        <button
          onClick={() => setSlide(s => s - 1)}
          disabled={!canGoBack}
          className={`hidden md:block ${!canGoBack ? "opacity-30" : ""}`}
        >
          <FaAngleLeft className={`size-[56px] border-[3px] rounded-4xl text-bandito-grey p-2 ${canGoBack ? "hover:text-bandito-grey-400 duration-500" : ""}`} />
        </button>

        {/* Slide Content */}
        <div
          {...swipeHandlers}
          className="flex-1 min-h-[120px] flex justify-center items-center text-center px-1 overflow-hidden"
        >
          <div ref={contentRef}>
            <p className="text-lg mb-2 font-body">{data[slide]?.review}</p>
            <p className="font-bold font-body text-bandito-grey-400">{data[slide]?.firstName}</p>
          </div>
        </div>

        {/* Right Arrow - hidden on mobile */}
        <button
          onClick={() => setSlide(s => s + 1)}
          disabled={!canGoForward}
          className={`hidden md:block ${!canGoForward ? "opacity-30" : ""}`}
        >
          <FaAngleRight className={`size-[56px] border-[3px] rounded-4xl text-bandito-grey p-2 ${ canGoForward ? "hover:text-bandito-grey-400 duration-500" : ""}`} />
        </button>
      </div>

      {/* Mobile Indicator Dots */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-3 w-3 rounded-full ${
              index === slide ? "bg-bandito-red" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
