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
          As a Full Stack Developer with a robust command of React, MongoDB,
          Express.js, Node.js, Tailwind CSS, and Sass, I am on the hunt for a
          role that not only challenges me but also allows me to put my diverse
          skill set to good use in driving meaningful societal change. My
          passion lies in contributing to a team that values collaboration and
          innovation, where my continuous learning and development can thrive.
        </p>
        <div className={styles.buttondiv}>
          <a href="mailto:myemail@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="../../../assets/hero/SuvankarDas-Resume.pdf"
            download="SuvankarDas Resume"
            target="blank"
            className={styles.resumeBtn}>
            Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/cuteLittleBoy.png")}
        alt="Hero Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
