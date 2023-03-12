import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";

import mobile from "../../assets/mobile.svg";
import groupon from "../../assets/groupon.svg";
import gist from "../../assets/gist.png";
const style = { fontSize: "28px" };
function Footer() {
  return (
    <div className="container">
      <div className="row main-footer-wrapper">
        <div className="col-lg-4 d-flex">
          <div className="col-lg-6 px-0">
            <div className="footer-heading">
              <h4>Company</h4>
            </div>
            <div className="footer-links">
              <ul>
                <li>About Mooli</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Investors Relation</li>
                <li>Management Team</li>
                <li>In your comunity</li>
              </ul>
            </div>
            </div>
          </div>
          {/* <div className="col-lg-6 px-0">
            <div className="footer-heading">
              <h4>Work with Groupon</h4>
            </div> */}
            {/* <div className="footer-links">
              <ul>
                <li>Join the Groupon Marketplace</li>
                <li>Run a Groupon Campaign</li>
                <li>Learn About Groupon Merchant</li>
                <li>Affiliate Program</li>
                <li>Vendor Code of Conduct</li>
              </ul>
            </div> 
          </div>*/}
      
          <div className="col-lg-4 d-flex">
          <div className="col-lg-6 px-0">
            <div className="footer-heading">
              <h4>More</h4>
            </div>
            <div className="footer-links">
              <ul>
                <li>Customer Support</li>
                <li>Refund Policies</li>
                <li>FAQ</li>
                <li>Coupon Codes</li>
                <li>Gift Cards</li>
                <li>Gift Shop</li>

                <li>Students</li>
                <li>Report Infringement</li>
                <li>Pricing Transparency Statement</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 px-0">
            <div className="footer-heading">
              {/* <h4>Mooli Sites</h4> */}
            </div>
            <div className="footer-links">
              <div className="footer-coutry-select">
                {/* <select>
                  <option>1</option>
                  <option>1</option>
                  <option>1</option>
                </select> */}
              </div>
              <div className="footer-heading">
                <h4>Follow Us</h4>
              </div>
              <div className="d-flex">
                <div>
                  <RiFacebookCircleLine size={32} />
                </div>
                <div>
                  <TiSocialTwitterCircular size={36} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="col-lg-10 d-flex">
            <div className="footer-img-wrapper d-flex">
              <div>
                <img src={mobile} />
              </div>
              <div className="footer-get-app">
                <h4>Get the Mooli Mobile App</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="footer-img-wrapper">
              <div>
                <img src={groupon} />
              </div>
              <div className="footer-get-app">
                <h4>Grow Your Business by Working with Mooli</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 footer-second-text">
          <p>Incredible Deals on Local Experiences</p>
        </div>
      </div>
      <div className="row" style={{ paddingBottom: "24px" }}>
        <div className="col-lg-12 d-flex">
          <div className="footer-link-wrapper">
            <a href="">Mooli Gift Ideas</a>
          </div>
          <div className="footer-link-wrapper">
            <a href="">Valentine's Day Gifts</a>
          </div>

          <div className="footer-link-wrapper">
            <a href=""> Mother's Day Gifts</a>
          </div>
          <div className="footer-link-wrapper">
            <a href=""> Father's Day Gifts</a>
          </div>

          <div className="footer-link-wrapper">
            <a href=""> Things to Do </a>
          </div>

          <div className="footer-link-wrapper">
            <a href=""> Kids Activities</a>
          </div>
          <div className="footer-link-wrapper">
            <a href=""> Nightlife</a>
          </div>

          <div className="footer-link-wrapper">
            <a href=""> Restaurants</a>
          </div>

          <div className="footer-link-wrapper">
            <a href=""> Spas</a>
          </div>

          <div className="footer-link-wrapper">
            <a href=""> Massages</a>
          </div>
          <div className="footer-link-wrapper">
            <a href=""> Hair Salons</a>
          </div>
          <div className="footer-link-wrapper">
            <a href="">Travel</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 d-flex">
          <div className="footer-link-wrapper">
            <a href="">
              <img src={gist} />
            </a>
          </div>
          <div className="footer-link-wrapper">
            <a href="">Course Blog</a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 d-flex">
          <div className="footer-link-wrapper-">
            <a href="">© 2022 Mooli, Inc. All Rights Reserved.</a>
          </div>
          <div className="footer-link-wrapper-">
            <a href="">Terms of Use</a>
          </div>
          <div className="footer-link-wrapper-">
            <a href="">Privacy Statement</a>
          </div>
          <div className="footer-link-wrapper-">
            <a href="">Licenses</a>
          </div>

          <div className="footer-link-wrapper-">
            <a href="">Accessibility</a>
          </div>

          <div className="footer-link-wrapper-">
            <a href="">
              Do Not Sell My Personal InformationDo Not Sell My Personal
              Information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
