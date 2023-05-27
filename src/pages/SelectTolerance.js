import React, { useEffect, useState } from "react";
import "./../styles/_select_tolerance.scss";
import arrowImg from "./../assets/icons/homeArrow.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SelectTolerance = (props) => {
  const navigate = useNavigate();
  let findByResister = JSON.parse(localStorage.getItem("findByResister"));
  const [isCheckBox, setIsCheckBox] = useState(findByResister.tolerance);

  const onClickNextButton = () => {
    findByResister.tolerance = isCheckBox;
    localStorage.setItem("findByResister", JSON.stringify(findByResister));
    navigateTo("../select_packaging");
  };

  const navigateTo = (path) => {
    navigate(path);
  };
  useEffect(() => {
    props.getData({
      title: "Select Tolerance",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <div className="selectTolerance-page">
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
                  <h2>{t("select_tolerance_type_header")}</h2>
                </div>
              </div>

              <div className="main-box">
                <div className="tab d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="1"
                      checked={isCheckBox == "10"}
                      onChange={() => setIsCheckBox("10")}
                    />
                  </div>
                  <div className="text-box">
                    <label
                      htmlFor="1"
                      className="select-mounting"
                      onChange={() => setIsCheckBox("10")}
                    >
                      10
                    </label>
                  </div>
                </div>
                <div className="tab d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="2"
                      checked={isCheckBox == "5"}
                      onChange={() => setIsCheckBox("5")}
                    />
                  </div>
                  <div className="text-box">
                    <label
                      htmlFor="2"
                      className="select-mounting"
                      onChange={() => setIsCheckBox("5")}
                    >
                      5
                    </label>
                  </div>
                </div>
                <div className="tab d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="3"
                      checked={isCheckBox == "3"}
                      onChange={() => setIsCheckBox("3")}
                    />
                  </div>
                  <div className="text-box">
                    <label
                      htmlFor="3"
                      className="select-mounting"
                      onChange={() => setIsCheckBox("3")}
                    >
                      3
                    </label>
                  </div>
                </div>
                <div className="tab d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="4"
                      checked={isCheckBox == "2"}
                      onChange={() => setIsCheckBox("2")}
                    />
                  </div>
                  <div className="text-box">
                    <label
                      htmlFor="4"
                      className="select-mounting"
                      onChange={() => setIsCheckBox("2")}
                    >
                      2
                    </label>
                  </div>
                </div>
                <div className="tab d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="5"
                      checked={isCheckBox == "1"}
                      onChange={() => setIsCheckBox("1")}
                    />
                  </div>
                  <div className="text-box">
                    <label
                      htmlFor="5"
                      className="select-mounting"
                      onChange={() => setIsCheckBox("1")}
                    >
                      1
                    </label>
                  </div>
                </div>
                <div className="tab d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="6"
                      checked={isCheckBox == "0.5"}
                      onChange={() => setIsCheckBox("0.5")}
                    />
                  </div>
                  <div className="text-box">
                    <label
                      htmlFor="6"
                      className="select-mounting"
                      onChange={() => setIsCheckBox("0.5")}
                    >
                      0.5
                    </label>
                  </div>
                </div>
                <div className="tab d-flex border border-0">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="7"
                      checked={isCheckBox == "0.25"}
                      onChange={() => setIsCheckBox("0.25")}
                    />
                  </div>
                  <div className="text-box">
                    <label
                      htmlFor="7"
                      className="select-mounting"
                      onChange={() => setIsCheckBox("0.25")}
                    >
                      0.25
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
                    disabled={!isCheckBox}
                    onClick={(e) => onClickNextButton()}
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

export default SelectTolerance;
