// All user related database operations can be defined here.

import axios from "axios";

const getAllProducts = async () => {
  try {
    const res = await axios.get(
      "http://app.htr-india.com/finder/resources/data/Products.json?_dc=1683269757725&page=1&start=0&limit=25"
    );
    localStorage.setItem("htrprodls1_dt-1", JSON.stringify(res.data));
    localStorage.setItem(
      "htr_desktop_product_datasheet_version",
      JSON.stringify({ data_version: res.data.version })
    );
    // console.log("getAllProducts > axios res=", res);
  } catch (error) {
    console.error("in userServices > getAllProducts, Err===", error);
  }
};
const getAllDistributor = async () => {
  try {
    const res = await axios.get(
      "http://app.htr-india.com/finder/resources/data/Distributor.json?_dc=1683269757729&page=1&start=0&limit=25"
    );
    localStorage.setItem("htrdistributors_dt-1", JSON.stringify(res.data));
    localStorage.setItem(
      "htr_desktop_distributor_datasheet_version",
      JSON.stringify({ data_version: res.data.version })
    );
    // console.log("getAllDistributor > axios res=", res);
  } catch (error) {
    console.error("in userServices > getAllDistributor, Err===", error);
  }
};
const getAllReplacement = async () => {
  try {
    const res = await axios.get(
      "http://app.htr-india.com/finder/resources/data/Replacement.json?_dc=1683269757731&page=1&start=0&limit=25"
    );

    localStorage.setItem("htrreplacement_dt-1", JSON.stringify(res.data));
    localStorage.setItem(
      "htr_desktop_replacement_datasheet_version",
      JSON.stringify({ data_version: res.data.version })
    );
    // console.log("getAllReplacement > axios res=", res);
  } catch (error) {
    console.error("in userServices > getAllReplacement, Err===", error);
  }
};

export const getAllData = () => {
  getAllProducts();
  getAllDistributor();
  getAllReplacement();
};
