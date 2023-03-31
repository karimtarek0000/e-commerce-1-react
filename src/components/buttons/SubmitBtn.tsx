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
    <Button disabled={disabled} variant="primary" type="submit">
      {title}
      {loading && (
        <Spinner
          size="sm"
          className="mx-1"
          animation="border"
          variant="light"
        />
      )}
    </Button>
  );
}

export default SubmitBtn;
