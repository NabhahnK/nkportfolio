import React from 'react';

const style = {
        width: '18rem',
    }

export default function Project({ data }) {
    const { title, img, imgAlt, desc, deployed, repo } = data;
    console.log(img);
    return (
        <div class="col-md-4 col-sm-12">
            <div key={title} className="card " style={style}>
                <img className="card-img-top"
                // src={require(`../images/${title}.png`)}
                src={img}
                alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                </div>
                <div className="card-body">
                    <a href={deployed} className="card-link">{title}</a>
                    <a href={repo} className="card-link">Github</a>
                </div>
            </div>
        </div>
    );
}