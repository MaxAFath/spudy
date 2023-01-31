import react from "react";
import imgTwo from '../../assets/imgs/img-2.png';
//src\assets\imgs\upcycle.png
function UpcycleStore() {
    return (
        <div className="card flex-row">
            <h4 className="title">Upcycle</h4>
            <a href="https://maxafath.github.io/project-two/">
                <img src={imgTwo} className="card-img" alt="Upcycle"></img>
            </a>
            
        </div>
    );
}

export default UpcycleStore;