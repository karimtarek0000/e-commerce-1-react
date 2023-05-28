import { Suspense, lazy, useState } from "react";
import { Button } from "react-bootstrap";
import RenderSVG from "../svg/RenderSVG";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { removeAllProducts } from "../../store/cart";
import toast from "react-hot-toast";

const ModalParent = lazy(() => import("../modals/ModalParent"));

const RemoveAll = (): JSX.Element => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [loading, setLoading] = useState<boolean>(false);

  const removeAllProductsHandler = async (): Promise<void> => {
    setLoading(true);
    await dispatch(removeAllProducts()).unwrap();
    setLoading(false);
    toast.success("All products removed successfully");
  };

  return (
    <>
      <Button
        onClick={() => setModalShow(true)}
        className="flex-center gap-2"
        variant="danger"
      >
        Remove All
        <RenderSVG name="remove" size="1.7rem" />
      </Button>

      {/* Modal for confirm remove all products from cart */}
      <Suspense>
        {modalShow && (
          <ModalParent
            show={modalShow}
            onHide={() => setModalShow(false)}
            confirm="true"
            onConfirm={removeAllProductsHandler}
            loading={loading}
            title="Remove all products from cart"
          >
            <h2 className="fs-3 fw-normal py-3 text-center">
              Are sure you want remove all products from your cart ?
            </h2>
          </ModalParent>
        )}
      </Suspense>
    </>
  );
};

export default RemoveAll;
