import React from 'react';
import Project from '../Project'

const projects = [
  {
    title: "test",
    img: "",
    imgAlt: "test",
    desc: "test",
    deployed: "#",
    repo: "#"
  }
]

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <section>
        <Project props={projects}/>
      </section>
    </div>
  );
}
