import './Hero.css';
import {TypeAnimation} from "react-type-animation";

const Hero = () => {
  return(
    <section id={"home"} className={"hero-container"}>
      <div className={"hero-content"}>
        <h1>
          I build{" "}
          <TypeAnimation
            sequence={[
              "robust backend solutions.",
              2000,
              "scalable APIs.",
              2000,
              "high-performance systems.",
              2000,
            ]}
            wrapper={"span"}
            speed={50}
            cursor={true}
            repeat={Infinity}
          />
        </h1>
        <p className={"hero-subheadline"}>
          A dedicated backend developer specializing in Typescript, Java, and
          Python. I thrive on challenges and am commited to delivering
          high-quality, scalable code. Let's build something great together.
        </p>
        <a href={"#projects"} className={"hero-cta-button"}>
          View My Work
        </a>
        <div className={"hero-socials"}>
          <a
            href={"https://github.com/martinsedd"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            aria-label={"Github"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={"0 0 24 24"}
              fill={"currentColor"}
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href={"https://linkedin.com/in/martinsedd"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            aria-label={"LinkedIn"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={"0 0 24 24"}
              fill={"currentColor"}
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
      <a href={"#projects"} className={"scroll-down-indicator"} aria-label={"Scroll down"}>
        <svg
          xmlns={"http://www.w3.org/2000/svg"}
          fill={"none"}
          viewBox={"0 0 24 24"}
          strokeWidth={1.5}
          stroke={"currentColor"}
        >
          <path
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            d={"m19.5 8.25-7.5 7.5-7.5-7.5"}
          />
        </svg>
      </a>
    </section>
  );
};

export default Hero;