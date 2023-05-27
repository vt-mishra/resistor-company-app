import "./../styles/_contactUs.scss";
import arrowImg from "./../assets/icons/homeArrow.svg";
import websiteImg from "./../assets/icons/website.svg";
import locationImg from "./../assets/icons/locationBox.svg";
import whatsappImg from "./../assets/icons/whattsappBox.svg";
import phoneImg from "./../assets/icons/phoneBox.svg";
import mailImg from "./../assets/icons/msgBox.svg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const ContactUs = (props) => {
  useEffect(() => {
    props.getData({
      title: "Contact Us",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      {/* desktop */}
      <div className="contactUs-page">
        <div className="top-container"></div>
        <div className="row">
          <div className="col Col-1">
            <div className="head-box">
              <div className="back-box">
                <Link to="/">
                  <img alt="arrow" src={arrowImg} className="back-img" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="contact-box">
              <div className="row-B1">
                <div className="head-text">
                  <label>{t('contact_title')}</label>
                </div>
              </div>
              <div className="item-box">
                <p className="contact-heading">Hi-Tech Resistors Pvt. Ltd.</p>
                {/* <div className="contact-location">
                  <img alt="location" src={locationImg} />
                  <label className="contact-address">
                    Buty Compound, Mount Road Extension, Sadar, Nagpur 440 001,
                    India
                  </label>
                </div> */}
                <div className="contact-box1">
                  <img alt="location" src={locationImg} />
                  <div className="d-flex align-items-start">
                    <label className="contact-address">
                    {t('contact_address')}
                    </label>
                  </div>
                </div>
                <div className="number-box">
                  <img alt="contact" src={phoneImg} />
                  <div className="sub-box">
                    <label className="contact-info">
                      <span className="first-num">+91-712-2533269 </span>{" "}
                      <span>+ 91-712-2531134</span>
                    </label>
                  </div>
                </div>
                <div className="whatsapp-gmail-box  d-none">
                  <div className="whatsapp-box-desktop">
                  <img alt="watsapp" src={whatsappImg} />
                  <label className="contact-info">+91 986030XXXX7</label>
                  </div>                 
                   <div className="gmail-box-desktop"> 
                   <img alt="email" src={mailImg} />
                  <a href="info@htr-india.com">
                    <label className="contact-info">info@htr-india.com</label>
                  </a>
                   </div>                
                </div>
                <div className="whatsapp-box">
                  <img alt="watsapp" src={whatsappImg} />
                  <div className="sub-box">
                    <label className="contact-info ">+91 986030XXXX7</label>
                  </div>
                </div>

                <div className="gmail-box">
                  <img alt="email" src={mailImg} />
                  <div className="sub-box">
                    <a href="info@htr-india.com" className="contact-info">
                      info@htr-india.com
                    </a>
                  </div>
                </div>
                <div className="website-box">
                  <img alt="website" src={websiteImg} />
                  <div className="sub-box">
                    <a href="www.htr-india.com" className="contact-info">
                      www.htr-india.com
                    </a>
                  </div>
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

export default ContactUs;
