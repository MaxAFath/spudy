import react from "react";
import imgThree from '../../assets/imgs/three.png';
//src\assets\imgs\upcycle.png
function UpcycleStore() {
    return (
        <div className="card flex-row">
            <a href="https://maxafath.github.io/project-two/">
                <img src={imgThree} className="card-img" alt="Oracle"></img>
            </a>
            <h4 className="title">Oracle/QueueHQ</h4>
        </div>
    );
}

export default UpcycleStore;