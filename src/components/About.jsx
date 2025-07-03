import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import React from "react";

const About = () => {

    useGSAP(()=>{
        const titleSplit = SplitText.create("#about h2", {
            type:"words",
            
        })
        const scrollTimeline = gsap.timeline({
            scrollTrigger :{
                trigger: "#about", 
                start: "top center"
            }
        })
        scrollTimeline.from (titleSplit.words, {
            opacity: 0,
            duration: 1.2,
            ease: "expo.out",
            yPercent: 100,
            stagger: 0.02
        })
        .from('.top-grid div, .bottom-grid div', {
            opacity: 0,
            duration: 1, 
            ease: "expo.out",
            stagger: 0.02
        }, '-=0.5')
    })
  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails in the City</p>
            <h2>
              Crafted by experts <span className="text-white">-</span>with
              passion
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Each of our cocktails is carefully crafted by our expert
              mixologists, using only the finest ingredients to create a unique
              and refreshing experience.
            </p>
            <div>
              <p className="text-xl md:text-3xl font-bold"></p>
              <span>4.8</span>
              <p className="text-sm text-white-100">
                More than +100000 sloppy reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy">
            <img src="images/abt1.png" alt="grid-img-1" />
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="noisy">
            <img src="images/abt2.png" alt="grid-img-2" />
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="noisy">
            <img src="images/abt5.png" alt="grid-img-5" />
          </div>
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy">
            <img src="images/abt3.png" alt="grid-img-3" />
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="noisy">
            <img src="images/abt4.png" alt="grid-img-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
