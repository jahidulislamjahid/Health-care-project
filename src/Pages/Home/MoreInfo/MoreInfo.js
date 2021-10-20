import React from 'react';
import moreInfoImg from '../../../images/happy-family.svg';
import './MoreInfo.css';

const MoreInfo = () => {
    return (
        <div className="container my-5">
            <h1 className="fw-bold">WE’VE ALWAYS GOT YOUR BACK!</h1>
            <h5 className="text-muted my-4 lh-lg">It feels great when you know someone is there to listen to you. We Here are not giving up until everyone <br /> dealing with Any health Issue gets support!</h5>

            <div className="row my-5 gap-5">
                <div className="col-md-3 col-sm-12 info-btn">
                    <button className="info-btn">Words By Other</button>
                </div>
                <div className="col-md-4 col-sm-12 info-btn">
                    <button className="info-btn"> Health Difficulities/Meaningful Life</button>
                </div>
                <div className="col-md-4 col-sm-12 info-btn">
                    <button className="info-btn">How Happy You are? Quize a Metere</button>
                </div>

            </div>

            <img className="w-50" src={moreInfoImg} alt="" />
        </div>
    );
};

export default MoreInfo;