import "./../styles/_order.scss";
import arrowImg from "./../assets/icons/homeArrow.svg";
import home from "./../assets/icons/homeIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Order = (props) => {
  const navigate = useNavigate();
  let findByResister = JSON.parse(localStorage.getItem("findByResister"));
  const [order, setOrder] = useState(findByResister.packaging);
  const navigateTo = (path) => {
    navigate(path);
  };

  useEffect(() => {
    props.getData({
      title: "Order",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <div className="order-page">
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
                <label className="content-text">
                {t('order_header_text')}
                </label>{" "}
              </div>
              <div className="item-box">
                <div className="item-card-A">
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item ele-1">
                      <h4 className="Type">
                      {t('order_type')} <span> Wire Wound</span>
                      </h4>
                    </li>
                    <li className="list-group-item ele-2">
                      {" "}
                      <h4 className="Power_Rating">
                      {t('order_power_rating')} <span> 20 Watts</span>
                      </h4>
                    </li>
                  </ul>
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">
                      <h4 className="Mounting">
                        {t('order_mounting')} <span> Interface with Capacitor</span>
                      </h4>
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <h4 className="Resistance">
                      {t('order_resistance')} <span> 20 Ohms</span>
                      </h4>
                    </li>
                  </ul>
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">
                      <h4 className="Housing_Type">
                        {t('order_housing_type')} <span> Silicone/ Cement Coated</span>
                      </h4>
                    </li>
                    <li className="list-group-item">
                      <h4 className="Tolerance">
                        {t('order_tolerance')} <span> 5 Percent</span>
                      </h4>
                    </li>
                  </ul>
                  <ul className="list-group list-group-horizontal row-last">
                    <li className="list-group-item ele-3">
                      <h4 className="Variant">
                        Variant: <span> Null</span>
                      </h4>
                    </li>
                    <li className="list-group-item ele-4">
                      <h4 className="Packaging">
                        {t('order_packaging')} <span> Bulk</span>
                      </h4>
                    </li>
                  </ul>
                </div>
                <div className="item-card-B">
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item ele-1">
                      <h4 className="Type">{t('order_type')}Wire Wound</h4>
                    </li>
                  </ul>
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item ele-1">
                      <h4 className="Type">
                        {t('order_mounting')}Interface with Capacitor
                      </h4>
                    </li>
                  </ul>
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item ele-1">
                      <h4 className="Type">
                        {t('order_housing_type')} Silicone/Cement Coated
                      </h4>
                    </li>
                  </ul>
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item ele-1">
                      <h4 className="Type">Variant: Null</h4>
                    </li>
                  </ul>
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item ele-1">
                      <h4 className="Type">{t('order_power_rating')} 20 Watts</h4>
                    </li>
                  </ul>
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item ele-1">
                      <h4 className="Type">{t('order_resistance')} 20 Ohms</h4>
                    </li>
                  </ul>
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item ele-1">
                      <h4 className="Type">{t('order_tolerance')} 5 Percent</h4>
                    </li>
                  </ul>
                  <ul className="list-group list-group-horizontal ">
                    <li className="list-group-item ele-1 last-order">
                      <h4 className="Type">{t('order_packaging')} Bulk</h4>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <button className="emailUS_Button">{t('order_email_us')}</button>
                </div>
              </div>
              <div className="row-B2">
                <div className="btn-box">
                  <button type="button" className="btn-home text-center"
                    onClick={(e) => navigateTo("/")}
                  >
                    <img src={home} className="" alt="" />
                  </button>
                  <button type="button" className="btn-back"
                  onClick={(e) => navigateTo("../select_packaging")}
                  >
                   {t('back_btn')}
                  </button>
                  <button type="button" className="btn-next">
                  {t('next_btn')}
                  </button>
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

export default Order;
