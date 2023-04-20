import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    width={210}
    height={278}
    viewBox="0 0 210 278"
    backgroundColor="#ffffff"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="12" y="9" rx="9" ry="9" width="35" height="33" />
    <rect x="59" y="52" rx="10" ry="10" width="96" height="74" />
    <rect x="10" y="139" rx="2" ry="2" width="148" height="6" />
    <rect x="11" y="151" rx="2" ry="2" width="148" height="6" />
    <rect x="10" y="166" rx="2" ry="2" width="89" height="4" />
    <rect x="11" y="202" rx="0" ry="0" width="91" height="13" />
    <rect x="13" y="223" rx="0" ry="0" width="79" height="13" />
    <rect x="122" y="203" rx="0" ry="0" width="40" height="35" />
  </ContentLoader>
);

export default MyLoader;
