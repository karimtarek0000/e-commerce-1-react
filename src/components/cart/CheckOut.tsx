import { Button, Form } from "react-bootstrap";
import RenderSVG from "../svg/RenderSVG";
import ModalParent from "../modals/ModalParent";
import { useRef, useState } from "react";
import SubmitBtn from "../buttons/SubmitBtn";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Order } from "../../types";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { checkOutCash, checkOutCredit } from "../../store/cart";
import toast from "react-hot-toast";

const validationSchema: object = Yup.object().shape({
  phone: Yup.string()
    .matches(/^0[0-9]{10}$/, "Phone number is not valid")
    .required("Please enter your phone"),
  city: Yup.string().required("Please enter your city"),
});

const CheckOut = ({ ownerId }: { ownerId: string }): JSX.Element => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const btnType = useRef<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const initialValues: Order = {
    phone: "",
    city: "",
    details: "",
  };

  // Payment
  const orderByCash = async (info: Order) => {
    setLoading(true);
    await dispatch(checkOutCash({ id: ownerId, info }));
    setLoading(false);
  };
  const orderByCredit = async () => {
    await dispatch(checkOutCredit(ownerId));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    async onSubmit(data: Order, { resetForm }) {
      if (btnType.current === "cash") {
        await orderByCash(data);
        toast.success("Order has been successfully 🚀");
      }

      if (btnType.current === "credit") {
        await orderByCredit();
      }

      setModalShow(false);
      resetForm();
    },
  });

  return (
    <>
      <Button
        onClick={() => setModalShow(true)}
        className="flex-center gap-2"
        variant="primary"
      >
        Checkout
        <RenderSVG name="checkout" size="1.7rem" />
      </Button>
      {/* <Spinner className="mx-1" animation="border" variant="light" /> */}

      {/* Modal for checkout */}
      <ModalParent
        show={modalShow}
        onHide={() => {
          formik.resetForm();
          setModalShow(false);
        }}
        title="Order Details"
      >
        <Form>
          {/* Phone */}
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>*Phone</Form.Label>
            <Form.Control
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="phone"
              autoComplete="off"
              placeholder="Enter your phone number"
            />
            {formik.touched.phone && formik.errors.phone && (
              <Form.Text className="text-muted">
                {formik.errors.phone}
              </Form.Text>
            )}
          </Form.Group>

          {/* City */}
          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>*City</Form.Label>
            <Form.Control
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="city"
              placeholder="Enter your city"
              autoComplete="off"
            />
            {formik.touched.city && formik.errors.city && (
              <Form.Text className="text-muted">{formik.errors.city}</Form.Text>
            )}
          </Form.Group>

          {/* Detials */}
          <Form.Group className="mb-3" controlId="formBasicDetails">
            <Form.Label>Details</Form.Label>
            <Form.Control
              as="textarea"
              value={formik.values.details}
              onChange={formik.handleChange}
              name="details"
              placeholder="Write any other details if you want"
            />
          </Form.Group>

          {/* For submit */}
          <div className="flex-center w-100 gap-2 mt-5">
            {/* Order by Credit */}
            <SubmitBtn
              className="px-4 flex-center gap-3"
              title="Credit"
              disabled={loading}
              type="button"
              onClick={() => {
                btnType.current = "credit";
                formik.submitForm();
              }}
            >
              <RenderSVG name="pay" size="1.8rem" />
            </SubmitBtn>

            {/* Order by Cash */}
            <SubmitBtn
              className="px-4 flex-center gap-3"
              title="Cash"
              loading={loading}
              disabled={loading}
              type="button"
              onClick={() => {
                btnType.current = "cash";
                formik.submitForm();
              }}
            >
              <RenderSVG name="cash" size="1.8rem" />
            </SubmitBtn>
          </div>
        </Form>
      </ModalParent>
    </>
  );
};

export default CheckOut;
