import react from "react";
import imgTwo from '../../assets/imgs/img-2.png';
//src\assets\imgs\upcycle.png
function UpcycleStore() {
    return (
        <div className="card flex-row">
            <a href="https://maxafath.github.io/the-zen-project/">
                <img src={imgTwo} alt="Upcycle"></img>
            </a>
            <h4 className="title">upcycle</h4>
        </div>
    );
}

export default UpcycleStore;