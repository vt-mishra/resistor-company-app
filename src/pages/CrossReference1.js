import logo from "./../assets/icons/Logo.svg";
import "./../styles/_cross_reference1.scss";
import pdf_img from "./../assets/icons/pdfImg.svg";
import pdf1_img from "./../assets/icons/pdfBlue.svg";
import startButton from "./../assets/icons/startPlay.svg";
import endButton from "./../assets/icons/endPlay.svg";
import bluePdf from "./../assets/icons/whitePdf.svg";
import backArrow from "./../assets/icons/backArrow.svg";
import arrowImg from "./../assets/icons/homeArrow.svg";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
const CrossReference = (props) => {
  useEffect(() => {
    props.getData({
      title: "Cross Reference",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);
  return (
    <>
      {/* desktop */}
      <div className="cross-reference-page1">
        <div className="top-container"></div>
        <div className="row">
          <div className="col Col-1">
            <div className="head-box">
              <div className="back-box">
                <Link to="/">
                  <img alt="arrowImg" src={arrowImg} className="back-img" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="content-box">
              <div className="row-B1 justify-content-between">
                <div className="head-text">
                  <h2>Cross Reference</h2>
                </div>
              </div>
              <div className="top-box row justify-content-center m-0">
                <div className="select-box-A">
                  <select>
                    <option className="Manufacturer">Manufacturer</option>
                    <option className="WELWYN/TT">WELWYN/TT</option>
                    <option className="YAGEO">YAGEO</option>
                    <option className="UNI-OHM">UNI-OHM</option>
                  </select>
                </div>
                <div className="select-box-B">
                  <select>
                    <option className="Series">Series</option>
                    <option className="W-3123">W-3123</option>
                    <option className="op">WA 84F</option>
                    <option className="op">WA87/T</option>
                  </select>
                </div>
              </div>
              <div className="bottom-box d-flex justify-content-between">
                <div className="startBtn">
                  <img alt="" src={startButton}></img>
                </div>
                <div className="box-B ">
                  <div className="card-A d-flex">
                    <div className="text-box">
                      {" "}
                      HTR Product: <span>FRS</span>
                      <br /> Dissipation: <span>1W to 5W</span> Value Range:
                      <span>10.0 to 100.0</span> Tolerance Option:
                      <span>1%-10%</span>
                    </div>
                    <div className="pdf1">
                      <img alt="" src={pdf1_img}></img>
                    </div>
                  </div>
                </div>
                {/* <div className="box-C ">
                  <div className="card-A d-flex">
                    <div className="text-box">
                      {" "}
                      HTR Product: <span>FRS</span>
                      <br /> Dissipation: <span>1W to 5W</span> Value Range:
                      <span>10.0 to 100.0</span> Tolerance Option:
                      <span>1%-10%</span>
                    </div>
                    <div className="pdf1">
                      <img alt="" src={bluePdf}></img>
                    </div>
                  </div>
                </div> */}
                <div className="endBtn">
                  <img alt="" src={endButton}></img>
                </div>
              </div>
            </div>
          </div>
          <div className="col Col-1"></div>
        </div>
        <div className="bottom-container"></div>
      </div>
      {/* Mobile */}
      {/* <div className="small-cross-reference-page d-sm-block d-sm-none">
        <div className="row">
          <div className="col-sm-12 small-part-A">
            <div className="row icons">
              <div className="col-sm-3 p-0 back-arrow">
                <Link to="/">
                  <img alt="" src={backArrow}></img>
                </Link>
              </div>
              <div className="col-sm-9 logo">
                <img alt="logo" src={logo}></img>
              </div>
            </div>
            <div className="row screen-text p-0">
              <div className="col-sm-12">
                <h5>Cross Reference</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-12 small-part-B d-flex align-items-center justify-content-center">
            <div className="small-container">
              <div className="row main-box justify-content-center">
                <div className="col-sm-auto main-content p-0">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CrossReference;
