import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";

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
  const initialValues: Login = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values: Login, { resetForm }) {
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

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default LogIn;
