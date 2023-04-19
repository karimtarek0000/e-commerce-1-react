import React from "react";
import ContentLoader from "react-content-loader";

const Category = () => (
  <ContentLoader
    speed={1}
    width={476}
    height={500}
    viewBox="0 0 476 500"
    backgroundColor="#d6d6d6"
    foregroundColor="#ebebeb"
  >
    <rect x="17" y="16" rx="5" ry="5" width="344" height="485" />
  </ContentLoader>
);

const Product = () => {
  return (
    <ContentLoader
      speed={1}
      width={315}
      height={500}
      viewBox="0 0 315 500"
      backgroundColor="#d6d6d6"
      foregroundColor="#ebebeb"
    >
      <rect x="3" y="14" rx="10" ry="10" width="310" height="238" />
      <rect x="3" y="272" rx="10" ry="10" width="312" height="37" />
      <rect x="7" y="330" rx="0" ry="0" width="338" height="8" />
      <rect x="7" y="348" rx="0" ry="0" width="338" height="8" />
      <rect x="7" y="366" rx="0" ry="0" width="342" height="8" />
      <rect x="89" y="408" rx="10" ry="10" width="142" height="27" />
    </ContentLoader>
  );
};

export const Skeleton = {
  Category,
  Product,
};
