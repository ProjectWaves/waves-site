import React from "react";
import { Helmet } from "react-helmet";

const DonorboxEmbed = () => {
  return (
    <Helmet>
      <script
        src="https://donorbox.org/widget.js"
        paypalExpress="false"
      ></script>
      <iframe
        allowpaymentrequest=""
        frameborder="0"
        height="900px"
        name="donorbox"
        scrolling="no"
        seamless="seamless"
        src="https://donorbox.org/embed/project-waves"
        style="max-width: 500px; min-width: 250px; max-height:none!important"
        width="100%"
      ></iframe>
    </Helmet>
  );
};

export default DonorboxEmbed;
