type PriceType = {
  price: number;
  afterDiscount?: number;
  className?: string;
};

const Price = ({ price, afterDiscount, className }: PriceType): JSX.Element => {
  return (
    <div className={`fs-4 gap-4 ${className}`}>
      <span className="fw-bold fs-2">
        ${afterDiscount ? afterDiscount : price}
      </span>
      {afterDiscount && <span className="td-through">${price}</span>}
    </div>
  );
};

export default Price;
