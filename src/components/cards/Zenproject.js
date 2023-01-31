import react from "react";
import zenProjectimg from "../../assets/imgs/img-1.png";

function theZen() {
    return (
        <div className="card flex-row">
            <h4 className="title">Zen Project</h4>
            <a href="https://maxafath.github.io/the-zen-project/">
                <img src={zenProjectimg} className="card-img" alt="The Zen Porject"></img>
            </a>

        </div>
    );
}

export default theZen;