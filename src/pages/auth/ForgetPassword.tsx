import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import SubmitBtn from "../../components/buttons/SubmitBtn";

const validationSchema: object = Yup.object().shape({
  password: Yup.string()
    .matches(
      /(?=.*[a-z]{2,})(?=.*[A-Z]{2,})(?=.*[0-9]{3,})(?=.*[@$%#]{1,})[a-zA-Z\d@$%#]{8,}/,
      "Please enter a password like that | aaAA889@"
    )
    .required("Please enter password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

type Forget = {
  password: string;
  confirmPassword: string;
};

function ForgetPassword(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  const initialValues: Forget = {
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values: Forget, { resetForm }) {
      setLoading(true);
      console.log("Forget: ", values);
      resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {/* Password */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          name="password"
          placeholder="Password"
        />
        {formik.touched.password && formik.errors.password && (
          <Form.Text className="text-muted">{formik.errors.password}</Form.Text>
        )}
      </Form.Group>

      {/* Confirm Password */}
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <Form.Text className="text-muted">
            {formik.errors.confirmPassword}
          </Form.Text>
        )}
      </Form.Group>

      {/* Go to login */}
      <p className="text-end">
        Back to
        <Link
          to="/auth"
          className="ms-1 link-underline link-underline-opacity-0"
        >
          login
        </Link>
      </p>

      <SubmitBtn loading={loading} title="Reset password" />
    </Form>
  );
}

export default ForgetPassword;
