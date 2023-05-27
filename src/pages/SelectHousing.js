import React, { useEffect, useState } from "react";
import "./../styles/_select_housing.scss";
import arrowImg from "./../assets/icons/homeArrow.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SelectHousing = (props) => {
  const navigate = useNavigate();
  let findByResister = JSON.parse(localStorage.getItem("findByResister"));
  const [isCheckBox, setIsCheckBox] = useState(findByResister.housing_types);

  const onClickNextButton = () => {
    findByResister.housing_types = isCheckBox;
    localStorage.setItem("findByResister", JSON.stringify(findByResister));
    navigateTo("../power_rating");
  };

  const navigateTo = (path) => {
    navigate(path);
  };
  useEffect(() => {
    props.getData({
      title: "Select a Housing",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <div className="selectHousing-page">
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
                  <h2>{t("select_housing_header_text")}</h2>
                </div>
              </div>
              <div className="main-box">
                <div className="tab-A d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="check9"
                      checked={isCheckBox == "Ceramic Boat"}
                      onChange={() => setIsCheckBox("Ceramic Boat")}
                    />
                  </div>
                  <div className="text-box">
                    <label
                      htmlFor="check9"
                      onChange={() => setIsCheckBox("Ceramic Boat")}
                    >
                      Ceramic Boat
                    </label>
                  </div>
                </div>
                <div className="tab-A d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="check10"
                      checked={isCheckBox == "Ceramic Tube - Round"}
                      onChange={() => setIsCheckBox("Ceramic Tube - Round")}
                    />
                  </div>
                  <div className="text-box">
                    <label
                      htmlFor="check10"
                      onChange={() => setIsCheckBox("Ceramic Tube - Round")}
                    >
                      Ceramic Tube - Round
                    </label>
                  </div>
                </div>
                <div className="tab-A d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="check11"
                      checked={isCheckBox == "Ceramic Tube - Square"}
                      onChange={() => setIsCheckBox("Ceramic Tube - Square")}
                    />
                  </div>
                  <div className="text-box">
                    <label
                      htmlFor="check11"
                      onChange={() => setIsCheckBox("Ceramic Tube - Square")}
                    >
                      Ceramic Tube - Square
                    </label>
                  </div>
                </div>
                <div className="tab-A d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="check12"
                      checked={isCheckBox == "Current Tube - With Slit"}
                      onChange={() => setIsCheckBox("Current Tube - With Slit")}
                    />
                  </div>
                  <div className="text-box">
                    <label
                      htmlFor="check12"
                      onChange={() => setIsCheckBox("Current Tube - With Slit")}
                    >
                      Ceramic Tube - With Slit
                    </label>
                  </div>
                </div>
                <div className="tab-B d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="check13"
                      disabled
                      checked={isCheckBox == "Moulded"}
                      onChange={() => setIsCheckBox("Moulded")}
                    />
                  </div>
                  <div className="text-box">
                    <label
                      htmlFor="check13"
                      onChange={() => setIsCheckBox("Moulded")}
                    >
                      Moulded
                    </label>
                  </div>
                </div>
                <div className="tab-A d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="check14"
                      checked={isCheckBox == "Open Frame"}
                      onChange={() => setIsCheckBox("Open Frame")}
                    />
                  </div>
                  <div className="text-box">
                    <label
                      htmlFor="check14"
                      onChange={() => setIsCheckBox("Open Frame")}
                    >
                      Open Frame
                    </label>
                  </div>
                </div>
                <div className="tab-A d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="check15"
                      checked={isCheckBox == "Open Frame (Wire type)"}
                      onChange={() => setIsCheckBox("Open Frame (Wire type)")}
                    />
                  </div>
                  <div className="text-box">
                    <label
                      htmlFor="check15"
                      onChange={() => setIsCheckBox("Open Frame")}
                    >
                      Open Frame (Wire type)
                    </label>
                  </div>
                </div>
                <div className="tab-A d-flex border border-0">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="check16"
                      checked={isCheckBox == "Silicone/Cement Coated"}
                      onChange={() => setIsCheckBox("Silicone/Cement Coated")}
                    />
                  </div>
                  <div className="text-box ">
                    <label
                      htmlFor="check16"
                      onChange={() => setIsCheckBox("Silicone/Cement Coated")}
                    >
                      Silicone/Cement Coated
                    </label>
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
                    onClick={(e) => onClickNextButton(e)}
                  >
                    {t("next_btn")}
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

export default SelectHousing;
