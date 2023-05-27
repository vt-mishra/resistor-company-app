import "./../styles/_productSpecification.scss";
import { Link } from "react-router-dom";
import whitePdfImage from "./../assets/icons/pdfBlue.svg";
import bluePdf from "./../assets/icons/whitePdf.svg";
import messageImg from "./../assets/images/message.svg";
import msgIcon from "./../assets/icons/msgIcon2.svg";
import home from "./../assets/icons/homeImg.svg";
import arrowImg from "./../assets/icons/homeArrow.svg";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ProductSpecification = (props) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  const getProducts = () => {
    let findByResister = JSON.parse(localStorage.getItem("findByResister"));
    let productList = JSON.parse(localStorage.getItem("htrprodls1_dt-1"))
      ?.products;
    let product = productList.filter((ele) => ele.type == findByResister.type);
    setProducts(product ?? []);
  };
  useEffect(() => {
    getProducts();
    props.getData({
      title: "Product Specification",
      backBtn: true,
      notificationBtn: false,
      settingBtn: false,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <div className="product-specification-page">
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
                <label className="content-text">
                  {t("product_specification_header")}
                </label>{" "}
              </div>
              <div className="main-content">
                {/* <div className="product-card active">
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <div className="">
                        <label className="text-key">
                          {t("product_specification_htr_product")}
                          <span className="text-value"> HANS</span>
                        </label>
                      </div>
                      <div className="">
                        <label className="text-key">
                          {t("product_specification_power")}
                          <span className="text-value"> Customized</span>
                        </label>
                      </div>
                      <div className="">
                        <label className="text-key">
                          {t("product_specification_resistance")}
                          <span className="text-value"> Customized</span>
                        </label>
                      </div>
                    </div>
                    <div className="text-center">
                      <img src={whitePdfImage} alt="" />
                    </div>
                  </div>
                  <div className="">
                    <label className="text-key">
                      {t("product_specification_features")}
                      <span className="text-value">
                        Reduces RFI;Nickel plated brass cap
                      </span>
                    </label>
                  </div>
                </div> */}
                {products.length &&
                  products.map((product, index) => {
                    return (
                      <div className="product-card" key={index}>
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <div className="">
                              <label className="text-key">
                                {t("product_specification_htr_product")}
                                <span className="text-value">
                                  {" "}
                                  {product?.series}
                                </span>
                              </label>
                            </div>
                            <div className="">
                              <label className="text-key">
                                {t("product_specification_power")}
                                <span className="text-value"> Customized</span>
                              </label>
                            </div>
                            <div className="">
                              <label className="text-key">
                                {t("product_specification_resistance")}
                                <span className="text-value"> Customized</span>
                              </label>
                            </div>
                          </div>
                          <div className="text-center">
                            <a href={product.pdf_name} target="_blank">
                              <img src={bluePdf} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <label className="text-key">
                            {t("product_specification_features")}
                            <span className="text-value">
                              {product?.features}
                            </span>
                          </label>
                        </div>
                      </div>
                    );
                  })}

                {/* <div className="product-card">
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <div className="">
                        <label className="text-key">
                          {t("product_specification_htr_product")}
                          <span className="text-value"> HANS</span>
                        </label>
                      </div>
                      <div className="">
                        <label className="text-key">
                          {t("product_specification_power")}
                          <span className="text-value"> Customized</span>
                        </label>
                      </div>
                      <div className="">
                        <label className="text-key">
                          {t("product_specification_resistance")}
                          <span className="text-value"> Customized</span>
                        </label>
                      </div>
                    </div>
                    <div className="text-center">
                      <img src={bluePdf} alt="" />
                    </div>
                  </div>
                  <div className="">
                    <label className="text-key">
                      {t("product_specification_features")}
                      <span className="text-value">
                        Reduces RFI;Nickel plated brass cap
                      </span>
                    </label>
                  </div>
                </div> */}
              </div>
              <div className="d-flex justify-content-end">
                <div className="bottom-box">
                  <div className="bottom-row-1">
                    <img src={messageImg} alt="" />
                  </div>
                  <div className="bottom-row-3">
                    <div className="mailIcon">
                      <img src={msgIcon} alt="" />
                    </div>
                  </div>

                  <div className="bottom-row-2">
                    <div className="btn-box">
                      <div className="home-icon">
                        <img src={home} alt="" />
                      </div>
                      <button
                        className="btn-1"
                        onClick={(e) => navigateTo("../select_resistor_type")}
                      >
                        {t("back_btn")}
                      </button>
                      <button
                        className="btn-2"
                        onClick={(e) => navigateTo("../product_specification1")}
                      >
                        {t("next_btn")}
                      </button>
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

export default ProductSpecification;
