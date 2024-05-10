import React from "react";
import "./Organizations.css";
import image7 from "../../assets/image 7.png";
import image8 from "../../assets/image 8.png";
import image9 from "../../assets/image 9.png";
import image10 from "../../assets/image 10.png";
import image11 from "../../assets/image 11.png";
import image12 from "../../assets/image 12.png";

export default function Organizations() {
  return (
    <div className="organizations">
      <p>Trusted by worlds leading organization</p>
      <div className="orgs">
        <a href="https://about.meta.com/">
          <img src={image7} alt="meta" />
        </a>
        <a href="https://aws.amazon.com/">
          <img src={image8} alt="amazon" />
        </a>
        <a href="https://squareup.com/us/en">
          <img src={image9} alt="squareup" />
        </a>
        <a href="https://www.atlassian.com/">
          <img src={image10} alt="atlassian" />
        </a>
        <a href="https://about.google/intl/ALL_in/">
          <img src={image11} alt="google" />
        </a>
        <a href="https://www.okta.com/">
          <img src={image12} alt="okta" />
        </a>
      </div>
    </div>
  );
}
