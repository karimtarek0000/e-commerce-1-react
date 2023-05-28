import { MouseEventHandler, PropsWithChildren } from "react";
import { Button, Spinner } from "react-bootstrap";

type SubmitBtnType = PropsWithChildren<{
  title?: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  type?: "submit" | "button";
  onClick?: MouseEventHandler;
}>;

function SubmitBtn({
  title,
  loading,
  disabled = false,
  children,
  className,
  type = "submit",
  onClick,
}: SubmitBtnType): JSX.Element {
  return (
    <Button
      className={`flex-center flex-grow-1 flex-lg-grow-0 ${className}`}
      disabled={disabled}
      variant="primary"
      type={type}
      onClick={onClick}
    >
      {title}
      {children}
      {loading && (
        <Spinner className="mx-1" animation="border" variant="light" />
      )}
    </Button>
  );
}

export default SubmitBtn;
