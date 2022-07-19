import React from "react";
import zenProject from './cards/Zenproject';
import UpcycleStore from "./cards/upcycle";



function projects(){
    return(
        <section className="projects">
            <zenProject></zenProject>
            <UpcycleStore></UpcycleStore>
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

export default projects;

/* card format place new cards in card folder
<div className="card">
                <a href="">
                    <img src="" alt="General norms quiz" />
                </a>
                <h4 className="title">General Norms quiz</h4>
            </div>
*/