import React from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const projects = [
    project1Ref.current,
    project2Ref.current,
    project3Ref.current,
  ];

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom -=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="mission" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        {/* Title moved to the right-side wrapper below */}
        <div className="showcaselayout md:flex md:items-center md:gap-12">
          {/* LEFT */}
          <div className="first-project-wrapper md:w-1/2" ref={project1Ref}>
            <div className="image-wrapper">
              <img
                src="public/images/ai-slop-maps.png"
                alt="National Roadless Areas"
              />
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden md:w-1/2 md:flex md:flex-col md:justify-center">
            <div className="project" ref={project2Ref}>
              <div className="mb-8">
                <TitleHeader title="Our Mission" className="justify-start" />
              </div>
              <div className="text-content">
                <p className="text-white-50 md:text-xl mb-6">
                  RadGeo confronts the wildfire crisis by challenging colonial
                  land practices and supporting Indigenous-led stewardship to
                  restore healthy, fire-resilient landscapes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
