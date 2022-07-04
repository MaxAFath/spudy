import React, { useState } from "react";

function Nav() {
    const [about, setAbout] = useState('#about');
    const [contact, setContact] = useState('#contact');
    const [projects, setProjects]= useState('#projects'); 

    return (
        <section>
            <un>
                <li className="nav"><a href={about}> about</a></li>
                <li className="nav"><a href={contact}>Contact</a></li>
                <li className="nav"><a href={projects}>Projects</a></li>
            </un>
            
        </section>
    );
};

export default Nav;