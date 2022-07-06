import React from "react";

function Card(){
    return(
        <section className="projects">
            <div className="card">
                <a href="https://maxafath.github.io/the-zen-project/">
                    <img src="" alt="The Zen Porject"></img>
                </a>
                <h4 className="title">Zen Project</h4>
            </div>
            <div className="card">
                <a href="https://github.com/MaxAFath/project-two">
                    <img src="" alt="Upcycle" />
                </a>
                <h4 className="title">Upcycle</h4>
            </div>
            <div className="card">
                <a href="">
                    <img src="" alt="Nerd game" />
                </a>
                <h4 className="title">The nerd game</h4>
            </div>
            <div className="card">
                <a href="">
                    <img src="" alt="General norms quiz" />
                </a>
                <h4 className="title">General Norms quiz</h4>
            </div>
        </section>
    );
}

export default Card;