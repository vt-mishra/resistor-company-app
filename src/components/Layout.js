import Home from "pages/Home";
import logo from "./../assets/icons/Logo.svg";
import "./../styles/_layout.scss";
import { Route, Routes } from "react-router-dom";
import AboutUs from "pages/AboutUs";
import Categories from "pages/Categories";
import Certification from "pages/Certification";
import ContactUs from "pages/ContactUs";
import CrossReference from "pages/CrossReference";
import CurrentSenseResistors from "pages/CurrentSenseResistors";
import CurrentSenseResistors1 from "pages/CurrentSenseRegister1";
import CustomProducts from "pages/CustomProducts";
import CustomProducts1 from "pages/CustomProducts1";
import DistributorNetwork from "pages/DistributorNetwork";
import PowerRating from "pages/PowerRating";
import Order from "pages/Order";
import ProductSpecification from "pages/ProductSpecification";
import ProductSpecification1 from "pages/ProductSpecification1";
import SelectMounting from "pages/SelectMounting";
import CrossReference1 from "pages/CrossReference1";
import { useNavigate } from "react-router-dom";
import Notification from "pages/Notification";
import notification from "./../assets/icons/notification.svg";
import homeBackImg from "./../assets/icons/homeBack.svg";
import homeSettingImg from "./../assets/icons/homeSetting.svg";
import React, { useEffect, useState } from "react";
import About2 from "pages/About2";
import ThemePage from "pages/ThemePage";
import Dropdown from "react-bootstrap/Dropdown";
import infoIcon from "./../assets/icons/info.svg";
import themeIcon from "./../assets/icons/theme2.svg";
import lightImg from "./../assets/icons/light-theme.svg";
import darkImg from "./../assets/icons/dark-theme.svg";
import SelectPackaging from "pages/SelectPackaging";
import SelectTolerance from "pages/SelectTolerance";
import SelectResistanceValue from "pages/SelectResistanceValue";
import SelectHousing from "pages/SelectHousing";
import SelectResistorType from "pages/SelectResistorType";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';

