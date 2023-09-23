import React from "react";
import validator from "validator";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Button, Col, Container, Row } from "react-bootstrap";

const ContactForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Validate Email
  const isEmailValid = (email) => {
    return validator.isEmail(email);
  };

  const onSubmit = () => {
    toast(<>Successfully Submitted</>, {
      type: toast.TYPE.SUCCESS,
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
      toastClassName: "custom-toast",
      bodyClassName: "custom-toast-body",
    });
    reset();
  };

  return (
    <Container className="bg-transparent px-md-5 px-3 py-2 ">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-transparent"
        name="contact"
        netlify
        method="POST"
        data-remove-prefix
        value="New mail from muhammad-ali122.netlify.app/home"
      >
        <Row className="g-3 my-auto bg-transparent">
          <Col xs={12} className="bg-transparent">
            <Form.Group className="bg-white">
              <Form.Label className="text-dark bg-transparent fw-500">
                Name:
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                maxLength={25}
                minLength={1}
                placeholder="your name"
                className={`${errors.name ? "is-invalid" : ""}`}
                {...register("name", {
                  required: true,
                })}
              />
              <Form.Text
                className={`${
                  errors.name ? "text-danger bg-transparent" : "d-none"
                }`}
              >
                please enter name
              </Form.Text>
            </Form.Group>
          </Col>
          <Col xs={12} className="bg-transparent">
            <Form.Group className="bg-transparent">
              <Form.Label className="text-dark bg-transparent fw-500">
                Email:
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                maxLength={25}
                minLength={1}
                placeholder="your email"
                className={`${errors.email ? "is-invalid" : ""}`}
                {...register("email", {
                  required: true,
                  validate: (value) =>
                    isEmailValid(value) || "Invalid email format",
                })}
              />
              <Form.Text
                className={`${
                  errors.email ? "text-danger bg-transparent" : "d-none"
                }`}
              >
                please enter email
              </Form.Text>
            </Form.Group>
          </Col>
          <Col xs={12} className="bg-transparent">
            <Form.Group className="bg-transparent">
              <Form.Label className="text-dark bg-transparent fw-500">
                Subject:
              </Form.Label>
              <Form.Control
                type="text"
                name="subject"
                maxLength={35}
                minLength={1}
                placeholder="subject"
                className={`${errors.subject ? "is-invalid" : ""}`}
                {...register("subject", { required: true })}
              />
              <Form.Text
                className={`${
                  errors.subject ? "text-danger bg-transparent" : "d-none"
                }`}
              >
                please enter subject
              </Form.Text>
            </Form.Group>
          </Col>
          <Col xs={12} className="bg-transparent">
            <Form.Group className="bg-transparent">
              <Form.Label className="text-dark bg-transparent fw-500">
                Message:
              </Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                minLength={1}
                placeholder="message"
                className={`${errors.message ? "is-invalid" : ""}`}
                {...register("message", { required: true })}
              />
              <Form.Text
                className={`${
                  errors.message ? "text-danger bg-transparent" : "d-none"
                }`}
              >
                please enter message
              </Form.Text>
            </Form.Group>
          </Col>
          <Col xs={12} className="bg-transparent text-end me-auto">
            <Button
              type="submit"
              variant="warning"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ContactForm;
