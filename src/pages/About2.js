import "./../styles/_about2.scss";
import logo from "./../assets/icons/Logo.svg";
import backArrowImg from "./../assets/images/arrow.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
const About2 = (props) => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  }
  useEffect(() => {
    props.getData({
      layout:"layoutA",
      title: "",
      backBtn: false,
      notificationBtn: true,
      settingBtn: true,
    });
  }, []);
  return (
    <>
      <div className="about2-page">
        <div className="top-container"></div>
        <div className="row">
          <div className="col Col-1">
            <div className="head-box">
              <div className="back-box">
                <Link to="/">
                  <img alt="arrow" src={backArrowImg} className="back-img" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="content-box">
              <div className="row-B1">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
              </div>
              <div className="about-head">
                <h1>HTR Resistor Finder</h1>
              </div>
              <div className="about-desc">
                <div className="version">
                  <p>Version 2.0 [Id: p3r3d3]</p>
                </div>
                <div className="copyright">
                  <p>
                    Copyright ©️ 2023 Hi-Tech Resistors Pvt.Ltd.
                    <span>All rights reserved.</span>
                  </p>
                </div>
                <div className="develop">
                  <p>Developed by Cralina(www.cralina.com)</p>
                </div>
              </div>
              <div className="Btn-box d-flex justify-content-end">
                <button
                  type="button"
                  className="back"
                  onClick={(e) => navigateTo("/")}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
          <div className="col Col-1"></div>
        </div>
        <div className="bottom-container"></div>
      </div>
    </>
  );
};

export default About2;
