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

const ProductDetails = ({ type }: { type?: string }) => {
  if (type === "image") {
    return (
      <ContentLoader
        speed={2}
        width={500}
        height={500}
        viewBox="0 0 500 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="127" y="21" rx="0" ry="0" width="447" height="472" />
        <rect x="5" y="64" rx="0" ry="0" width="107" height="88" />
        <rect x="5" y="163" rx="0" ry="0" width="107" height="88" />
        <rect x="6" y="263" rx="0" ry="0" width="107" height="88" />
        <rect x="7" y="362" rx="0" ry="0" width="107" height="88" />
      </ContentLoader>
    );
  }

  if (type === "imageResponsive") {
    return (
      <ContentLoader
        speed={2}
        width={500}
        height={500}
        viewBox="0 0 500 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="2" y="129" rx="0" ry="0" width="489" height="364" />
        <rect x="379" y="24" rx="0" ry="0" width="107" height="88" />
        <rect x="254" y="25" rx="0" ry="0" width="107" height="88" />
        <rect x="130" y="25" rx="0" ry="0" width="107" height="88" />
        <rect x="3" y="27" rx="0" ry="0" width="107" height="88" />
      </ContentLoader>
    );
  }

  return (
    <ContentLoader
      speed={2}
      width={700}
      height={200}
      viewBox="0 0 700 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="10" y="11" rx="0" ry="0" width="589" height="30" />
      <rect x="11" y="61" rx="0" ry="0" width="588" height="6" />
      <rect x="10" y="153" rx="0" ry="0" width="95" height="17" />
      <rect x="10" y="180" rx="0" ry="0" width="95" height="17" />
      <rect x="11" y="76" rx="0" ry="0" width="588" height="6" />
      <rect x="11" y="91" rx="0" ry="0" width="588" height="6" />
      <rect x="11" y="107" rx="0" ry="0" width="588" height="6" />
      <rect x="11" y="124" rx="0" ry="0" width="588" height="6" />
    </ContentLoader>
  );
};

export const Skeleton = {
  Category,
  Product,
  ProductDetails,
};
