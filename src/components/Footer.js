import React, { useState } from "react";
import gitImg from "../assets/icons/github-pngrepo-com.png";
import linkedinImg from "../assets/icons/linkedin-pngrepo-com.png";
import stackOverFlowimg from "../assets/icons/stackoverflow-icon-pngrepo-com.png";

function Footer() {


    return (
        <section className="footer">
            <h2>You can also find me on</h2>
            <div className="linkBox">
                <img src={gitImg} alt="github" href="https://github.com/MaxAFath?tab=repositories" className="img-thubnail" />
                <img src={linkedinImg} alt="linkedin" href="www.linkedin.com/in/max-fathauer-05259b92" className="img-thubnail" />
                <img src={stackOverFlowimg} alt="stack overflow" href="https://stackoverflow.com/users/9643098/user9643098" className="img-thubnail" />
            </div>
        </section>
    );
}

export default Footer;