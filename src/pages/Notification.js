import "./../styles/_notification.scss";
import { Link } from "react-router-dom";
import network from "./../assets/icons/network.svg";
import arrowImg from "./../assets/icons/homeArrow.svg";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { PushNotifications } from "@capacitor/push-notifications";
import { useTranslation } from "react-i18next";

const Notification = (props) => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  useEffect(() => {
    props.getData({
      title: "Notifications",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <div className="notification-page">
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
              <div className="main-content">
                <div className="product-card active d-flex">
                  <div className="network-img">
                    <div className="network-box">
                      <img src={network} alt="" />
                    </div>
                  </div>
                  <div className="text-box">
                    <div className="text-area">
                      <div className="top-row">
                        <li className="text-key">htr-india.com</li>
                        <li className="text-value">20 March</li>
                      </div>
                      <div className="bottom-row">
                        HTR Launches New series of Resistor
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-card active d-flex">
                  <div className="network-img">
                    <div className="network-box">
                      <img src={network} alt="" />
                    </div>
                  </div>
                  <div className="text-box">
                    <div className="text-area">
                      <div className="top-row">
                        <li className="text-key">htr-india.com</li>
                        <li className="text-value">13 March</li>
                      </div>
                      <div className="bottom-row">
                        HTR Launches New HCAL Resistor for Automobile
                        Application
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-card  d-flex">
                  <div className="network-img">
                    <div className="network-box">
                      <img src={network} alt="" />
                    </div>
                  </div>
                  <div className="text-box">
                    <div className="text-area">
                      <div className="top-row">
                        <li className="text-key">htr-india.com</li>
                        <li className="text-value">5 March</li>
                      </div>
                      <div className="bottom-row">
                        HTR Launches New series of Resistor
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-card d-flex">
                  <div className="network-img">
                    <div className="network-box">
                      <img src={network} alt="" />
                    </div>
                  </div>
                  <div className="text-box">
                    <div className="text-area">
                      <div className="top-row">
                        <li className="text-key">htr-india.com</li>
                        <li className="text-value">28 Feb</li>
                      </div>
                      <div className="bottom-row">
                        HTR Launches New series of Resistor
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-card d-flex">
                  <div className="network-img">
                    <div className="network-box">
                      <img src={network} alt="" />
                    </div>
                  </div>
                  <div className="text-box">
                    <div className="text-area">
                      <div className="top-row">
                        <li className="text-key">htr-india.com</li>
                        <li className="text-value">17 Feb</li>
                      </div>
                      <div className="bottom-row">
                        HTR Launches New series of Resistor
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="bottom-box">
                  <div className="bottom-row-2">
                    <div className="btn-box">
                      <button
                        className="btn-1"
                        onClick={(e) => navigateTo("/")}
                      >
                        {t('notification_close')}
                      </button>
                      {/* <button
                        className="btn-2"
                        onClick={(e) => navigateTo("../order")}
                      >
                        Next
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col Col-1"></div>
        </div>
        <div className="top-container"></div>
      </div>
    </>
  );
};

export default Notification;
