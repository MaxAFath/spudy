import react from "react";
import zenProjectimg from "../../assets/imgs/img-1.png";

function theZen(){
    return(
        <div className="card flex-row">
                <a href="https://maxafath.github.io/the-zen-project/">
                    <img src={zenProjectimg} alt="The Zen Porject"></img>
                </a>
                <h4 className="title">Zen Project</h4>
            </div>
    );
}

export default theZen;