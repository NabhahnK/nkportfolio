import React from 'react';

const style = {
    width: '18rem'
}

export default function Project(props) {
    const data = props;
    const projects = data.map((data) => {
        return(<div key={data.title} class="card" style={style.width}>
            <img class="card-img-top" src={data.img} alt={data.imgAlt}/>
                <div class="card-body">
                    <h5 class="card-title">{data.title}</h5>
                    <p class="card-text">{data.desc}</p>
                </div>
                <div class="card-body">
                    <a href={data.deployed} class="card-link">{data.title}</a>
                    <a href={data.repo} class="card-link">Github</a>
                </div>
        </div>)
    })
    return (
        <div>
            {projects}
        </div>
    );
}