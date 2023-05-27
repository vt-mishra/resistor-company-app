import "./../styles/_selectMounting.scss";
import arrowImg from "./../assets/icons/homeArrow.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const SelectMounting = (props) => {
  const navigate = useNavigate();
  let findByResister = JSON.parse(localStorage.getItem("findByResister"));
  const [isCheckBox, setIsCheckBox] = useState(findByResister.mounting_cfg);
  const [showModal, setShowModal] = useState(false);

  const onClickNextButton = () => {
    findByResister.mounting_cfg = isCheckBox;
    localStorage.setItem("findByResister", JSON.stringify(findByResister));
    if (findByResister.type == "Current Sense - Electron Beam Welded") {
      navigateTo("../power_rating");
    } else {
      navigateTo("../select_housing");
    }
  };

  const { t } = useTranslation();

  const SelectModal = () => {
    return (
      <>
        <div className="select-modal-wrapper"></div>
        <div className="select-modal-container">
          <div className="item-box">
            <div className="box">
              <p>{t("select_mounting_modal_head")}</p>
              <div className="option-box">
                <div className="d-flex ">
                  <input
                    type="checkbox"
                    className="checkbox "
                    name="checkbox"
                  />
                  <h2 className="text-label">
                    {t("select_mounting_modal_checkbox_text")}
                  </h2>
                </div>
              </div>
            </div>

            <div className="btn-box">
              <button className="btn-ok" onClick={() => setShowModal(false)}>
                <span className="btn-text">
                  {t("select_mounting_modal_btn")}
                </span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  useEffect(() => {
    setShowModal(true);
    props.getData({
      title: "Select a Mounting",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);

  return (
    <>
      {showModal && <SelectModal />}
      <div className="selectMounting-page">
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
                  <h2>{t("select_mounting_header")}</h2>
                </div>
              </div>
              {/* <div className="main-box d-flex">
                <div className="left-part">
                  <div className="tabs d-flex">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="checkbox"
                        id="checkOne"
                        disabled={
                          findByResister.type == "Current Sense / Shunt" ||
                          findByResister.type ==
                            "Current Sense - Electron Beam Welded"
                        }
                        checked={isCheckBox == "firstCheckBox"}
                        onChange={() => setIsCheckBox("firstCheckBox")}
                      />
                    </div>
                    <div className="text-box">
                      <label htmlFor="checkOne">Interface with Capacitor</label>
                    </div>
                  </div>
                  <div className="tabs d-flex">
                    <div className="radial-radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="checkbox"
                        id="checkTwo"
                        disabled={
                          findByResister.type == "Current Sense / Shunt" ||
                          findByResister.type ==
                            "Current Sense - Electron Beam Welded"
                        }
                        checked={isCheckBox == "secondCheckBox"}
                        onChange={() => setIsCheckBox("secondCheckBox")}
                      />
                    </div>
                    <div className="text-box radial-text">
                      <label htmlFor="checkTwo">Radial Mount</label>
                      <p className="small-text">(Cable Connection)</p>
                    </div>
                  </div>
                  <div className="tabs d-flex pt-2">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="checkbox"
                        id="checkThree"
                        disabled={
                          findByResister.type == "Current Sense / Shunt"
                        }
                        checked={isCheckBox == "thirdCheckBox"}
                        onChange={() => setIsCheckBox("thirdCheckBox")}
                      />
                    </div>
                    <div className="text-box">
                      <label htmlFor="checkThree">Screw Mount</label>
                    </div>
                  </div>
                  <div className="tabs-1 d-flex">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="checkbox"
                        id="checkFour"
                        checked={isCheckBox == "fourthCheckBox"}
                        onChange={() => setIsCheckBox("fourthCheckBox")}
                      />
                    </div>
                    <div className="text-box">
                      <label htmlFor="checkFour">Surface Mount (SMD)</label>
                    </div>
                  </div>
                </div>
                <div className="right-part">
                  <div className="tabs-2 d-flex">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="checkbox"
                        id="checkFive"
                        disabled={
                          findByResister.type ==
                          "Current Sense - Electron Beam Welded"
                        }
                        checked={isCheckBox == "fiveCheckBox"}
                        onChange={() => setIsCheckBox("fiveCheckBox")}
                      />
                    </div>
                    <div className="text-box">
                      <label htmlFor="checkFive">Through Hole Axial</label>
                      <h5>Tin Coated Copper Terminal</h5>
                    </div>
                  </div>
                  <div className="tabs d-flex">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="checkbox"
                        id="checkSix"
                        disabled={
                          findByResister.type == "Current Sense / Shunt"
                        }
                        checked={isCheckBox == "sixCheckBox"}
                        onChange={() => setIsCheckBox("sixCheckBox")}
                      />
                    </div>
                    <div className="text-box">
                      <label htmlFor="checkSix">Through Hole Axial</label>
                      <h5>Tin Coated Copper Clad Steel Terminal</h5>
                    </div>
                  </div>
                  <div className="tabs-2 d-flex">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="checkbox"
                        id="checkSeven"
                        disabled={
                          findByResister.type ==
                          "Current Sense - Electron Beam Welded"
                        }
                        checked={isCheckBox == "sevenCheckBox"}
                        onChange={() => setIsCheckBox("sevenCheckBox")}
                      />
                    </div>
                    <div className="text-box">
                      <label htmlFor="checkSeven">Through Hole PCB Type</label>
                      <h5>Plug-in style</h5>
                    </div>
                  </div>
                  <div className="tabs-1 d-flex">
                    <div className="radioBtn">
                      <input
                        type="radio"
                        className="checkbox"
                        name="checkbox"
                        id="checkEight"
                        checked={isCheckBox == "checkEight"}
                        onChange={() => setIsCheckBox("checkEight")}
                      />
                    </div>
                    <div className="text-box">
                      <label htmlFor="checkEight">Through Hole PCB Type</label>
                      <h5>Vertical</h5>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="main-box">
                <div className="tab-D d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="checkNine"
                      checked={isCheckBox == "Surface Mount (SMD)"}
                      onChange={() => setIsCheckBox("Surface Mount (SMD)")}
                    />
                  </div>
                  <div className="text-box">
                    <label htmlFor="checkNine">Surface Mount (SMD)</label>
                  </div>
                </div>
                <div className="tab-E d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="checkTen"
                      disabled={
                        findByResister.type == "Current Sense / Shunt" ||
                        findByResister.type ==
                          "Current Sense - Electron Beam Welded"
                      }
                      checked={isCheckBox == "Radial Mount"}
                      onChange={() => setIsCheckBox("Radial Mount")}
                    />
                  </div>
                  <div className="text-box">
                    <label htmlFor="checkTen">Radial Mount</label>
                    <h5>Tin Coated Copper Terminal</h5>
                  </div>
                </div>
                <div className="tab-F d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="checkEleven"
                      disabled={
                        findByResister.type ==
                        "Current Sense - Electron Beam Welded"
                      }
                      checked={
                        isCheckBox == "Through Hole PCB Type Plug-in style"
                      }
                      onChange={() =>
                        setIsCheckBox("Through Hole PCB Type Plug-in style")
                      }
                    />
                  </div>
                  <div className="text-box">
                    <label htmlFor="checkEleven">Through Hole PCB Type</label>
                    <h5>Plug-in style</h5>
                  </div>
                </div>
                <div className="tab-G d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      id="checkTwelve"
                      checked={isCheckBox == "Through Hole PCB Type Vertical"}
                      onChange={() =>
                        setIsCheckBox("Through Hole PCB Type Vertical")
                      }
                    />
                  </div>
                  <div className="text-box">
                    <label htmlFor="checkTwelve">Through Hole PCB Type</label>
                    <h5>Vertical</h5>
                  </div>
                </div>
                <div className="tab-B d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      disabled={
                        findByResister.type == "Current Sense / Shunt" ||
                        findByResister.type ==
                          "Current Sense - Electron Beam Welded"
                      }
                      id="checkThirteen"
                      checked={isCheckBox == "Radial Mount (Cable Connection)"}
                      onChange={() =>
                        setIsCheckBox("Radial Mount (Cable Connection)")
                      }
                    />
                  </div>
                  <div className="text-box">
                    <label htmlFor="checkThirteen">Radial Mount</label>
                    <p className="small-text">(Cable Connection)</p>
                  </div>
                </div>
                <div className="tab-C d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      disabled={findByResister.type == "Current Sense / Shunt"}
                      id="checkFourteen"
                      checked={isCheckBox == "Screw Mount"}
                      onChange={() => setIsCheckBox("Screw Mount")}
                    />
                  </div>
                  <div className="text-box">
                    <label htmlFor="checkFourteen">Screw Mount</label>
                  </div>
                </div>
                <div className="tab-A d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      disabled={
                        findByResister.type == "Current Sense / Shunt" ||
                        findByResister.type ==
                          "Current Sense - Electron Beam Welded"
                      }
                      id="checkFifteen"
                      checked={isCheckBox == "Interface with Capacitor"}
                      onChange={() => setIsCheckBox("Interface with Capacitor")}
                    />
                  </div>
                  <div className="text-box">
                    <label htmlFor="checkFifteen">
                      Interface with Capacitor
                    </label>
                  </div>
                </div>
                <div className="tab-H d-flex">
                  <div className="radioBtn">
                    <input
                      type="radio"
                      className="checkbox"
                      name="checkbox"
                      disabled={
                        findByResister.type == "Current Sense / Shunt" ||
                        findByResister.type ==
                          "Current Sense - Electron Beam Welded"
                      }
                      id="checkSixteen"
                      checked={
                        isCheckBox ==
                        "Through Hole Axial Tin Coated Copper Clad Steel Terminal"
                      }
                    />
                  </div>
                  <div className="text-box">
                    <label htmlFor="checkSixteen">Through Hole Axial</label>
                    <h5>Tin Coated Copper Clad Steel Terminal</h5>
                  </div>
                </div>
              </div>
              <div className="Btn-box d-flex justify-content-end">
                <div className="d-flex ">
                  <button
                    type="button"
                    className="back"
                    onClick={(e) => navigateTo("../select_resistor_type")}
                  >
                    Back
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="next"
                    disabled={!isCheckBox}
                    onClick={onClickNextButton}
                  >
                    Next
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

export default SelectMounting;
