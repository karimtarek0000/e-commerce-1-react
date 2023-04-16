import { ThunkDispatch } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import SubmitBtn from "../../components/buttons/SubmitBtn";
import { login } from "../../store/auth";
import { Login, RootStateAuth } from "../../types";

const validationSchema: object = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/i,
      "Please enter a valid email address"
    )
    .required("Please enter email"),
  password: Yup.string()
    .matches(
      /(?=.*[a-z]{2,})(?=.*[A-Z]{2,})(?=.*[0-9]{3,})(?=.*[@$%#]{1,})[a-zA-Z\d@$%#]{8,}/,
      "Please enter a password like that | aaAA889@"
    )
    .required("Please enter password"),
});

function LogIn(): JSX.Element {
  const { loading } = useSelector((state: RootStateAuth) => state.auth);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const navigate = useNavigate();

  const initialValues: Login = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    async onSubmit(data: Login, { resetForm }) {
      try {
        resetForm();
        await dispatch(login(data)).unwrap();
        navigate("/", { replace: true });
        toast.success("Login successfully 👋");
      } catch {
        toast.error("Email or password not correct!");
      }
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

      <SubmitBtn title="Login" loading={loading} disabled={loading} />
    </Form>
  );
}

export default LogIn;
