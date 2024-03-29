import React, {useState} from 'react';
import Project from '../Project'
import sBlog from "../../images/Salamander-Survival-Guide.png";
import Floof from '../../images/Floof-Corner.png';
import regex from '../../images/Hex-Value-Regex.png';
import MVC from '../../images/MVC-Style-Blog.png';
import CLI from '../../images/CLI-Employee-Tracker.png';
import pmn from '../../images/paymenow.png';




export default function Portfolio() {
  const [data] = useState([
    {
      title: "Payme-Now",
      img: pmn,
      // imgAlt: "Readme Generator",
      desc: "A full-stack group project to give business owners a way to quickly get pay stubs",
      deployed: "https://payme-now.herokuapp.com/",
      repo: "https://github.com/SonnyAddison/payme_now"
    },
    {
      title: "Salamander-Survival-Guide",
      img: sBlog,
      // imgAlt: "Salamander Blog",
      desc: "A full stack blog to help developers in BootCamps.",
      deployed: "https://nameless-mesa-24876.herokuapp.com/",
      repo: "https://github.com/AxelFox67/salamandersurvialguide"
    },
    {
      title: "Floof-Corner",
      img: Floof,
      // imgAlt: "Floof Corner",
      desc: "A full stack app to find an fox and cat book.",
      deployed: "https://nabhahnk.github.io/the-next-big-thing/",
      repo: "https://github.com/NabhahnK/the-next-big-thing"
    },
    {
      title: "Hex-Value-Regex",
      img: regex,
      // imgAlt: "Hex Value Regex Gist",
      desc: "An explanation of regex using hex values",
      deployed: "https://gist.github.com/NabhahnK/3e67c6e3070bb61964c7e0e3df5761b5",
      repo: "https://gist.github.com/NabhahnK/3e67c6e3070bb61964c7e0e3df5761b5"
    },
    {
      title: "MVC-Style-Blog",
      img: MVC,
      // imgAlt: "MVC-Style Blog",
      desc: "A full stack blog",
      deployed: "https://mvc-style-blog.herokuapp.com/",
      repo: "https://github.com/NabhahnK/mvc-tech-blog"
    },
    {
      title: "CLI-Employee-Tracker",
      img: CLI,
      // imgAlt: "CLI Employee Tracker",
      desc: "A CLI app that helps track employees",
      deployed: "https://github.com/NabhahnK/employee-tracker",
      repo: "https://github.com/NabhahnK/employee-tracker"
    },
  ])
  
  return (
    <div class="container justify-content-center">
      <h1 class="text-center">Portfolio</h1>
      <section class="container row justify-content-center offset-1">
        {data.map((data) => (
          <Project data={data} key={data.title}/>
        ))}
        
      </section>
    </div>
  );
}
