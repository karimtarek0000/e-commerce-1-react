const sprite = require("../../assets/icons/sprite.svg").default;

type RenderSVGTypes = {
  name: string;
  size?: string;
  className?: string;
};

function RenderSVG({
  name,
  size = "2.5rem",
  className,
}: RenderSVGTypes): JSX.Element {
  return (
    <svg className={className} width={size} height={size}>
      <use xlinkHref={`${sprite}#${name}`}>
        <title>{name}</title>
      </use>
    </svg>
  );
}

export default RenderSVG;
