import React from "react";
import { css } from "@emotion/core";
import { Helmet } from "react-helmet";

const DonorboxEmbed = () => {
  return (
    <>
      <Helmet>
        <script
          src="https://donorbox.org/widget.js"
          paypalExpress="false"
        ></script>
      </Helmet>
      <div css={css``}>
        <iframe
          allowpaymentrequest=""
          frameborder="0"
          height="900px"
          name="donorbox"
          scrolling="no"
          seamless="seamless"
          src="https://donorbox.org/embed/project-waves"
          css={css`
            max-width: 500px;
            min-width: 250px;
            max-height: none !important;
            width: "100%";
          `}
        ></iframe>
      </div>
    </>
  );
};

export default DonorboxEmbed;
