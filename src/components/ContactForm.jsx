import React, { useState } from "react";
import validator from "validator";
import { send } from "emailjs-com";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";

const ContactForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  //Validate Email
  const isEmailValid = (email) => {
    return validator.isEmail(email);
  };

  const onSubmit = (data) => {
    send("service_xfyc7sv", "template_svkzo85", data, "ax-1w90GPv1yJgDEj")
      .then((_res) => {
        toast(<>Successfully Submitted</>, {
          type: toast.TYPE.SUCCESS,
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          toastClassName: "custom-toast",
          bodyClassName: "custom-toast-body",
        });
        reset();
      })
      .catch((err) => {
        toast(<>Something went wrong</>, {
          type: toast.TYPE.ERROR,
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          toastClassName: "custom-toast",
          bodyClassName: "custom-toast-body",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container className=" px-md-5 px-3 py-2 ">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-transparent"
        name="contact"
        netlify
        method="POST"
        data-remove-prefix
        value="New mail from muhammad-ali122.netlify.app/home"
      >
        <Row className="g-3 my-auto">
          <Col md={6}>
            <Form.Group>
              <Form.Control
                type="text"
                name="name"
                maxLength={25}
                minLength={1}
                placeholder="your name"
                className={`${
                  errors.name && "is-invalid"
                } border-0 bg-secondary bg-opacity-25 rounded-4 text-white input-field px-4 py-2`}
                {...register("name", {
                  required: true,
                })}
              />
              <Form.Text
                className={`${errors.name ? "text-danger" : "d-none"}`}
              >
                please enter name
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                maxLength={25}
                minLength={1}
                placeholder="your email"
                className={`${
                  errors.email && "is-invalid"
                }  border-0 bg-secondary bg-opacity-25 rounded-4 text-white input-field px-4 py-2`}
                {...register("email", {
                  required: true,
                  validate: (value) =>
                    isEmailValid(value) || "Invalid email format",
                })}
              />
              <Form.Text
                className={`${errors.email ? "text-danger" : "d-none"}`}
              >
                please enter email
              </Form.Text>
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group>
              <Form.Control
                type="text"
                name="subject"
                maxLength={35}
                minLength={1}
                placeholder="subject"
                className={`${
                  errors.subject && "is-invalid"
                }  border-0 bg-secondary bg-opacity-25 rounded-4 text-white input-field px-4 py-2`}
                {...register("subject", { required: true })}
              />
              <Form.Text
                className={`${errors.subject ? "text-danger" : "d-none"}`}
              >
                please enter subject
              </Form.Text>
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group>
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                minLength={1}
                placeholder="message"
                className={`${
                  errors.message && "is-invalid"
                }  border-0 bg-secondary bg-opacity-25 rounded-4 text-white input-field px-4 py-2`}
                {...register("message", { required: true })}
              />
              <Form.Text
                className={`${errors.message ? "text-danger" : "d-none"}`}
              >
                please enter message
              </Form.Text>
            </Form.Group>
          </Col>
          <Col xs={12} className="text-end me-auto">
            <Button
              type="submit"
              variant="warning"
              disabled={loading}
              className="rounded-0 px-3 py-2"
            >
              SUBMIT
              <Spinner
                animation="border"
                className={`${loading ? "" : "d-none"} bg-transparent ms-2`}
                size="sm"
              />
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ContactForm;
