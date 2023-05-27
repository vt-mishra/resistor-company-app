import "./../styles/_customProducts.scss";
import arrowImg from "./../assets/icons/homeArrow.svg";
import { Link } from "react-router-dom";
import Device1 from "./../assets/icons/device1.svg";
import Device2 from "./../assets/icons/device2.svg";
import Device3 from "./../assets/icons/device3.svg";
import Device4 from "./../assets/icons/device4.svg";
import Device5 from "./../assets/icons/device5.svg";
import Device6 from "./../assets/icons/device6.svg";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CustomProducts = (props) => {
  useEffect(() => {
    props.getData({
      title: "Custom Product",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      {/* desktop */}
      <div className="custom-products-page">
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
                  <p>{t('custom_product_header')}</p>
                </div>
              </div>
              <div className="top-cards d-flex">
                <div className="cards card-space">
                  <div className="img-box">
                    <img className="device1" src={Device1} alt="" />
                  </div>
                  <div className="card-bottom">
                    <div className="card-text">
                      <p>
                        {t('custom_product_card_text_device_1_2')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cards card-space">
                  <div className="img-box">
                    <img className="device2" src={Device2} alt="" />
                  </div>
                  <div className="card-bottom">
                    <div className="card-text">
                      <p>
                        {t('custom_product_card_text_device_1_2')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div className="img-box">
                    <img className="device3" src={Device3} alt="" />
                  </div>
                  <div className="card-bottom">
                    <div className="card-text">
                      <p>
                      {t('custom_product_card_text_device_3')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-cards d-flex">
                <div className="cards card-space">
                  <div className="img-box">
                    <img className="device4" src={Device4} alt="" />
                  </div>
                  <div className="card-bottom">
                    <div className="card-text">
                      <p>{t('custom_product_card_text_device_4')}</p>
                    </div>
                  </div>
                </div>
                <div className="cards card-space card-five">
                  <div className="img-box">
                    <img className="device5" src={Device5} alt="" />
                  </div>
                  <div className="card-bottom">
                    <div className="card-text">
                      <p>{t('custom_product_card_text_device_5')}</p>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div className="img-box">
                    <img className="device6" src={Device6} alt="" />
                  </div>
                  <div className="card-bottom">
                    <div className="card-text">
                      <p>
                        {t('custom_product_card_text_device_6')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-box">
                <div className="cards card-space">
                  <div className="img-box">
                    <img className="device1" src={Device1} alt="" />
                  </div>
                  <div className="card-bottom">
                    <div className="card-text">
                      <p>
                        {t('custom_product_card_text_device_1_2')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div className="img-box">
                    <img className="device2" src={Device2} alt="" />
                  </div>
                  <div className="card-bottom">
                    <div className="card-text">
                      <p>
                        {t('custom_product_card_text_device_1_2')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cards card-space">
                  <div className="img-box">
                    <img className="device3" src={Device3} alt="" />
                  </div>
                  <div className="card-bottom">
                    <div className="card-text">
                      <p>
                     {t('custom_product_card_text_device_3')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cards ">
                  <div className="img-box">
                    <img className="device4" src={Device4} alt="" />
                  </div>
                  <div className="card-bottom">
                    <div className="card-text">
                      <p>{t('custom_product_card_text_device_4')}</p>
                    </div>
                  </div>
                </div>
                <div className="cards card-space card-five">
                  <div className="img-box">
                    <img className="device5" src={Device5} alt="" />
                  </div>
                  <div className="card-bottom">
                    <div className="card-text">
                      <p>{t('custom_product_card_text_device_5')}</p>
                    </div>
                  </div>
                </div>
                <div className="cards ">
                  <div className="img-box">
                    <img className="device6" src={Device6} alt="" />
                  </div>
                  <div className="card-bottom">
                    <div className="card-text">
                      <p>
                       {t('custom_product_card_text_device_6')}
                      </p>
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

export default CustomProducts;
