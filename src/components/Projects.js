import React from "react";
import ZenProject from "./cards/Zenproject";
import UpcycleStore from "./cards/Upcycle";



function projects(){
    return(
        <section className="projects">
            <ZenProject></ZenProject>
            <UpcycleStore></UpcycleStore>
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