import { ChangeEvent, PropsWithChildren } from "react";
import { Button, Spinner } from "react-bootstrap";

type ActionBtnType = PropsWithChildren<{
  loading: boolean;
  disabled: boolean;
  action: (e: ChangeEvent<EventTarget>) => Promise<void>;
}>;

function ActionBtn({
  loading,
  disabled = false,
  children,
  action,
}: ActionBtnType): JSX.Element {
  return (
    <Button
      style={{ height: "40px" }}
      className="flex-center gap-2 w-100"
      onClick={(e) => action(e)}
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
