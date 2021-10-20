import React from 'react';
import notfoundImg from "../../images/404error.gif";

const Notfound = () => {
    return (
        <div>
            <img className="img-fluid" src={notfoundImg} alt="" />
        </div>
    );
};

export default Notfound;