import React, {useState} from 'react';
import Project from '../Project'



export default function Portfolio() {
  const [data] = useState([
    {
      title: "test",
      img: "",
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
