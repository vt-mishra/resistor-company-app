import { Link } from "react-router-dom";
import logo from "./../assets/icons/Logo.svg";
import backArrowImg from "./../assets/images/arrow.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./../styles/_themepage.scss";
import lightImg from "./../assets/icons/light-theme.svg";
import darkImg from "./../assets/icons/dark-theme.svg";

const ThemePage = (props) => {
  useEffect(() => {
    props.getData({
      layout: "layoutA",
      title: "",
      backBtn: false,
      notificationBtn: true,
      settingBtn: true,
    });
  }, []);
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="theme-page">
        <div className="top-container"></div>
        <div className="row">
          <div className="col Col-1"></div>
          <div className="col-auto">
            <div className="content-box">
              <div className="item-box">
                <div className="box">
                  <div className="img-box">
                    <img src={lightImg} alt="" />
                  </div>
                  <div className="option-box">
                    <div className="d-flex">
                      <input
                        type="radio"
                        className="checkbox "
                        name="checkbox"
                        checked
                      />
                      <h2 className="text-label">Light Mode</h2>
                    </div>
                  </div>
                </div>
                <hr className="dividerLine"/>
                <div className="box">
                  <div className="img-box">
                    <img src={darkImg} alt="" />
                  </div>
                  <div className="option-box">
                    <div className="d-flex">
                      <input
                        type="radio"
                        className="checkbox "
                        name="checkbox"
                        checked
                      />
                      <h2 className="text-label">Dark Mode</h2>
                    </div>
                  </div>
                </div>
            
                <div className="btn-box">
                  <button className="btn-ok" onClick={(e) => navigateTo("/")}>
                    <span className="btn-text">Ok</span>
                  </button>
                </div>
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

export default ThemePage;
