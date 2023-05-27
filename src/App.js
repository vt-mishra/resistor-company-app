import React, { useEffect, useState } from "react";
import { StatusBar, Style } from "@capacitor/status-bar";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./styles/_style.scss";
import Home from "pages/Home";
import AboutUs from "pages/AboutUs";
import Categories from "pages/Categories";
import Certification from "pages/Certification";
import ContactUs from "pages/ContactUs";
import CrossReference from "pages/CrossReference";
import CurrentSenseResistors from "pages/CurrentSenseResistors";
import CustomProducts from "pages/CustomProducts";
import DistributorNetwork from "pages/DistributorNetwork";
import Order from "pages/Order";
import PowerRating from "pages/PowerRating";
import ProductSpecification from "pages/ProductSpecification";
import SelectMounting from "pages/SelectMounting";
import NoPage from "pages/NoPage";
import Layout from "components/Layout";
import SelectHousing from "pages/SelectHousing";
import SelectResistorType from "pages/SelectResistorType";
import SelectResistanceValue from "pages/SelectResistanceValue";
import SelectTolerance from "pages/SelectTolerance";
import SelectPackaging from "pages/SelectPackaging";
import { getAllData } from "services/apiServices";
import { registerPushNotification } from "services/pushNotificationService";

function App() {
  useEffect(() => {
    getAllData();
    themeChange(localStorage.getItem("theme") ?? "lightTheme");
    initializeApp();
  }, []);

  const settingStyleAndSplashScreen = async () => {
    await StatusBar.setStyle({ style: Style.Dark });
    await StatusBar.setBackgroundColor({ color: "#156ba8" });
    await StatusBar.show();
  };
  const themeChange = (theme) => {
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

  const initializeApp = () => {
    // console.log("=====platform", navigator.userAgent);
    registerPushNotification();
    settingStyleAndSplashScreen();
  };
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="about_us" element={<AboutUs />} />
            <Route exact path="categories" element={<Categories />} />
            <Route exact path="certification" element={<Certification />} />
            <Route exact path="contact_us" element={<ContactUs />} />
            <Route exact path="cross_reference" element={<CrossReference />} />
            <Route
              exact
              path="current_sense_resistors"
              element={<CurrentSenseResistors />}
            />
            <Route exact path="custom_products" element={<CustomProducts />} />
            <Route
              exact
              path="distributor_network"
              element={<DistributorNetwork />}
            />
            <Route exact path="order" element={<Order />} />
            <Route exact path="power_rating" element={<PowerRating />} />
            <Route
              exact
              path="product_specification"
              element={<ProductSpecification />}
            />
            <Route exact path="select_mounting" element={<SelectMounting />} />
            <Route
              exact
              path="select_resistor_type"
              element={<SelectResistorType />}
            />
            <Route exact path="select_housing" element={<SelectHousing />} />
            <Route
              exact
              path="select_resistance_value"
              element={<SelectResistanceValue />}
            />
            <Route
              exact
              path="select_tolerance"
              element={<SelectTolerance />}
            />
            <Route
              exact
              path="select_packaging"
              element={<SelectPackaging />}
            />
            <Route exact path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
