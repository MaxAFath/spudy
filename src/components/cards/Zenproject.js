import react from "react";
import zenProject from '../../assets/imgs/zen-project.png';

function theZen(){
    return(
        <div className="card">
                <a href="https://maxafath.github.io/the-zen-project/">
                    <img src={zenProject} alt="The Zen Porject"></img>
                </a>
                <h4 className="title">Zen Project</h4>
            </div>
    );
}

export default theZen;