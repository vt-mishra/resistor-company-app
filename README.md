$factorH: 100/1024;
$factorW: 100/1440;
$a: calc(100vh - 1024px);

- {
  font-family: "Roboto";
  font-style: normal;
  margin: 0;
  }

.dn-page {
.row {
padding-top: calc(190vh \* $factorH) !important;
width: 100%;
display: flex;

    .Col-1 {
      min-width: 85px;
    }

    .head-box {
      display: flex;

      .back-box {
        width: 78px;
        height: 44.03px;
        background-color: #d9ebff;
        border-radius: 0 8px 8px 0;

        img {
          margin: auto;
          display: grid;
          place-items: center;
          margin-top: 11px;
        }
      }

      .heading-box {
        width: 305px;
        height: 40px;
        margin-top: 179px;

        h2 {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 40px;
          color: #156ba8;
          margin-bottom: 0;
        }
      }

      margin-bottom: calc(47.97vh * $factorH);
    }

    .content-box {
      width: 911px;

      .row-B1 {
        .head-text {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400 !important;
          font-size: 40px !important;
          line-height: 40px;
          color: #156ba8;
        }

        margin-bottom: calc(49vh * $factorH);
      }

      .find-box {
        display: flex;

        margin-bottom: calc(55vh * $factorH);

        .box-A {
          width: 430px !important;
          height: 53px;
          margin-right: 36px;

          .card-B {
            border-radius: 110px;
            height: 100%;
            width: 430px;
            border: 1px solid #156ba8;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 28px;
            padding-right: 26px;

            .locationImg {
              width: 14.83px;
              height: 18.11px;
            }

            input {
              border: none;
              font-weight: 500;
              font-size: 25px;
              line-height: 119.19%;
              color: #bdbdbd;
            }

            input::placeholder {
              font-weight: 500;
              font-size: 25px;
              line-height: 119.19%;
              color: #bdbdbd;
            }

            input:focus {
              outline: none !important;
            }

            .searchImg {
              width: 18px;
              height: 18px;
            }
          }
        }

        .box-B {
          width: 430px !important;
          height: 53px;
          margin-right: 51px;

          .card-B {
            width: 430px;
            height: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;
            flex-direction: row;
            background: #156ba8;
            border-radius: 110px;
            padding-left: 35px;
            padding-right: 34px;

            .main-text {
              font-family: "Roboto";
              font-style: normal;
              font-weight: 500;
              font-size: 25px;
              color: #ffffff;
            }

            .sub-text {
              margin: 0;
              font-family: "Roboto";
              font-style: normal;
              font-weight: 400;
              font-size: 25px;
              letter-spacing: 0.1px;
              color: #d9eaff;
            }
          }
        }
      }

      .cards-box {
        width: 947px;
        height: calc(100vh - (93px + calc(192vh * $factorH) + calc(49vh * $factorH) + calc(55vh * $factorH) + calc(30vh * $factorH)));
        overflow-y: auto;
        overflow-x: hidden;
        // margin-left: 132px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .address-card {
          .card {
            width: 430px;
            height: 338px;
            padding: 32px 35px 34px 36px !important;
            flex-wrap: nowrap;
            justify-content: center;
            align-content: center;
            background: #d9ebff;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            margin-right: 31px;
            border: none;

            .card-body {
              padding: 0;

              img {
                width: 23.78px;
                height: 24px;
                margin-right: 9.54px;
              }

              .card-title {
                height: 24px;
                font-family: "Roboto";
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                color: #156ba8;
                margin-bottom: 21px;
                word-wrap: break-word;
              }

              .phone-text {
                height: 28px;
                font-family: "Roboto";
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 22px;
                letter-spacing: 0.1px;
                text-decoration-line: underline;
                color: #156ba8;
                margin-bottom: 15px;
              }

              .fax-text {
                height: 22px;
                font-family: "Roboto";
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 22px;
                letter-spacing: 0.1px;
                text-decoration-line: underline;
                color: #156ba8;
                margin-bottom: 15px;
              }

              .email-text {
                height: 42px;
                font-family: "Roboto";
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 22px;
                letter-spacing: 0.1px;
                text-decoration-line: underline;
                color: #156ba8;
                margin-bottom: 0;
              }

              .address-text {
                height: 82px;
                font-family: "Roboto";
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 22px;
                letter-spacing: 0.1px;
                word-wrap: break-word;
                color: #333333;
                margin-bottom: 23px;
              }

              .normal-text {
                font-family: "Roboto";
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                letter-spacing: 0.1px;
                text-decoration-line: underline;
                color: #156ba8;
                margin-bottom: 12px;
                word-wrap: break-word;
              }
            }
          }

          .mbc {
            margin-bottom: 37px;
          }
        }

        .row-3 {
          height: 62vh;
          overflow-y: scroll;

          .bottom-box {
            width: 858px;
            height: 563px;
          }
        }
      }
    }

}

