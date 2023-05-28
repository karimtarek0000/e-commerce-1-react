import ContentLoader from "react-content-loader";

const Category = () => (
  <ContentLoader
    speed={1}
    width={476}
    height={700}
    viewBox="0 0 476 700"
    backgroundColor="#d6d6d6"
    foregroundColor="#ebebeb"
  >
    <rect x="17" y="16" rx="5" ry="5" width="344" height="485" />
  </ContentLoader>
);

const Product = () => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={400}
      viewBox="0 0 300 400"
      backgroundColor="#f4ebeb"
      foregroundColor="#e5dcdc"
    >
      <rect x="2" y="7" rx="10" ry="10" width="295" height="174" />
      <rect x="564" y="66" rx="0" ry="0" width="141" height="32" />
      <rect x="564" y="118" rx="0" ry="0" width="142" height="32" />
      <rect x="1" y="199" rx="10" ry="10" width="298" height="36" />
      <rect x="1" y="256" rx="0" ry="0" width="343" height="13" />
      <rect x="2" y="279" rx="0" ry="0" width="343" height="13" />
      <rect x="3" y="304" rx="0" ry="0" width="340" height="13" />
      <rect x="48" y="348" rx="10" ry="10" width="212" height="36" />
    </ContentLoader>
  );
};

const ProductDetails = ({ type }: { type?: string }) => {
  if (type === "image") {
    return (
      <ContentLoader
        speed={2}
        width={700}
        height={700}
        viewBox="0 0 700 700"
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
        width={700}
        height={700}
        viewBox="0 0 700 700"
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

const CardCart = ({ type }: { type?: "responsive" }) => {
  if (type === "responsive") {
    return (
      <ContentLoader
        speed={2}
        width={400}
        height={400}
        viewBox="0 0 400 400"
        backgroundColor="#f4ebeb"
        foregroundColor="#e5dcdc"
      >
        <rect x="8" y="7" rx="0" ry="0" width="368" height="174" />
        <rect x="564" y="66" rx="0" ry="0" width="141" height="32" />
        <rect x="564" y="118" rx="0" ry="0" width="142" height="32" />
        <rect x="7" y="200" rx="0" ry="0" width="372" height="32" />
        <rect x="58" y="255" rx="0" ry="0" width="257" height="18" />
        <rect x="58" y="288" rx="0" ry="0" width="257" height="18" />
        <rect x="57" y="323" rx="0" ry="0" width="257" height="18" />
        <rect x="58" y="356" rx="0" ry="0" width="257" height="18" />
      </ContentLoader>
    );
  }
  return (
    <ContentLoader
      speed={2}
      width={1000}
      height={200}
      viewBox="0 0 1000 200"
      backgroundColor="#f4ebeb"
      foregroundColor="#e5dcdc"
    >
      <rect x="9" y="17" rx="0" ry="0" width="250" height="174" />
      <rect x="289" y="15" rx="0" ry="0" width="700" height="32" />
      <rect x="291" y="64" rx="0" ry="0" width="700" height="12" />
      <rect x="291" y="85" rx="0" ry="0" width="700" height="12" />
      <rect x="290" y="107" rx="0" ry="0" width="700" height="12" />
      <rect x="290" y="128" rx="0" ry="0" width="700" height="12" />
      <rect x="290" y="157" rx="0" ry="0" width="700" height="32" />
    </ContentLoader>
  );
};

export const Skeleton = {
  Category,
  Product,
  ProductDetails,
  CardCart,
};
