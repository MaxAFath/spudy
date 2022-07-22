import React, { useState } from "react";

function Nav() {
    const [about, setAbout] = useState('#about');
    const [contact, setContact] = useState('#contact');
    const [projects, setProjects] = useState('#projects');

    return (
        <section>
            <ul>
                <li ><a href={about}> About</a></li>
                <li ><a href={contact}>Contact</a></li>
                <li ><a href={projects}>Projects</a></li>
            </ul>

        </section>
    );
};

export default Nav;