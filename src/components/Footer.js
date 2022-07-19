import React, { useState } from "react";
import gitImg from "../assets/github-pngrepo-com.png";
import linkedinImg from "../assets/linkedin-pngrepo-com.png";
import stackOverFlowimg from "../assets/stackoverflow-icon-pngrepo-com.png";

function Footer() {

    const [gitrepo, setGitrepo] = useState('"https://github.com/MaxAFath?tab=repositories"');
    const [linkedin, setLinkedin] = useState('"www.linkedin.com/in/max-fathauer-05259b92"');
    const [overflow, setOverflow] = useState("https://stackoverflow.com/users/9643098/user9643098");

    return (
        <section className="footer">
            <div className="linkBox">
                <ul className="links">
                    <li href={gitrepo}><img src={gitImg} alt="github" className="img-thubnail" style={{ width: "100%" }} /></li>
                    <li href={linkedin}><img src={linkedinImg} alt="linkedin" className="img-thubnail" style={{ width: "100%" }} /></li>
                    <li href={overflow}><img src={stackOverFlowimg} alt="stack overflow" className="img-thubnail" style={{ width: "100%" }} /></li>
                </ul>
            </div>
        </section>
    );
}

export default Footer;