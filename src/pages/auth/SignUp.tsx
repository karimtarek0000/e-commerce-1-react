import { ThunkDispatch } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import { ChangeEventHandler, useState } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import SubmitBtn from "../../components/buttons/SubmitBtn";
import { signUp } from "../../store/auth";
import { RootStateAuth, SignUpTypes } from "../../types";

const validationSchema: object = Yup.object().shape({
  name: Yup.string().required("Please enter name"),
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
  rePassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

function SignUp(): JSX.Element {
  const [terms, setTerms] = useState<boolean>(false);
  const { loading } = useSelector((state: RootStateAuth) => state.auth);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const navigate = useNavigate();

  const initialValues: SignUpTypes = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    async onSubmit(data: SignUpTypes, { resetForm }) {
      try {
        resetForm();
        await dispatch(signUp(data)).unwrap();
        navigate("/", { replace: true });
        toast.success(`Welcome ${data.name} Register successfully 👋`);
      } catch (error) {
        toast.error(`${error}`);
      } finally {
        setTerms(false);
      }
    },
  });

  const CheckboxChangeHandler: ChangeEventHandler = () =>
    setTerms((terms) => !terms);

  return (
    <Form onSubmit={formik.handleSubmit}>
      {/* Name */}
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          name="name"
          placeholder="Enter your name"
          autoComplete="off"
        />
        {formik.errors.name && (
          <Form.Text className="text-muted">{formik.errors.name}</Form.Text>
        )}
      </Form.Group>

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
          autoComplete="off"
        />
        {formik.errors.email && (
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
          autoComplete="off"
        />
        {formik.errors.password && (
          <Form.Text className="text-muted">{formik.errors.password}</Form.Text>
        )}
      </Form.Group>

      {/* Confirm Password */}
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          value={formik.values.rePassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          name="rePassword"
          placeholder="Confirm Password"
          autoComplete="off"
        />
        {formik.errors.rePassword && (
          <Form.Text className="text-muted">
            {formik.errors.rePassword}
          </Form.Text>
        )}
      </Form.Group>

      {/* Go to login */}
      <p className="text-end fs-4">
        You have an account ?
        <Link
          to="/auth"
          className="ms-1 link-underline link-underline-opacity-0"
        >
          login
        </Link>
      </p>

      {/* Agree for terms and conditions */}
      <Form.Check
        className="mb-4 fs-4"
        type="checkbox"
        checked={terms}
        id="checkbox"
        onChange={CheckboxChangeHandler}
        label="Agree terms and conditions"
      />

      <SubmitBtn
        loading={loading}
        title="Sign up"
        disabled={!terms || loading}
      />
    </Form>
  );
}

export default SignUp;
