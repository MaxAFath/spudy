import React, { useState } from "react";

const [gitrepo, setGitrepo] = useState('"https://github.com/MaxAFath?tab=repositories"');
const [linkedin, setLinkedin] = useState('"www.linkedin.com/in/max-fathauer-05259b92"');
const [resume, setResume] = useState('"https://www.dropbox.com/s/4z5avncldby5gg4/Max%20A%20Resume.pdf?dl=0"');

function Nav() {
    <section>
        <div className="linkBox">
            <ul className="links">
                <li href={gitrepo}>Github Repos</li>
                <li href={linkedin}>Linkedin</li>
                <li href={resume}>Resume</li>
            </ul>
        </div>
    </section>
};

export default Nav;