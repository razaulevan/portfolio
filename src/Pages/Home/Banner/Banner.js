import React from 'react';
import banner from "../../../Images/evncover.png"
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner-container" id="home">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="d-flex flex-column  align-items-center banner-detail">
                        <h1 className="font_rs"> Hi! I'm Evan</h1>
                        <h2 className="font_rs" >Full Stack Web Developer(MERN)</h2>
                        <p> <a href="https://drive.google.com/drive/u/0/folders/1dpBZN7v_-pTprJmB3cm3TaDWHeIp-9x_" target="blank"><button className="banner-resume">Resume</button></a> <a href="" target="blank"><button className="banner-resume">ContactME</button></a></p>
                    </div>
                </div>
                <div className="col-12 col-md-6 img_evan">
                    <img style={{ maxHeight: "550px", borderRadius: "50%" }} src={banner} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;