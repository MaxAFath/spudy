import React, { useState } from "react";
import gitImg from "../assets/icons/github-pngrepo-com.png";
import linkedinImg from "../assets/icons/linkedin-pngrepo-com.png";
import stackOverFlowimg from "../assets/icons/stackoverflow-icon-pngrepo-com.png";

function Footer() {

    const [gitrepo, setGitrepo] = useState('"https://github.com/MaxAFath?tab=repositories"');
    const [linkedin, setLinkedin] = useState('"www.linkedin.com/in/max-fathauer-05259b92"');
    const [overflow, setOverflow] = useState("https://stackoverflow.com/users/9643098/user9643098");

    return (
        <section className="footer">
            <div className="linkBox">
                <img src={gitImg} alt="github" href={gitrepo} className="img-thubnail" style={{ width: "100%" }} />
                <img src={linkedinImg} alt="linkedin" href={linkedin} className="img-thubnail" style={{ width: "100%" }} />
                <img src={stackOverFlowimg} alt="stack overflow" href={overflow} className="img-thubnail" style={{ width: "100%" }} />
            </div>
        </section>
    );
}

export default Footer;