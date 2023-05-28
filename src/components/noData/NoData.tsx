type NoDataTypes = {
  data: number;
  loading: boolean;
  title?: string;
  img?: string;
};

function NoData({
  data,
  loading,
  title = "No data",
  img,
}: NoDataTypes): JSX.Element {
  return (
    <>
      {!data && !loading && (
        <div className="flex-center mt-5 flex-column">
          {img && (
            <img
              className="img-resize maxh-228 maxw-399"
              src={img}
              loading="lazy"
              alt="no-data-in-cart"
            />
          )}
          <h4 className="fs-2">{title}</h4>
        </div>
      )}
    </>
  );
}

export default NoData;