const GlobeIcon = ({ width = 17, height = 17 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="white"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
)
const Layout = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false); 
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? 'lightTheme');
  const [showLngModal, setShowLngModal] = useState(false);
  const [lngTheme, setlngTheme] = useState(localStorage.getItem("lng") ?? 'en');

  const { t } = useTranslation()


  const selectLanguage=()=>{
    // console.log(lngTheme);
    i18n.changeLanguage(lngTheme)
      localStorage.setItem("lng", lngTheme);
    setShowLngModal(false);
  };
  const themeChange = () => {
    console.log(theme);
    localStorage.setItem("theme", theme);
    setShowModal(false);
    const root = document.documentElement;
    root.style.setProperty(
      "--bg-color",
      theme == "darkTheme" ? "#192b49" : "#ffffff"
    );
    root.style.setProperty(
      "--bgBox-color",
      theme == "darkTheme" ? "#16376F" : "#ffffff"
    );
    root.style.setProperty(
      "--backBg-color",
      theme == "darkTheme" ? "#16376F" : "#d9ebff"
    );
    root.style.setProperty(
      "--text-color",
      theme == "darkTheme" ? "#339AE3" : "#156ba8"
    );
    root.style.setProperty(
      "--notText-color",
      theme == "darkTheme" ? "#339AE3" : "#212121"
    );
    root.style.setProperty(
      "--input-color",
      theme == "darkTheme" ? "#339AE3" : "hsl(0,0%,20%)"
    );
    root.style.setProperty(
      "--orderText-color",
      theme == "darkTheme" ? "#339AE3" : "#4f4f4f"
    );
    root.style.setProperty(
      "--box-color",
      theme == "darkTheme" ? "#16376F" : "#f6f9fc"
    );
    root.style.setProperty(
      "--border-color",
      theme == "darkTheme" ? "#192b49" : "#bdbdbd"
    );
    root.style.setProperty(
      "--btn-color",
      theme == "darkTheme" ? "#16376F" : "#bdbdbd"
    );
    root.style.setProperty(
      "--tab-color",
      theme == "darkTheme" ? "#16376F" : "#f3f3f3"
    );
    root.style.setProperty(
      "--setting-color",
      theme == "darkTheme" ? "#192b49" : "rgba(217, 235, 255, 0.2)"
    );
    root.style.setProperty(
      "--box-shadow",
      theme == "darkTheme" ? "none" : "0px 4px 20px #d9eaff"
    );
    root.style.setProperty(
      "--proText-color",
      theme == "darkTheme" ? "#ffffff" : "#4f4f4f"
    );
  };
  const MyModal = () => {
    return (
      <>
        <div className="modal-wrapper"></div>
        <div className="modal-container">
          <div className="item-box">
            <div className="box">
              <div className="img-box">
                <img src={lightImg} alt="" />
              </div>
              <div className="option-box">
                <div className="d-flex">
                  <input
                    type="radio"
                    className="checkbox "
                    name="checkbox"
                    id="lightTheme"
                    value={theme == "lightTheme"}
                    checked={theme == "lightTheme"}
                    onChange={(e) => {
                      setTheme("lightTheme");
                    }}
                  />
                  <label htmlFor="lightTheme" className="text-label">Light Mode</label>
                </div>
              </div>
            </div>
            <hr className="dividerLine" />
            <div className="box">
              <div className="img-box">
                <img src={darkImg} alt="" />
              </div>
              <div className="option-box">
                <div className="d-flex">
                  <input
                    type="radio"
                    className="checkbox "
                    name="checkbox"
                    id="darkCheckBox"
                    value={theme == "darkTheme"}
                    checked={theme == "darkTheme"}
                    onChange={(e) => {
                      setTheme("darkTheme");
                    }}
                  />
                  <label htmlFor="darkCheckBox" className="text-label">Dark Mode</label>
                </div>
              </div>
            </div>

            <div className="btn-box">
              <button className="btn-ok" onClick={() => themeChange()}>
                <span className="btn-text">Ok</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  const MyLanguageModel = () => {
    return (
      <>
        <div className="modal-wrapper"></div>
        <div className="modal-container">
          <div className="item-box-lng">
            <div className="box">
              <div className="img-box">
                {/* <img src={lightImg} alt="" /> */}
              </div>
              <div className="option-box">
                <div className="d-flex">
                <input
                    type="radio"
                    className="checkbox "
                    name="checkbox"
                    id="enCheckBox"
                    value={lngTheme == "en"}
                    checked={lngTheme == "en"}
                    onChange={() => {
                      setlngTheme("en");
                    }}
                  />
                  <label htmlFor="enCheckBox" className="text_label_lang me-4">Engilsh</label>
                </div>
              </div>
            </div>
            <hr className="dividerLine_lang" />
            <div className="box">
              <div className="img-box">
                {/* <img src={darkImg} alt="" /> */}
              </div>
              <div className="option-box">
                <div className="d-flex">
                <input
                    type="radio"
                    className="checkbox "
                    name="checkbox"
                    id="hnCheckBox"
                    value={lngTheme == "hn"}
                    checked={lngTheme == "hn"}
                    onChange={() => {
                      setlngTheme("hn");
                    }}
                  />
                  <label htmlFor="hnCheckBox" className="text_label_lang me-5" >Hindi</label>
                </div>
              </div>
            </div>
            <hr className="dividerLine_lang" />
            <div className="box">
              <div className="img-box">
                {/* <img src={darkImg} alt="" /> */}
              </div>
              <div className="option-box">
                <div className="d-flex">
                <input
                    type="radio"
                    className="checkbox flex-start"
                    name="checkbox"
                    id="mrCheckBox"
                    value={lngTheme == "mr"}
                    checked={lngTheme == "mr"}
                    onChange={() => {
                      setlngTheme("mr");
                    }}
                  />
                  <label htmlFor="mrCheckBox" className="text_label_lang me-4">Marathi</label>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <button className="btn-ok" onClick={() => selectLanguage()}>
                <span className="btn-text">Ok</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  const getData = (data) => {
    setData(data);
  };
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
   
  }, [data]);
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));
  return (
    <>
      {showLngModal  && <MyLanguageModel/>}
      {showModal && <MyModal />}
      {/*Large desktops */}

      <div className="layout-page ">
        {data.isHome == "yes" &&
        windowSize[0] >= 1366 &&
        windowSize[0] <= 1600 ? (
          <div className="row-1">
            <div className="part-A">
              <img
                alt=""
                src={logo}
                className={
                  data.title == "" &&
                  (windowSize[0] <= 1830 || windowSize[0] > 1830)
                    ? "img-fluid-home"
                    : "img-fluid"
                }
              />
            </div>
            <div className="part-AM">
              <div className={data.layout ? data.layout : "layoutB"}>
                <div className="partA">
                  {data.backBtn ? (
                    <img
                      src={homeBackImg}
                      alt=""
                      onClick={(e) => navigateTo("/")}
                    />
                  ) : null}
                </div>
                <div className="partB">
                  <img alt="" src={logo} className="img-fluid" />
                  {data.title ? (
                    <h3 className="page-title">{data.title}</h3>
                  ) : null}
                </div>
                <div className="partC d-flex">
                  <div className="notificationIcon">
                    {data.notificationBtn ? (
                      <img
                        className="notificationImg"
                        src={notification}
                        alt=""
                        onClick={(e) => navigateTo("/notification")}
                      />
                    ) : null}
                  </div>
                  <div className="homeSettingIcon ">
                    {data.settingBtn ? (
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant={CustomToggle}
                          id="dropdown-basic"
                        >
                          <img
                            className="homeSettingImg"
                            src={homeSettingImg}
                            alt=""
                          />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => setShowModal(true)}>
                            <span>
                              <img
                                className="themeIcon"
                                src={themeIcon}
                                alt=""
                              />
                            </span>{" "}
                            Theme
                          </Dropdown.Item>

                          <hr className="dividerLine mx-auto" />
                          <Dropdown.Item href="/about2">
                            <span>
                              <img className="infoIcon" src={infoIcon} alt="" />
                            </span>{" "}
                            <label className="aboutLabel"> About </label>
                          </Dropdown.Item>
                          {/* <hr className="dividerLine mx-auto" />
                            <Dropdown.Item onClick={() => setShowLngModal(true)}>
                              <span>
                               <p className="infoIcon mt-2"> <GlobeIcon/></p>
                              </span>{" "}
                              <label className="aboutLabel mb-2" >Language</label>
                            </Dropdown.Item> */}
                        </Dropdown.Menu>
                      </Dropdown>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
            <div
              className="part-B"
              style={{
                borderRadius: `${
                  data.title == "" || windowSize[0] < 1366
                    ? "0"
                    : "53px 0 0 53px"
                }`,
                backgroundColor: `${data.title == "" ? "#156ba8 " : "#ffffff"}`,
              }}
            >
              <Routes path="/">
                <Route exact path="/" element={<Home getData={getData} />} />
                <Route
                  exact
                  path="about_us"
                  element={<AboutUs getData={getData} />}
                />
                <Route
                  exact
                  path="categories"
                  element={<Categories getData={getData} />}
                />
                <Route
                  exact
                  path="certification"
                  element={<Certification getData={getData} />}
                />
                <Route
                  exact
                  path="contact_us"
                  element={<ContactUs getData={getData} />}
                />
                <Route
                  exact
                  path="cross_reference"
                  element={<CrossReference getData={getData} />}
                />
                <Route
                  exact
                  path="cross_reference1"
                  element={<CrossReference1 getData={getData} />}
                />
                <Route
                  exact
                  path="current_sense_resistors"
                  element={<CurrentSenseResistors getData={getData} />}
                />
                <Route
                  exact
                  path="current_sense_resistors1"
                  element={<CurrentSenseResistors1 getData={getData} />}
                />
                <Route
                  exact
                  path="custom_products"
                  element={<CustomProducts getData={getData} />}
                />
                <Route
                  exact
                  path="custom_products1"
                  element={<CustomProducts1 getData={getData} />}
                />
                <Route
                  exact
                  path="distributor_network"
                  element={<DistributorNetwork getData={getData} />}
                />
                <Route
                  exact
                  path="order"
                  element={<Order getData={getData} />}
                />
                <Route
                  exact
                  path="power_rating"
                  element={<PowerRating getData={getData} />}
                />
                <Route
                  exact
                  path="product_specification"
                  element={<ProductSpecification getData={getData} />}
                />
                <Route
                  exact
                  path="product_specification1"
                  element={<ProductSpecification1 getData={getData} />}
                />
                <Route
                  exact
                  path="select_mounting"
                  element={<SelectMounting getData={getData} />}
                />
                <Route
                  exact
                  path="notification"
                  element={<Notification getData={getData} />}
                />
                <Route
                  exact
                  path="about2"
                  element={<About2 getData={getData} />}
                />
                <Route
                  exact
                  path="select_resistor_type"
                  element={<SelectResistorType getData={getData} />}
                />
                <Route
                  exact
                  path="select_housing"
                  element={<SelectHousing getData={getData} />}
                />
                <Route
                  exact
                  path="select_resistance_value"
                  element={<SelectResistanceValue getData={getData} />}
                />
                <Route
                  exact
                  path="select_tolerance"
                  element={<SelectTolerance getData={getData} />}
                />
                <Route
                  exact
                  path="select_packaging"
                  element={<SelectPackaging getData={getData} />}
                />
                <Route
                  exact
                  path="themePage"
                  element={<ThemePage getData={getData} />}
                />
              </Routes>
            </div>
          </div>
        ) : (
          <div className="row-1">
            {/* <div className={data.bluePart ? data.bluePart : "d-block"}> */}
            <div className="part-A part-AA">
              <img
                alt=""
                src={logo}
                className={
                  data.title == "" &&
                  (windowSize[0] <= 1830 || windowSize[0] > 1830)
                    ? "img-fluid-home"
                    : "img-fluid"
                }
              />
            </div>
            <div className="part-AM">
              <div className={data.layout ? data.layout : "layoutB"}>
                <div className="partA">
                  {data.backBtn ? (
                    <img
                      src={homeBackImg}
                      alt=""
                      onClick={(e) => navigateTo("/")}
                    />
                  ) : null}
                </div>
                <div className="partB">
                  <img alt="" src={logo} className="img-fluid" />
                  {data.title ? (
                    <h3 className="page-title">{data.title}</h3>
                  ) : null}
                </div>
                <div className="partC d-flex">
                  <div className="notificationIcon">
                    {data.notificationBtn ? (
                      <img
                        className="notificationImg"
                        src={notification}
                        alt=""
                        onClick={(e) => navigateTo("/notification")}
                      />
                    ) : null}
                  </div>
                  <div className="homeSettingIcon ">
                    {data.settingBtn ? (
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant={CustomToggle}
                          id="dropdown-basic"
                        >
                          <img
                            className="homeSettingImg"
                            src={homeSettingImg}
                            alt=""
                          />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => setShowModal(true)}>
                            <span>
                              <img
                                className="themeIcon"
                                src={themeIcon}
                                alt=""
                              />
                            </span>{" "}
                            Theme
                          </Dropdown.Item>

                          <hr className="dividerLine mx-auto" />
                          <Dropdown.Item href="/about2">
                            <span>
                              <img className="infoIcon" src={infoIcon} alt="" />
                            </span>{" "}
                            <label className="aboutLabel"> About </label>
                          </Dropdown.Item>
                          <hr className="dividerLine mx-auto" />
                            <Dropdown.Item onClick={() => setShowLngModal(true)}>
                              <span>
                               <p className="infoIcon mt-2"> <GlobeIcon/></p>
                              </span>{" "}
                              <label className="aboutLabel mb-2" >Language</label>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
            <div
              className="part-B part-BB"
              style={{
                borderRadius: `${
                  data.title == "" || windowSize[0] < 1366
                    ? "0"
                    : "53px 0 0 53px"
                }`,
                backgroundColor: `${
                  data.title == "" ? "#156ba8 " : " var(--bg-color)"
                }`,
              }}
            >
              <Routes path="/">
                <Route exact path="/" element={<Home getData={getData} />} />
                <Route
                  exact
                  path="about_us"
                  element={<AboutUs getData={getData} />}
                />
                <Route
                  exact
                  path="categories"
                  element={<Categories getData={getData} />}
                />
                <Route
                  exact
                  path="certification"
                  element={<Certification getData={getData} />}
                />
                <Route
                  exact
                  path="contact_us"
                  element={<ContactUs getData={getData} />}
                />
                <Route
                  exact
                  path="cross_reference"
                  element={<CrossReference getData={getData} />}
                />
                <Route
                  exact
                  path="cross_reference1"
                  element={<CrossReference1 getData={getData} />}
                />
                <Route
                  exact
                  path="current_sense_resistors"
                  element={<CurrentSenseResistors getData={getData} />}
                />
                <Route
                  exact
                  path="current_sense_resistors1"
                  element={<CurrentSenseResistors1 getData={getData} />}
                />
                <Route
                  exact
                  path="custom_products"
                  element={<CustomProducts getData={getData} />}
                />
                <Route
                  exact
                  path="custom_products1"
                  element={<CustomProducts1 getData={getData} />}
                />
                <Route
                  exact
                  path="distributor_network"
                  element={<DistributorNetwork getData={getData} />}
                />
                <Route
                  exact
                  path="order"
                  element={<Order getData={getData} />}
                />
                <Route
                  exact
                  path="power_rating"
                  element={<PowerRating getData={getData} />}
                />
                <Route
                  exact
                  path="product_specification"
                  element={<ProductSpecification getData={getData} />}
                />
                <Route
                  exact
                  path="product_specification1"
                  element={<ProductSpecification1 getData={getData} />}
                />
                <Route
                  exact
                  path="select_mounting"
                  element={<SelectMounting getData={getData} />}
                />
                <Route
                  exact
                  path="notification"
                  element={<Notification getData={getData} />}
                />
                <Route
                  exact
                  path="about2"
                  element={<About2 getData={getData} />}
                />
                <Route
                  exact
                  path="select_resistor_type"
                  element={<SelectResistorType getData={getData} />}
                />
                <Route
                  exact
                  path="select_housing"
                  element={<SelectHousing getData={getData} />}
                />
                <Route
                  exact
                  path="select_resistance_value"
                  element={<SelectResistanceValue getData={getData} />}
                />
                <Route
                  exact
                  path="select_tolerance"
                  element={<SelectTolerance getData={getData} />}
                />
                <Route
                  exact
                  path="select_packaging"
                  element={<SelectPackaging getData={getData} />}
                />
                <Route
                  exact
                  path="themePage"
                  element={<ThemePage getData={getData} />}
                />
              </Routes>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
