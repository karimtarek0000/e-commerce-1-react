type PriceType = {
  price: number;
  afterDiscount: number;
};

const Price = ({ price, afterDiscount }: PriceType): JSX.Element => {
  return (
    <div className="flex-start-center fs-4 gap-4">
      <span className="fw-bold fs-2">
        ${afterDiscount ? afterDiscount : price}
      </span>
      {afterDiscount && <span className="td-through">${price}</span>}
    </div>
  );
};

export default Price;
