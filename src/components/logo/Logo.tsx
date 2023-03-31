const logo: string = require("../../assets/images/logos/logo.svg").default;

type LogoTypes = {
  className?: string;
};

function Logo({ className = "mb-4 img-150" }: LogoTypes): JSX.Element {
  const classess = `align-self-center ${className}`;

  return (
    <>
      <img className={classess} src={logo} alt="logo" />
    </>
  );
}

export default Logo;
