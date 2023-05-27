import "./../styles/_cross_reference.scss";
import pdf1_img from "./../assets/icons/pdfBlue.svg";
import startButton from "./../assets/icons/startPlay.svg";
import endButton from "./../assets/icons/endPlay.svg";
import bluePdf from "./../assets/icons/whitePdf.svg";
import arrowImg from "./../assets/icons/homeArrow.svg";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Select, { IndicatorSeparatorProps } from "react-select";
import { useTranslation } from "react-i18next";

const CrossReference = (props) => {
  let CrossRef = JSON.parse(localStorage.getItem("htrreplacement_dt-1"));
  let manufacturerOptions = [];
  //Manufacturer Drop-Down
  if (CrossRef && CrossRef.competitors) {
    manufacturerOptions = CrossRef.competitors.map((cross) => {
      return {
        value: cross.manufacturer,
        label: cross.manufacturer,
      };
    });
  }
  const [menuA, setMenuA] = useState("menuClosed");
  const [menuB, setMenuB] = useState("menuClosed");
  const [manufacturer, setManufacturer] = useState("Select Manufacturer");
  const [seriesLabel, setSeriesLabel] = useState("Series");
  const [series, setSeries] = useState("Select Series");
  const [displayManufacturer, setDisplayManufacturer] = useState(
    "Manufacturer"
  );
  const [displaySeries, setDisplaySeries] = useState([]);
  const [disSeries, setDisSeries] = useState([]);
  const [disCards, setDisCards] = useState([]);

  //Manufacturer Handler
  const manufacturerHandler = (event) => {
    if (event && event.value) {
      setManufacturer(event.value);
      const manufacturer = CrossRef.competitors.find(
        (series) => series.value === event.value
      ).products;
      setDisSeries(manufacturer);
      const series = manufacturer.map((a) => {
        return {
          value: a.value,
          label: a.value,
        };
      });
      setDisplaySeries(series);
    }
  };

  const seriesHandler = (event) => {
    if (event && event.value) {
      setSeries(event.value);
      const ser = disSeries.find((ser) => ser.value === event.value)
        .htr_equivalents;
      setDisCards(ser);
    }
  };

  const selectRefManufacturer = React.useRef();
  const selectRefSeries = React.useRef();

  useEffect(() => {
    props.getData({
      title: "Cross Reference",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);
  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#156ba8",
    }),

    option: (defaultStyles, state) => ({
      ...defaultStyles,
      fontWeight: "500",
      fontSize: "14px",
      padding: "11px 14px",
      lineHeight: "18px",
      display: "flex",
      alignItems: "center",
      letterSpacing: "0.1px",
      color: "#156BA8",
      // "&:hover": {
      //   backgroundColor: "#d7d7d7",
      // },
    }),
  };
  const indicatorSeparatorStyle = {
    display: "none",
  };
  const IndicatorSeparator = ({ innerProps }) => {
    return <span style={indicatorSeparatorStyle} {...innerProps} />;
  };
  const onClickManufacturer = () => {
    if (selectRefManufacturer.current) {
      selectRefManufacturer.current.focus();
    }
  };
  const onClickSeries = () => {
    if (selectRefSeries.current) {
      selectRefSeries.current.focus();
    }
  };

  const { t } = useTranslation();

  return (
    <>
      {/* desktop */}
      <div className="cross-reference-page">
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
                  <h2>{t('cross_title')}</h2>
                </div>
              </div>
              <div
                className="top-box row justify-content-center m-0"
                style={{ color: "#ffffff" }}
              >
                <div className={"select-box-A " + menuA}>
                  <Select
                    openMenuOnFocus={true}
                    ref={selectRefManufacturer}
                    styles={style}
                    components={{ IndicatorSeparator }}
                    options={manufacturerOptions}
                    isClearable={true}
                    isSearchable={true}
                    placeholder={
                      <div className="select-placeholder-text">
                        {t('cross_manufacturer')}
                      </div>
                    }
                    value={displayManufacturer}
                    onChange={(e) => manufacturerHandler(e)}
                  />
                  {manufacturer ? (
                    <div className="select-card" onClick={onClickManufacturer}>
                      <label>{manufacturer}</label>
                    </div>
                  ) : null}
                </div>
                <div className={"select-box-B " + menuB}>
                  <Select
                    openMenuOnFocus={true}
                    ref={selectRefSeries}
                    styles={style}
                    components={{ IndicatorSeparator }}
                    options={displaySeries}
                    isClearable={true}
                    isSearchable={true}
                    placeholder={
                      <div className="select-placeholder-text">{t('cross_series')}</div>
                    }
                    value={seriesLabel}
                    onChange={(e) => seriesHandler(e)}
                  />
                  {series ? (
                    <div className="select-card" onClick={onClickSeries}>
                      <label>{series}</label>
                    </div>
                  ) : null}
                </div>
                {disCards !== undefined &&
                  disCards.length &&
                  disCards.map((val, index) => {
                    return (
                      <div className="bottom-box d-flex" key={index}>
                        <div className="startBtn">
                          <img alt="" src={startButton}></img>
                        </div>
                        <div className="box-B">
                          <div className="card-A d-flex">
                            <div className="text-box">
                              {" "}
                              HTR Product: <span>{val.htr_name}</span>
                              <br /> Dissipation: <span>{val.disspation}</span>
                              <br />
                              Value Range:
                              <span>{val.value_range}</span>
                              <br /> Tolerance Option:
                              <span>{val.tolerance_options}</span>
                            </div>
                            <div className="pdf1">
                              <a href={val.pdf_name} target="_blank">
                                <img alt="" src={pdf1_img}></img>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="box-C ">
                          <div className="card-A d-flex">
                            <div className="text-box">
                              {" "}
                              HTR Product : <span>{val.htr_name}</span>
                              <br /> Dissipation: <span>{val.disspation}</span>
                              <br />
                              Value Range:
                              <span>{val.value_range}</span>
                              <br /> Tolerance Option:
                              <span>{val.tolerance_options}</span>
                            </div>
                            <div className="pdf1">
                              <a href={val.pdf_name} target="_blank">
                                <img alt="" src={bluePdf}></img>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="endBtn">
                          <img alt="" src={endButton}></img>
                        </div>
                      </div>
                    );
                  })}
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

export default CrossReference;
