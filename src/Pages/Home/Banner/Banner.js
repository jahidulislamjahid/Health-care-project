import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div>
                <h1 className="fw-bold lh-base font-monospace heading">A Sound Health for  <br /> A Sound Life.</h1>
                <div>
                    <input className="banner-input mt-3" type="text" name="search" placeholder="Search.." />
                </div>
                <div class="container mt-5 extra-portion">
                    <div class="row">
                        <div className="col">
                            <h2 className="text-white">Quick Search</h2>
                        </div>
                        <div class="col">
                            <button className="banner-btn">Pragnency</button>
                        </div>
                        <div class="col">
                            <button className="banner-btn">Dental</button>
                        </div>
                        <div class="col">
                            <button className="banner-btn">Neurology</button>
                        </div>
                        <div class="col">
                            <button className="banner-btn">Heart Disease</button>
                        </div>
                        <div class="col">
                            <button className="banner-btn">Hematology</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;