::-webkit-scrollbar {
width: 2px;
border: 1px solid #e3e3e3;
}

::-webkit-scrollbar-track {
background: #e3e3e3;
}

::-webkit-scrollbar-thumb {
height: 161px;
background: #d9d9d9;
border-radius: calc(20rem / 16);
outline: 4.5px solid #d9d9d9;
}
}

.small-distributor-page {
display: none;
}

@media (max-width: 5000px) {
.dn-page {
.row {
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 !important;
width: 100%;
padding-top: 34px !important;

      // height: calc(100vh - 133.41px);
      // overflow-y: auto;
      .col,
      .col-auto {
        padding: 0;
      }

      .Col-1 {
        min-width: 10px;
      }

      .head-box {
        .back-box {
          display: none;
        }
      }

      .content-box {
        height: auto;
        width: 341px !important;
        margin-bottom: 0px;

        .row-B1 {
          display: none;
        }

        .find-box {
          width: 341px;
          height: 146px !important;
          display: flex;
          flex-flow: column;
          margin-bottom: 0px !important;

          .box-A {
            height: 34px;
            width: 341px !important;
            margin-bottom: 32px !important;
            margin-right: 0 !important;

            .card-B {
              border-radius: 0px;
              height: 34px;
              width: 340.5px;
              border: none !important;
              border-bottom: 1px solid #E8E8E8 !important;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-left: 28px;
              padding-right: 26px;

              .locationImg {
                // width: 13.83px;
                // height: 17.11px;
                width: 14px;
                height: 17.11px;
              }

              input {
                border: none;
                font-weight: 500;
                font-size: 18px;
                line-height: 119.19%;
                color: #bdbdbd;
              }

              input::placeholder {
                font-weight: 500;
                font-size: 18px;
                line-height: 119.19%;
                color: #bdbdbd;
              }

              input:focus {
                outline: none !important;
              }

              .searchImg {
                width: 16px;
                height: 16px;
              }
            }
          }

          .box-B {
            width: 341px !important;
            height: 53px;
            margin-bottom: 26px;
            margin-right: 0 !important;

            .card-B {
              width: 341px;
              height: 100%;
              display: flex;
              justify-content: space-between;
              flex-wrap: nowrap;
              flex-direction: row;
              background: #156ba8;
              border-radius: 110px;
              padding-left: 28px;
              padding-right: 29px;

              .main-text {
                font-family: "Roboto";
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 119.19%;
                color: #ffffff;
              }

              .sub-text {
                width: 94px;
                height: 22px;
                font-family: "Roboto";
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                letter-spacing: 0.1px;
                color: #d9eaff;
              }
            }
          }
        }

        .cards-box {
          display: inline-block !important;
          width: 340px;
          height: calc(100vh - 279.41px);
          overflow-y: auto;
          overflow-x: hidden;
          // display: grid;
          // grid-template-columns: repeat(2, 1fr);

          .address-card {


            .card {
              width: 340px;
              height: 100%;
              padding: 30px 34px !important;
              flex-wrap: nowrap;
              justify-content: center;
              align-content: center;
              background: #FFFFFF !important;
              box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
              border-radius: 12px;
              margin-right: 31px;
              border: none;

              .card-body {
                padding: 0;

                img {
                  width: 24px;
                  height: 24px;
                  margin-right: 9px;
                }

                .card-title {
                  height: 21px;
                  font-family: "Roboto";
                  font-style: normal;
                  font-weight: 500;
                  font-size: 18px;
                  line-height: 119.19%;
                  color: #156ba8;
                }

                .phone-text {
                  width: 228px;
                  height: 39px;
                  font-family: "Roboto";
                  font-style: normal;
                  font-weight: 700;
                  font-size: 14px;
                  line-height: 22px;
                  letter-spacing: 0.1px;
                  text-decoration-line: underline;
                  color: #156ba8;
                }

                .fax-text {
                  height: 42px;
                  font-family: "Roboto";
                  font-style: normal;
                  font-weight: 700;
                  font-size: 14px;
                  line-height: 22px;
                  letter-spacing: 0.1px;
                  text-decoration-line: underline;
                  color: #156ba8;
                }

                .email-text {
                  height: 45px;
                  font-family: "Roboto";
                  font-style: normal;
                  font-weight: 700;
                  font-size: 14px;
                  line-height: 22px;
                  letter-spacing: 0.1px;
                  text-decoration-line: underline;
                  color: #156ba8;
                }

                .address-text {
                  height: 85px;
                  font-family: "Roboto";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 22px;
                  letter-spacing: 0.1px;
                  color: #4f4f4f;
                }

                .normal-text {
                  font-family: "Roboto";
                  font-style: normal;
                  font-weight: 700;
                  font-size: 14px;
                  letter-spacing: 0.1px;
                  text-decoration-line: underline;
                  color: #156ba8;
                  margin-bottom: 12px;
                  word-wrap: break-word;
                }
              }
            }

            .mbc {
              height: 358px;
              margin-bottom: 22px;
            }
          }

          .row-3 {
            height: 62vh;
            overflow-y: scroll;

            .bottom-box {
              width: 858px;
              height: 563px;
            }
          }
        }
      }
    }

}

.small-distributor-page {
display: none;
}
}

