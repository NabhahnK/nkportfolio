import React from "react";
import nabhahn from "../../images/nabhahnkamaal.jpg";

export default function About() {
  return (
    <div>
      <section id="about-me">
        <img
          id="nabhahn"
          alt="nabhahn"
          src={nabhahn}
        />
        <p id="about-me-text">
          My name is Nabhahn Kamaal. I was born and rasied in Tucson, Az. I've
          always wanted to be a programmer and I started the University of
          Arizona full-stack flex bootcamp to do just that. Currently I am a
          Care Giver for United Cerebral Palsy of Southern Arizona. Im hoping to
          use this program to start a career in writing efficient and capable
          programs.
        </p>
      </section>
    </div>
  );
}
