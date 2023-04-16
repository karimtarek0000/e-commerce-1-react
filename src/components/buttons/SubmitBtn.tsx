import { Button, Spinner } from "react-bootstrap";

type SubmitBtnType = {
  title: string;
  loading: boolean;
  disabled?: boolean;
};

function SubmitBtn({
  title,
  loading,
  disabled = false,
}: SubmitBtnType): JSX.Element {
  return (
    <div className="d-flex">
      <Button
        className="flex-center flex-grow-1 flex-lg-grow-0"
        disabled={disabled}
        variant="primary"
        type="submit"
      >
        {title}
        {loading && (
          <Spinner
            className="mx-1"
            animation="border"
            variant="light"
          />
        )}
      </Button>
    </div>
  );
}

export default SubmitBtn;
