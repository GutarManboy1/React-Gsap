import React from "react";
import { useMediaQuery } from "react-responsive";
import { featureLists, goodLists } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Art = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });
    maskTimeline.to(".will-fade", {
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
    })
    .to('.masked-img', {
      scale: 1.3,
      maskPosition: "center",
      ease: "power1.inOut",
      maskSize: "400%",
      duration: 1
    })
    .to('.masked-content', {
      opacity: 1,
      ease: "power1.inOut",
      duration: 1
    })
  });
  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The Craft</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="checkmark" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <div>
            <ul className="space-y-4 will-fade">
              {featureLists.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center justify-start gap-4"
                >
                  <img src="/images/check.png" alt="checkmark" />
                  <p className="md:w-fit w-60">{feature}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="masked-container">
            <h2 className="will-fade">Taste the Gorgeosity</h2>
            <div className="masked-content">
              <h3>Gorgeousness Made Flesh</h3>
              <p>To devastate is easier and more spectacular than to create.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
