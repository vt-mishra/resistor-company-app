import React, { useEffect, useState } from "react";
import "./../styles/_select_packaging.scss";
import arrowImg from "./../assets/icons/homeArrow.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SelectPackaging = (props) => {
  const navigate = useNavigate();
  let findByResister = JSON.parse(localStorage.getItem("findByResister"));
  const [isCheckBox, setIsCheckBox] = useState(findByResister.packaging);

  const onClickNextButton = () => {
    findByResister.packaging = isCheckBox;
    localStorage.setItem("findByResister", JSON.stringify(findByResister));
    navigateTo("../order");
  };
  const navigateTo = (path) => {
    navigate(path);
  };
  const handleCheckbox = () => {
    setIsCheckBox(!isCheckBox);
    console.log("value", setIsCheckBox(!isCheckBox));
  };
  useEffect(() => {
    props.getData({
      title: "Select Packaging",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <div className="selectPackaging-page">
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
                  <h2>{t("select_packaging_header")}</h2>
                </div>
              </div>
              <div className="main-box d-flex">
                <div className="left-part">
                  <div className="tabs d-flex">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="checkbox"
                        id="1"
                      />
                    </div>
                    <div className="text-box">
                      <h2>Bulk</h2>
                    </div>
                  </div>
                  <div className="tabs d-flex">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="checkbox"
                        id="2"
                      />
                    </div>
                    <div className="text-box">
                      <h2>Tape & Ammo Pack</h2>
                    </div>
                  </div>
                </div>
                <div className="right-part">
                  <div className="tabs d-flex">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="checkbox"
                        id="5"
                      />
                    </div>
                    <div className="text-box">
                      <h2>Tape & Reel</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-box2">
                <div className="content-area">
                  <div className="tab-A d-flex">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="checkbox"
                        id="9"
                        checked={isCheckBox == "Bulk"}
                        onChange={() => {
                          setIsCheckBox("Bulk");
                        }}
                      />
                    </div>
                    <div className="text-box">
                      <h2>Bulk</h2>
                    </div>
                  </div>
                  <div className="tab-A d-flex">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="checkbox"
                        id="10"
                        checked={isCheckBox == "Tape & Ammo Pack"}
                        onChange={() => {
                          setIsCheckBox("Tape & Ammo Pack");
                        }}
                      />
                    </div>
                    <div className="text-box">
                      <h2>Tape & Ammo Pack</h2>
                    </div>
                  </div>
                  <div className="tab-A d-flex">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="checkbox"
                        id="11"
                        checked={isCheckBox == "Tape & Reel"}
                        onChange={() => {
                          setIsCheckBox("Tape & Reel");
                        }}
                      />
                    </div>
                    <div className="text-box">
                      <h2>Tape & Reel</h2>
                    </div>
                  </div>
                </div>

                <div className="Btn-box d-flex justify-content-end">
                  <div className="d-flex ">
                    <button
                      type="button"
                      className="back"
                      onClick={() => navigate(-1)}
                    >
                      {t("back_btn")}
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="next"
                      disabled={!isCheckBox}
                      onClick={(e) => onClickNextButton()}
                    >
                      {t("next_btn")}
                    </button>
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

export default SelectPackaging;
