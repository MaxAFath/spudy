import React from "react";
import ZenProject from "./cards/Zenproject";
import UpcycleStore from "./cards/Upcycle";



function projects() {
    return (
        <section className="projects">
            <div id="projects">
                <h3>Here are my past projects</h3>

                <div className="box">
                    <ZenProject></ZenProject>
                    <UpcycleStore></UpcycleStore>
                    
                </div>
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