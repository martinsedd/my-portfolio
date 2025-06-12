import './Hero.css';

const Hero = () => {
  return (
    <section id={"home"} className={"hero-container"}>
      <div className={"hero-content"}>
        <h1 className={"hero-headline"}>
          I build robust backend solutions that solve complex problems.
        </h1>
        <p className={"hero-subheadline"}>
          A dedicated backend developer specializing in Typescript, Java, and
          Python. I thrive on challenges and am commited to delivering
          high-quality, scalable code. Let's build something great together.
        </p>
        <a href={"#projecs"} className={"hero-cta-button"}>
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;