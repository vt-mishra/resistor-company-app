import "./../styles/_aboutUs.scss";
import { Link } from "react-router-dom";
import pdfImage from "./../assets/icons/pdfImg.svg";
import arrowImg from "./../assets/icons/homeArrow.svg";
import aboutImg from "./../assets/icons/aboutImg.svg";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const AboutUs = (props) => {
  useEffect(() => {
    props.getData({
      title: "About Us",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      {/* desktop */}
      <div className="about-us-page ">
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
              <div className="row-B1">
                <div className="head-text">
                  <label>{t('about_title')}</label>
                </div>
              </div>
              <div className="about-box">
                <div className="yt-video">
                  <iframe
                   src="https://www.youtube.com/embed/a7kEtpUMNYY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="yt-text">
                  <h3>{t('htr_company_video')}</h3>
                </div>
                <div className="text-box">
                  <p>
                  {t('htr_company_text')}
                  </p>
                </div>
                <div className="bottom-box-A d-flex">
                  <div className="title-box">
                    <h3>{t('htr_company_presentation')}</h3>
                  </div>
                  <div className="img-box">
                    <img src={pdfImage} alt="" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="bottom-box-B d-flex">
                    <div className="img-box">
                      <img src={pdfImage} alt="" />
                    </div>
                  </div>
                </div>
                <div className="bottom-title">
                  <h3>{t('htr_company_presentation')}</h3>
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

export default AboutUs;
