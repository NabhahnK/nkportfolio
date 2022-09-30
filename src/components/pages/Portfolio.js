import React, {useState} from 'react';
import Project from '../Project'
import sBlog from '../../images/SBlog.PNG';



export default function Portfolio() {
  const [data] = useState([
    {
      title: "Salamander survival guide",
      img: {sBlog},
      imgAlt: "test",
      desc: "test",
      deployed: "#",
      repo: "#"
    }
  ])
  
  return (
    <div>
      <h1>Portfolio</h1>
      <section>
        {data.map((data) => (
          <Project data={data} key={data.title}/>
        ))}
        
      </section>
    </div>
  );
}
