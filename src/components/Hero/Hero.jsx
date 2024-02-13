import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Coder", "Programmer"],
    loop: {},
  });
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Suvankar Here!</h1>
        <h2 className={styles.subtitle}> {text} |</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          eius pariatur fugiat nam. Distinctio veritatis sit officiis unde
          pariatur fugit quod magni earum temporibus dolor, perspiciatis
          architecto facere laborum, consectetur ad dolores enim ullam possimus
          praesentium, repellendus non vero corporis dicta voluptatem. Incidunt
          id sunt omnis doloribus repudiandae maiores quo.
        </p>
        <a href="mailto:myemail@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
