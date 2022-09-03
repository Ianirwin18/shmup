import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import level1banner from "../assets/img/level1banner.png";
import level2banner from "../assets/img/level2banner.png";
import level3banner from "../assets/img/level3banner.png";
import kozmo from "../assets/img/kozmo.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link, useNavigate } from "react-router-dom";

export const Projects = () => {

  const projects = [
    {
      title: "Level 1",
      description: (
        <iframe
          frameborder="0"
          src="https://itch.io/embed/1689347"
          width="50"
          height="50"
        >
          <a href="https://fluffykyubey.itch.io/ship2">ship2 by Fluffykyubey</a>
        </iframe>
      ),
      imgUrl: level1banner,


    },
    {
      title: "Level 2",
      description: (
        <iframe
          frameborder="0"
          src="https://itch.io/embed/1687678"
          width="50"
          height="50"
        >
          <a href="https://justinlee.itch.io/school">
            Ship level 1 by JustinLee
          </a>
        </iframe>
      ),  
      imgUrl: level2banner,
    },
    {
      title: "Level 3",
        description: (
          <iframe
            src="https://itch.io/embed/1689450"
            width="50"
            height="50"
            frameborder="0"
          >
            <a href="https://ianirwin18.itch.io/level-3">level 3 by ianirwin18</a>
          </iframe>
        ),
      imgUrl: level3banner,
    },



  ];
  let navigate = useNavigate();
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Levels</h2>
                  <button type="button" onClick={() => navigate("/Download")}>Download</button>
                  <p>Hover over one of the banners and click the download button to download the game if your confused on how to download click the how to button to learn more. --A.U.1245</p>
                  
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />

                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={kozmo} alt="alt"></img>
    </section>
  )
}
