import "./../styles/_categories.scss";
import vector from "./../assets/images/Vector.svg";
import whiteArrow from "./../assets/images/whiteArrow.svg";
import { Link } from "react-router-dom";
import arrowImg from "./../assets/icons/homeArrow.svg";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Categories = (props) => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  useEffect(() => {
    props.getData({
      title: "Categories",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      {/* desktop */}
      <div className="categories-page">
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
                  <label>{t('category_head_text')}</label>
                </div>
              </div>
              <div className="item-box d-none">
                <div className="d-flex justify-content-md-between ">
                  <div className="item-card">
                    <label>{t('category_item_one')}</label>
                    <img alt="vector" src={vector} />
                  </div>
                  <div className="item-card">
                    <label>{t('category_item_two')}</label>
                    <img alt="vector" src={vector} />
                  </div>
                </div>
                <div className="d-flex justify-content-md-between ">
                  <div className="item-card">
                    <label>{t('category_item_three')}</label>
                    <img alt="vector" src={vector} />
                  </div>
                  <div className="item-card">
                    <label>{t('category_item_four')}</label>
                    <img alt="vector" src={vector} />
                  </div>
                </div>
                <div className="d-flex justify-content-md-between ">
                  <div className="item-card">
                    <label>{t('category_item_five')}</label>
                    <img alt="vector" src={vector} />
                  </div>
                  <div
                    className="item-card"
                    onClick={(e) => navigateTo("../custom_products")}
                  >
                    <label>{t('category_item_six')}</label>
                    <img alt="vector" src={vector} />
                  </div>
                </div>
                <div className="d-flex justify-content-md-between ">
                  <div
                    className="item-card active"
                    onClick={(e) => navigateTo("../current_sense_resistors")}
                  >
                    <label>{t('category_item_seven')}</label>
                    <img alt="vector" src={whiteArrow} />
                  </div>
                  <div className="item-card">
                    <label>{t('category_item_eight')}</label>
                    <img alt="vector" src={vector} />
                  </div>
                </div>
                <div className="d-flex justify-content-md-between ">
                  <div className="item-card">
                    <label>{t('category_item_nine')}</label>
                    <img alt="vector" src={vector} />
                  </div>
                </div>
              </div>
              <div className="item-box">
                <div className="d-flex justify-content-md-between ">
                  <div className="item-card">
                    <label>{t('category_item_one')}</label>
                    <img alt="vector" src={vector} />
                  </div>
                  <div className="item-card">
                    <label>{t('category_item_eight')}</label>
                    <img alt="vector" src={vector} />
                  </div>
                </div>
                <div className="d-flex justify-content-md-between ">
                  <div className="item-card">
                    <label>{t('category_item_three')}</label>
                    <img alt="vector" src={vector} />
                  </div>
                  <div className="item-card">
                    <label>{t('category_item_five')}</label>
                    <img alt="vector" src={vector} />
                  </div>
                </div>
                <div className="d-flex justify-content-md-between ">
                  <div
                    className="item-card active"
                    onClick={(e) => navigateTo("../current_sense_resistors")}
                  >
                    <label>{t('category_item_seven')}</label>
                    <img alt="vector" src={whiteArrow} />
                  </div>
                  <div className="item-card">
                    <label>{t('category_item_nine')}</label>
                    <img alt="vector" src={vector} />
                  </div>
                </div>
                <div className="d-flex justify-content-md-between ">
                  <div className="item-card">
                    <label>{t('category_item_two')}</label>
                    <img alt="vector" src={vector} />
                  </div>
                  <div className="item-card">
                    <label>{t('category_item_four')}</label>
                    <img alt="vector" src={vector} />
                  </div>
                </div>
                <div className="d-flex justify-content-md-between ">
                  <div
                    className="item-card"
                    onClick={(e) => navigateTo("../custom_products")}
                  >
                    <label>{t('category_item_six')}</label>
                    <img alt="vector" src={vector} />
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

export default Categories;
