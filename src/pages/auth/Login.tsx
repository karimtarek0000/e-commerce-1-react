import { useFormik } from "formik";
import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import SubmitBtn from "../../components/buttons/SubmitBtn";

const validationSchema: object = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/i,
      "Please enter a valid email address"
    )
    .required("Please enter email"),
  password: Yup.string().required("Please enter password"),
});

type Login = {
  email: string;
  password: string;
};

function LogIn(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  const initialValues: Login = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values: Login, { resetForm }) {
      setLoading(true);
      console.log("Login: ", values);
      resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {/* Email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        {formik.touched.email && formik.errors.email && (
          <Form.Text className="text-muted">{formik.errors.email}</Form.Text>
        )}
      </Form.Group>

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

      {/* Go to forget password */}
      <Link
        to="/auth/forget-password"
        className="d-block link-underline link-underline-opacity-0 mb-4 text-end"
      >
        forget password ?
      </Link>

      {/* Go to create a new account */}
      <Link
        to="/auth/sign-up"
        className="d-block link-underline link-underline-opacity-0 mb-4"
      >
        Create new account
      </Link>

      <SubmitBtn loading={loading} title="Login" />
    </Form>
  );
}

export default LogIn;
