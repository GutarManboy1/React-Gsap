import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText('.title', {type: 'chars, words'})
    }, [])
  return (
    <>
      <section id="hero" className="noisy">
        <h1>Milk+</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Classic, Refined, UltraViolence</p>
              <p className="subtitle">
                Partake in <br /> In Out In Out
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Our dimly lit bar exuded a cozy charm, with shelves lined with
                gleaming bottles from around the world. <br />
                Each cocktail was a crafted masterpiece, from smoky mezcal
                margaritas to delicate elderflower spritzes.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
