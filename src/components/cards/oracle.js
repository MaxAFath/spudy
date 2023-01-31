import react from "react";
import imgThree from '../../assets/imgs/three.png';
//src\assets\imgs\upcycle.png
function UpcycleStore() {
    return (
        <div className="card flex-row">
            <h4 className="title">Oracle/QueueHQ</h4>
            <a href="https://maxafath.github.io/project-two/">
                <img src={imgThree} className="card-img" alt="Oracle"></img>
            </a>
            
        </div>
    );
}

export default UpcycleStore;