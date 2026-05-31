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
          Full-Stack Developer with nearly 2 years of experience designing, building, and maintaining production-grade web applications in a fast-paced startup environment. Led frontend development of a government-scale civic portal serving over 1.5 lakh registered users. Seeking a full-stack or frontend engineering role to deliver high-impact products within a growth-oriented team.
        </p>
        <div className={styles.buttondiv}>
          <a href="mailto:iamsuvankar25@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href={getImageUrl("hero/Suvankar_Das_Dev_resume_June.pdf")}
            download="SuvankarDas Resume"
            target="_blank"
            rel="noopener noreferrer"
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
