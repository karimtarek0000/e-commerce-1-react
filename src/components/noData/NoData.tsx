type NoDataTypes = {
  data: Array<any>;
  loading: boolean;
  title?: string;
};

function NoData({
  data,
  loading,
  title = "No data",
}: NoDataTypes): JSX.Element {
  return (
    <>
      {!data.length && !loading && (
        <h2 className="text-center my-5 text-danger mt-4">{title}</h2>
      )}
    </>
  );
}

export default NoData;
