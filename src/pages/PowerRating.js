import "./../styles/_powerRating.scss";
import arrowImg from "./../assets/icons/homeArrow.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const PowerRating = (props) => {
  const navigate = useNavigate();
  let findByResister = JSON.parse(localStorage.getItem("findByResister"));
  const [powerRating, setPowerRating] = useState(findByResister.power_rating);

  const onClickNextButton = () => {
    findByResister.power_rating = powerRating;
    localStorage.setItem("findByResister", JSON.stringify(findByResister));
    navigateTo("../select_resistance_value");
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  useEffect(() => {
    props.getData({
      title: "Power Rating",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      {/* desktop */}
      <div className="power-rating-page">
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
                  <label className="page-head-lg">
                    {t("power_rating_header_text_desktop")}
                  </label>
                  <label className="page-head-sm">
                    {t("power_rating_header_text_mobile")}
                  </label>
                </div>
              </div>
              <div className="item-box">
                <div className="powerRating">
                  <label className="label-pr">{t("power_rating_label")}</label>
                  <input
                    type="number"
                    className="powerInput"
                    value={powerRating}
                    //  onClick={handleCheckbox()}
                    onChange={(e) => setPowerRating(e.target.value)}
                  />
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
                    disabled={!powerRating}
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

export default PowerRating;
