import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="136" r="125" />
    <rect x="0" y="289" rx="10" ry="10" width="280" height="26" />
    <rect x="0" y="425" rx="10" ry="10" width="95" height="30" />
    <rect x="128" y="420" rx="10" ry="10" width="153" height="42" />
    <rect x="0" y="328" rx="10" ry="10" width="280" height="68" />
  </ContentLoader>
);

export default Skeleton;