import logo from "./../assets/icons/Logo.svg";
import "./../styles/\_distribution.scss";
import locationImg from "./../assets/icons/location.svg";
import location2Img from "./../assets/icons/locationBox.svg";
import searchImg from "./../assets/icons/search.svg";
import whatsappImg from "./../assets/icons/whattsappBox.svg";
import phoneImg from "./../assets/icons/phoneBox.svg";
import mailImg from "./../assets/icons/msgBox.svg";
import arrowImg from "./../assets/icons/homeArrow.svg";
import distribution from "../assets/json/distribution.json";
import backArrow from "./../assets/icons/backArrow.svg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const DistributorNetwork = (props) => {
useEffect(() => {
props.getData({
title: "Find a Distributor",
backBtn: true,
notificationBtn: false,
settingBtn: false,
});
}, []);
const [searchText, setSearchText] = useState("India");
const [distributors, setDistributors] = useState([
{
name: "Vam Electronics",
address:
"Shop No. 1 & 2, 1690, Sunder Bhawan, Bhagirath Palace, Delhi 110 006",
// state: "Delhi",
country: "India",
// zip: " 110 006",
phone: "+91-11-23868159",
fax: "+91 986030XXXX7",
email: "vam.electronics@yahoo.co.in",
map: "null",
},
{
name: "Electrodeal",
address:
"202, 203, Fatehsagar Complex, Opp. Convent School, Vadodara, Gujarat 390 002",
// state: "Gujarat",
country: "India",
// zip: " 390 002",
phone: "+91-265-3013099, +91-265-2793344",
fax: "+91-265-2786677",
email: "respond@electrodeal.com",
map: "null",
},
{
name: "Swift Electrocomp Solutions (P) Ltd.",
address:
"# 681/99, 6th Main Road, Vijayanagar, Bengaluru, Karnataka 560 040",
// state: "Karnataka",
country: "India",
// zip: " 560 040",
phone: "+91-80-23406770, +91-80-23406774",
fax: "null",
email: "sales@swiftelectrocomp.in, vishwanath@swiftelectrocomp.in",
map: "null",
},
{
name: "Roni Electronics",
address:
"#40/5884 C & D, AVS Building, M G Road, Ernakulam, Kochi, Kerala 682 035",
// state: "Kerala",
country: "India",
// zip: " 682 035",
phone: "+91-484-2355029, +91-484-2369926",
fax: "+91-484-2352928",
email: "roni@sify.com, roy@ronielectronics.com",
map: "null",
},
{
name: "Electromark Technologies",
address:
"12A, Hanuman Terrace Building, 1st Floor, Behind Bombay Biscuits, Tara Temple Lane, Grant Road, Mumbai",
state: "Maharashtra",
country: "India",
zip: " 400 007",
phone: "+91-22-23820454, +91-22-23820455, +91-22-23820456",
fax: "null",
email: "mahavir@electromarkindia.com",
map: "null",
},
{
name: "Multitek Electro Devices",
address:
"167, Above Apeksha Palace, Pune-Saswad Road, Phursungi Fata, Pune",
state: "Maharashtra",
country: "India",
zip: " 412 308",
phone: "+91-20-26860032, +91-9923391582",
fax: "+91-20-26860032",
email: "shahkumar@vsnl.net, multitekdevices@gmail.com",
map: "null",
},
{
name: "Ramesh Electronics",
address:
"New Hanuman Building, Shop No. 8, 16, Shyamrao Vithal Marg, Lamington Road, (P.O. Kiln Lane), Mumbai",
state: "Maharashtra",
country: "India",
zip: " 400 007",
phone: "+91-22-2388-5701, +91-22-2387-5720",
fax: "+91-22-2385-0711, +91-22-2385-1624",
email: "rameshelectronics9@yahoo.co.in",
map: "null",
},
{
name: "Elektronika Sales Private Ltd.",
address:
"16, Narsingpuram Street, Mount Road, Chennai ,Tamil Nadu 600 002",
// state: "Tamil Nadu",
country: "India",
// zip: " 600 002",
phone: "+91-44-2858-7165, +91-442858-7765",
fax: "+91-44-2841-9833",
email: "info@elektronikasales.com",
map: "null",
},
{
name: "Indian Electronics",
address: "6, Madan Street, Kolkata, West Bengal 700 072",
// state: "West Bengal",
country: "India",
// zip: " 700 072",
phone: "+91-33-22127548, +91-9831232412",
fax: "+91-33-22126385",
email: "indianelec1974@gmail.com, wasimul2006@yahoo.co.in",
map: "null",
},
{
name: "National Electronics Corporation",
address:
"3, Chandni Approach, 1st Floor, Room No - 2 & 3, Kolkata ,West Bengal 700 072",
// state: "West Bengal",
country: "India",
// zip: " 700 072",
phone: "+91-33-2212-4066, +91-9831003907",
fax: "+91-33-2212-4062",
email: "necorpn@yahoo.com, nec_cal_haque@vsnl.net",
map: "null",
},
]);
const searchFn = (ev) => {
console.log(ev.target.value);
};
return (
<>
{/_ desktop _/}
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
<p>Find a Distributor</p>
</div>
</div>
<div className="find-box">
<div className="box-A">
<form className="card-B">
<img src={locationImg} className="locationImg" alt="" />
<input
                      type="text"
                      name="country"
                      id=""
                      placeholder="Search Country"
                    />
<img className="searchImg" src={searchImg} alt="" />
</form>
</div>
<div className="box-B">
<div className="card card-B">
<div className="align-self-center">
<label className="main-text">India</label>
</div>
<div className="align-self-center">
<h6 className="sub-text d-flex align-item-center">
10 Distributors
</h6>
</div>
</div>
</div>
</div>
<div className="cards-box">
{distributors !== undefined &&
distributors.length &&
distributors.map((distributor, index) => {
return (
<div className="address-card card" key={index}>
<div
className={
[
distributors.length - 1,
distributors.length - 2,
].some((x) => x == index)
? "card p-0"
: "card p-0 mbc"
} >
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
    </>

);
};

export default DistributorNetwork;
