import react from "react";
import upcycleImg from '../../assets/imgs/upcycle.png';

function UpcycleStore() {
    return (
        <div className="card">
            <a href="https://maxafath.github.io/the-zen-project/">
                <img src={upcycleImg} alt="Upcycle"></img>
            </a>
            <h4 className="title">upcycle</h4>
        </div>
    );
}

export default UpcycleStore;