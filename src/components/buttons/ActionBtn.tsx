import { PropsWithChildren } from "react";
import { Button, Spinner } from "react-bootstrap";

type ActionBtnType = PropsWithChildren<{
  loading: boolean;
  disabled: boolean;
}>;

function ActionBtn({
  loading,
  disabled = false,
  children,
}: ActionBtnType): JSX.Element {
  return (
    <Button
      className="flex-center gap-2 w-100"
      disabled={disabled}
      variant="primary"
    >
      {loading ? (
        <Spinner className="mx-1" animation="border" variant="light" />
      ) : (
        children
      )}
    </Button>
  );
}

export default ActionBtn;
