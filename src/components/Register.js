import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");

  const RegisterUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Sign-Up</h2>
                  <form onSubmit={RegisterUser}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={name}
                          placeholder="Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={email}
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="password"
                          value={password}
                          placeholder="**********"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="password"
                          value={confPassword}
                          placeholder="**********"
                          onChange={(e) => setConfPassword(e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <button type="submit">
                          <span>Submit</span>
                        </button>
                      </Col>
                      {msg.message && (
                        <Col>
                          <p
                            className={
                              setMsg.success === false ? "danger" : "success"
                            }
                          >
                            {msg.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
