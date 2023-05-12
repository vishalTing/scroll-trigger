import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ScrollSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <h3>Secton 1</h3>
          </div>
          <div className="scroll-section">
            <h3>Secton 2</h3>
          </div>
          <div className="scroll-section">
            <h3>Secton 3</h3>
          </div>
          <div className="scroll-section">
            <h3>Secton 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
