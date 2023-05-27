import { Button, Form } from "react-bootstrap";
import RenderSVG from "../svg/RenderSVG";
import ModalParent from "../modals/ModalParent";
import { useState } from "react";
import SubmitBtn from "../buttons/SubmitBtn";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Order } from "../../types";

const validationSchema: object = Yup.object().shape({
  phone: Yup.string()
    .matches(/^0[0-9]{10}$/, "Phone number is not valid")
    .required("Please enter your phone"),
  city: Yup.string().required("Please enter your city"),
});

const CheckOut = (): JSX.Element => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const initialValues: Order = {
    phone: "",
    city: "",
    details: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(data: Order, { resetForm }) {
      console.log(data);
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
        onHide={() => setModalShow(false)}
        title="Order Details"
      >
        <Form onSubmit={formik.handleSubmit}>
          {/* Phone */}
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>*Phone</Form.Label>
            <Form.Control
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="phone"
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
            {/* Order by credit */}
            <SubmitBtn
              className="px-4 flex-center gap-3"
              title="Credit"
              disabled={false}
            >
              <RenderSVG name="pay" size="1.8rem" />
            </SubmitBtn>

            {/* Order by cash */}
            <SubmitBtn
              className="px-4 flex-center gap-3"
              title="Cash"
              disabled={false}
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
