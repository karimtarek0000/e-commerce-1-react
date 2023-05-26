type PriceType = {
  price: number;
  afterDiscount?: number;
  className?: string;
};

const Price = ({ price, afterDiscount, className }: PriceType): JSX.Element => {
  const formatNumber = (value: number): string =>
    value?.toLocaleString("en-US");

  return (
    <div className={`fs-4 gap-4 ${className}`}>
      <span className="fw-bold fs-2">
        ${afterDiscount ? formatNumber(afterDiscount) : formatNumber(price)}
      </span>
      {afterDiscount && (
        <span className="td-through">${formatNumber(price)}</span>
      )}
    </div>
  );
};

export default Price;
