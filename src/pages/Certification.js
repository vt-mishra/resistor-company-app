import logo from "./../assets/images/logo.png";
import "./../styles/_home.scss";
import "./../styles/_certification.scss";
import arrowImg from "./../assets/icons/homeArrow.svg";
import workspace from "./../assets/icons/workspace_premium.svg";
import { Link } from "react-router-dom";
import backArrow from "./../assets/icons/backArrow.svg";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


const Certification = (props) => {
  useEffect(() => {
    props.getData({
      title: "Certification",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      {/* desktop */}
      <div className="certification-page">
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
            <div className="content-box">
              <div className="row-B1">
                <div className="head-text">
                  <label>{t('certification_head_text')}</label>
                </div>
              </div>
              <div className="item-box-A">
                <div className="d-flex justify-content-md-between">
                  <div className="certification-item first-item ele_1">
                    <img alt="" src={workspace} />
                    <label>{t('certification_item_one')}</label>
                  </div>
                  <div className="certification-item ele_2">
                    <img alt="" src={workspace} />
                    <label>{t('certification_item_two')}</label>
                  </div>
                </div>
                <div className="d-flex justify-content-md-between">
                  <div className="certification-item-border ele_3">
                    <img alt="" src={workspace} />
                    <label>{t('certification_item_three')}</label>
                  </div>
                  <div className="certification-item-border ele_4">
                    <img alt="" src={workspace} />
                    <label>{t('certification_item_four')}</label>
                  </div>
                </div>
                <div className="d-flex justify-content-md-between">
                  <div className="certification-item ele_5">
                    <img alt="" src={workspace} />
                    <label>{t('certification_item_five')}</label>
                  </div>
                </div>
              </div>
              <div className="item-box-B">
                <div className="d-flex justify-content-md-between">
                  <div className="certification-item first-item ele_1">
                    <img alt="" src={workspace} />
                    <label>{t('certification_item_one')}</label>
                  </div>
                  <div className="certification-item ele_2">
                    <img alt="" src={workspace} />
                    <label>{t('certification_item_three')}</label>
                  </div>
                </div>
                <div className="d-flex justify-content-md-between">
                  <div className="certification-item-border ele_3">
                    <img alt="" src={workspace} />
                    <label>{t('certification_item_five')}</label>
                  </div>
                  <div className="certification-item-border ele_4">
                    <img alt="" src={workspace} />
                    <label>{t('certification_item_two')}</label>
                  </div>
                </div>
                <div className="d-flex justify-content-md-between">
                  <div className="certification-item ele_5">
                    <img alt="" src={workspace} />
                    <label>{t('certification_item_four')}</label>
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

export default Certification;
