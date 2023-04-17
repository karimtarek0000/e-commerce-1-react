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

export const Skeleton = {
  Category,
};
