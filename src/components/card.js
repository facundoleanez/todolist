import React from 'react';



function GeneralCard() {
    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={"./images/casa.jpg"} className="card-img-top" alt="/" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">some quick examp´le to build on the card</p>
                <a href="#" className="btn btn-success">go somewhere</a>
            </div>

        </div>
    )

};
export default GeneralCard;