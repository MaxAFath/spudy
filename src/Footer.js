import React, { useState } from "react";
import gitImage from "../../assets/github-pngrepo-com.png";
import linkedinImg from "../../assets/linkedin-pngrepo-com.png";
import stackOverflowImg from "../../assets/stackoverflow-icon-pngrepo-com.png";

function Footer() {

    const [gitrepo, setGitrepo] = useState('"https://github.com/MaxAFath?tab=repositories"');
    const [linkedin, setLinkedin] = useState('"www.linkedin.com/in/max-fathauer-05259b92"');
    const [overflow, setOverflow] = useState("https://stackoverflow.com/users/9643098/user9643098");

    return (
        <section className="footer">
            <div className="linkBox">
                <ul className="links">
                    <li href={gitrepo}>Github Repos</li>
                    <li href={linkedin}>Linkedin</li>
                    <li href={overflow}>Stack Overflow</li>
                </ul>
            </div>
        </section>
    );
}

export default Footer;