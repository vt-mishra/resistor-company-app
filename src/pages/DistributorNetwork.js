import logo from "./../assets/icons/Logo.svg";
import "./../styles/_distribution.scss";
import locationImg from "./../assets/icons/location.svg";
import location2Img from "./../assets/icons/locationBox.svg";
import searchImg from "./../assets/icons/search.svg";
import whatsappImg from "./../assets/icons/whattsappBox.svg";
import phoneImg from "./../assets/icons/phoneBox.svg";
import mailImg from "./../assets/icons/msgBox.svg";
import arrowImg from "./../assets/icons/homeArrow.svg";
import Select, { IndicatorSeparatorProps } from "react-select";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DistributorNetwork = (props) => {
  let distributor = JSON.parse(localStorage.getItem("htrdistributors_dt-1"));
  let options = [];
  if (distributor && distributor.worldwide) {
    options = distributor.worldwide.map((country) => {
      return { value: country.country, label: country.country };
    });
  }
  useEffect(() => {
    props.getData({
      title: "Find a Distributor",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);
  const [searchText, setSearchText] = useState("");
  const [allDistributor, setAllDistributor] = useState([]);
  const [numDistributors, setNumDistributors] = useState(0);
  const selectRefSearch = React.useRef();

  const searchHandler = (event) => {
    if (event && event.value) {
      setSearchText(event.value);
      let distributors =
        distributor.worldwide.find((item) => item.country === event.value)
          ?.distributors ?? [];
      setAllDistributor(distributors);
      setNumDistributors(distributors.length);
    }
  };
  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
      width: "200px",
      // textAlign:'center'
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
  const IndicatorSeparator = ({ innerProps }) => {
    return (
      <span
        style={{
          display: "none",
        }}
        {...innerProps}
      />
    );
  };

  const { t } = useTranslation();

  return (
    <div className="dn-page">
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
            <div className="row-B1 justify-content-between ">
              <div className="head-text">
                <p>{t('distributor_head_text')}</p>
              </div>
            </div>
            <div className="find-box">
              <div className="box-A">
                <div className="card-B">
                  <img src={locationImg} className="locationImg" alt="" />
                  {/* <input
                  type="text"
                  name="country"
                  id=""
                  placeholder="Search Country"
                /> */}
                  <Select
                    openMenuOnFocus={true}
                    ref={selectRefSearch}
                    styles={style}
                    components={{ IndicatorSeparator }}
                    options={options}
                    isClearable={true}
                    isSearchable={true}
                    placeholder={
                      <div className="select-placeholder-text">
                      {t('distributor_search_country')}
                      </div>
                    }
                    onChange={(e) => searchHandler(e)}
                  />
                  <img className="searchImg" src={searchImg} alt="" />
                </div>
              </div>
              <div
                className={`box-B ${searchText == null ? "d-none" : "d-block"}`}
              >
                <div className="card card-B">
                  <div className="align-self-center">
                    <label className="main-text">{searchText}</label>
                  </div>
                  <div className="align-self-center">
                    <h6 className="sub-text d-flex align-item-center">
                      {numDistributors}  {t('distributor_distributor_name')}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards-box">
              {allDistributor !== undefined &&
                allDistributor.length &&
                allDistributor.map((distributor, index) => {
                  return (
                    <div className="address-card" key={index}>
                      <div
                        className={
                          [distributor.length - 1, distributor.length - 2].some(
                            (x) => x == index
                          )
                            ? "card p-0"
                            : "card p-0 mbc"
                        }
                      >
                        <div className="card-body">
                          <h5 className="card-title">{distributor?.name} </h5>
                          <div className="d-flex ">
                            <div className="margin-right">
                              <img alt="" src={location2Img}></img>
                            </div>
                            <div className="align-self-center">
                              <h6 className="address-text">
                                {distributor?.address} <br />
                                {distributor?.state}
                                {distributor?.zip}
                              </h6>
                            </div>
                          </div>
                          <div className="d-flex ">
                            <div className="margin-right">
                              <img alt="" src={phoneImg}></img>
                            </div>
                            <div className="align-self-center">
                              <h6 className="phone-text">
                                {distributor?.phone}
                              </h6>
                            </div>
                          </div>
                          <div className="d-flex ">
                            <div className="margin-right">
                              <img alt="" src={whatsappImg}></img>
                            </div>
                            <div className="align-self-center">
                              <h6 className="fax-text">{distributor?.fax}</h6>
                            </div>
                          </div>
                          <div className="d-flex ">
                            <div className="margin-right">
                              <img alt="" src={mailImg}></img>
                            </div>
                            <div className="align-self-center">
                              <h6 className="email-text">
                                {distributor?.email}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="col Col-1"></div>
      </div>
    </div>
  );
};

export default DistributorNetwork;
