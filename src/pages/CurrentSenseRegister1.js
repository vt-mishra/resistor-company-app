import resistor1 from "./../assets/icons/resistor1.png";
import HCAL from "./../assets/icons/hcal.png";
import resistor2 from "./../assets/icons/resistor2.png";
import resistor3 from "./../assets/icons/resistor3.png";
import resistor4 from "./../assets/icons/resistor4.png";
import arrowImg from "./../assets/icons/homeArrow.svg";
import pdfImg from "./../assets/icons/white.svg";
import "./../styles/_currentSenseResistors.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CurrentSenseResistors = (props) => {
  useEffect(() => {
    props.getData({
      title: "Ceramic Encased Resistor 1",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      {/* desktop */}
      <div className="current-Sense-Resistors-page">
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
                  <label>Current Sense Resistors 1</label>
                </div>
              </div>
              <div className="top-cards d-flex d-none">
                <div className="cards card-space">
                  <div className="img-box">
                    <img className="resistor1" src={resistor1} alt="" />
                  </div>
                  <div className="title-box">
                    <h4>HEAL</h4>
                  </div>
                  <div className="row card-bottom m-0">
                    <div className="col-lg-7 p-0 card-text">
                      <p>Size 2726</p><br />
                      <p>2.5W to 12W</p>
                      <p>R0025 to R20</p>
                      <p>0.5% - 5%.</p>
                    </div>
                    <div className="col-lg-5 p-0 card-image">
                      <img className="pdfImage" src={pdfImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="cards card-space">
                  <div className="img-box">
                    <img className="resistor1" src={resistor1} alt="" />
                  </div>
                  <div className="title-box">
                    <h4>HCAL</h4>
                  </div>
                  <div className="row card-bottom m-0">
                    <div className="col-lg-7 p-0 card-text">
                      <p>1W to 20W</p>
                      <p>R002 to R20</p>
                      <p>0.5% - 5%.</p>
                    </div>
                    <div className="col-lg-5 p-0 card-image">
                      <img className="pdfImage" src={pdfImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="cards card-space">
                  <div className="img-box">
                    <img className="resistor2" src={resistor2} alt="" />
                  </div>
                  <div className="title-box">
                    <h4>RL</h4>
                  </div>
                  <div className="row card-bottom m-0">
                    <div className="col-lg-7 p-0 card-text">
                      <p>2W to 10W</p>
                      <p>R01 to 1R8</p>
                      <p>1% - 10%</p>
                    </div>
                    <div className="col-lg-5 p-0 card-image">
                      <img className="pdfImage" src={pdfImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-cards d-flex d-none">
                <div className="cards card-space">
                  <div className="img-box">
                    <img className="resistor3" src={resistor3} alt="" />
                  </div>
                  <div className="title-box">
                    <h4>BR</h4>
                  </div>
                  <div className="row card-bottom m-0">
                    <div className="col-lg-7 p-0 card-text">
                      <p>Size 2726</p>
                      <p>2.5W to 12W</p>
                      <p>R004 to R20</p>
                      <p>0.5% - 5%.</p>
                    </div>
                    <div className="col-lg-5 p-0 card-image">
                      <img className="pdfImage" src={pdfImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="cards card-space">
                  <div className="img-box">
                    <img className="resistor4" src={resistor4} alt="" />
                  </div>
                  <div className="title-box">
                    <h4>HMVL</h4>
                  </div>
                  <div className="row card-bottom m-0">
                    <div className="col-lg-7 p-0 card-text">
                      <p>2.5W to 15W</p>
                      <p>R004 to R20</p>
                      <p>0.5% - 5%</p>
                    </div>
                    <div className="col-lg-5 p-0 card-image">
                      <img className="pdfImage" src={pdfImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-box">
                <div className="cards card-space">
                  <div className="img-box">
                    <img className="resistor1" src={resistor1} alt="" />
                  </div>
                  <div className="title-box">
                    <h4>HEAL</h4>
                  </div>
                  <div className="card-bottom ">
                    <div className="card-text">
                      <p>Size 2726 <br /> 2.5W to 12W <br /> R0025 to R20 <br /> 0.5% - 5%</p>
                    </div>
                    <div className="card-image">
                      <img className="pdfImage" src={pdfImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="cards ">
                  <div className="img-box">
                    <img className="resistor1" src={HCAL} alt="" />
                  </div>
                  <div className="title-box">
                    <h4>HCAL</h4>
                  </div>
                  <div className="card-bottom ">
                    <div className="card-text">
                      <p>1W to 20W <br /> R002 to R20 <br /> 0.5% - 5%</p>
                    </div>
                    <div className="card-image">
                      <img className="pdfImage" src={pdfImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="cards card-space">
                  <div className="img-box">
                    <img className="resistor2" src={resistor2} alt="" />
                  </div>
                  <div className="title-box">
                    <h4>RL</h4>
                  </div>
                  <div className="card-bottom">
                    <div className="card-text">
                      <p>2W to 10W <br /> R01 to 1R8 <br /> 1% - 10%</p>
                    </div>
                    <div className="card-image">
                      <img className="pdfImage" src={pdfImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="cards ">
                  <div className="img-box">
                    <img className="resistor3" src={resistor3} alt="" />
                  </div>
                  <div className="title-box">
                    <h4>BR</h4>
                  </div>
                  <div className="card-bottom">
                    <div className="card-text">
                      <p>2.5W to 12W <br /> R004 to R20 <br /> 0.5% - 5%</p>
                    </div>
                    <div className="card-image">
                      <img className="pdfImage" src={pdfImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="cards card-space">
                  <div className="img-box">
                    <img className="resistor4" src={resistor4} alt="" />
                  </div>
                  <div className="title-box">
                    <h4>HMVL</h4>
                  </div>
                  <div className="card-bottom">
                    <div className="card-text">
                      <p>2.5W to 15W <br /> R004 to R20 <br /> 0.5% - 5%</p>
                    </div>
                    <div className="card-image">
                      <img className="pdfImage" src={pdfImg} alt="" />
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

export default CurrentSenseResistors;
