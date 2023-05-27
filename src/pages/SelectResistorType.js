import React, { useEffect, useState } from "react";
import "./../styles/_select_resistor_type.scss";
import arrowImg from "./../assets/icons/homeArrow.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SelectResistorType = (props) => {
  let findByResister = JSON.parse(localStorage.getItem("findByResister"));
  const [isCheckBox, setIsCheckBox] = useState("");

  const onClickNextButton = () => {
    findByResister.type = isCheckBox;
    localStorage.setItem("findByResister", JSON.stringify(findByResister));
    if (
      isCheckBox == "Current Sense / Shunt" ||
      isCheckBox == "Current Sense - Electron Beam Welded" ||
      isCheckBox == "Wire Wound"
    ) {
      navigateTo("../select_mounting");
    } else if (isCheckBox == "Wire Wound (Noise Suppressor)") {
      navigateTo("../product_specification");
    }
  };
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  useEffect(() => {
    onClickNextButton();
    setIsCheckBox(findByResister.type);
    props.getData({
      title: "Select a Resistor type",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <div className="selectResistor-page">
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
                  <h2> {t("select_resistance_type_header")}</h2>
                </div>
              </div>
              <div className="main-box d-flex">
                <div className="left-part">
                  <div className="tabs d-flex">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="radioCheckBox"
                        id="checkOne"
                        checked={isCheckBox == "Current Sense / Shunt"}
                        onChange={() => setIsCheckBox("Current Sense / Shunt")}
                      />
                    </div>
                    <div className="text-box">
                      <label htmlFor="checkOne">Current Sense / Shunt</label>
                    </div>
                  </div>
                  <div className="tabs d-flex border border-0">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="radioCheckBox"
                        id="checkTwo"
                        checked={
                          isCheckBox == "Current Sense - Electron Beam Welded"
                        }
                        onChange={() =>
                          setIsCheckBox("Current Sense - Electron Beam Welded")
                        }
                      />
                    </div>
                    <div className="text-box">
                      <label htmlFor="checkTwo">
                        Current Sense - Electron Beam Welded
                      </label>
                    </div>
                  </div>
                </div>
                <div className="right-part">
                  <div className="tabs d-flex ">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="radioCheckBox"
                        id="checkThree"
                        checked={isCheckBox == "Wire Wound"}
                        onChange={() => setIsCheckBox("Wire Wound")}
                      />
                    </div>
                    <div className="text-box">
                      <label htmlFor="checkThree">Wire Wound</label>
                    </div>
                  </div>
                  <div className="tabs d-flex border border-0">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="radioCheckBox"
                        id="checkFour"
                        checked={isCheckBox == "Wire Wound (Noise Suppressor)"}
                        onChange={() =>
                          setIsCheckBox("Wire Wound (Noise Suppressor)")
                        }
                      />
                    </div>
                    <div className="text-box">
                      <label htmlFor="checkFour">
                        Wire Wound (Noise Suppressor)
                      </label>
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
                        id="check1"
                        checked={isCheckBox == "Current Sense / Shunt"}
                        onChange={() => setIsCheckBox("Current Sense / Shunt")}
                      />
                    </div>
                    <div className="text-box">
                      <label htmlFor="check1">Current Sense / Shunt</label>
                    </div>
                  </div>
                  <div className="tab-B d-flex">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="checkbox"
                        id="check2"
                        checked={
                          isCheckBox == "Current Sense - Electron Beam Welded"
                        }
                        onChange={() =>
                          setIsCheckBox("Current Sense - Electron Beam Welded")
                        }
                      />
                    </div>
                    <div className="text-box">
                      <label htmlFor="check2">
                        Current Sense - Electron Beam Welded
                      </label>
                    </div>
                  </div>
                  <div className="tab-C d-flex">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="checkbox"
                        id="check3"
                        checked={isCheckBox == "Wire Wound"}
                        onChange={() => setIsCheckBox("Wire Wound")}
                      />
                    </div>
                    <div className="text-box">
                      <label htmlFor="check3">Wire Wound</label>
                    </div>
                  </div>
                  <div className="tab-D d-flex border border-0">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="checkbox"
                        id="check4"
                        checked={isCheckBox == "Wire Wound (Noise Suppressor)"}
                        onChange={() =>
                          setIsCheckBox("Wire Wound (Noise Suppressor)")
                        }
                      />
                    </div>
                    <div className="text-box">
                      <label htmlFor="check4">
                        Wire Wound (Noise Suppressor)
                      </label>
                    </div>
                  </div>
                </div>
                <div className="Btn-box d-flex justify-content-end">
                  <div className="d-flex ">
                    <button
                      type="button"
                      className="back"
                      onClick={(e) => navigateTo("/")}
                    >
                      {t("back_btn")}
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="next"
                      disabled={!isCheckBox}
                      onClick={(e) => onClickNextButton(e)}
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

export default SelectResistorType;
