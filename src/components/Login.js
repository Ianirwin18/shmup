import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import axios from "axios";
import AuthService from "../utils/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const request = await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      });
      if (request) {
        AuthService.login(request.token);
      }
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
                  <h2>Log In</h2>
                  <form onSubmit={Auth}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={email}
                          placeholder="Email Address"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="password"
                          value={password}
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
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

export default Login;
