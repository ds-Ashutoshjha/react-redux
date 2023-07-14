import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import HeaderLogo from "../Assests/HeaderLogo.png";
import {
  FaFacebookF,
  FaGithub,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const HotNumber = "+1234567890";
  const FaceBook = "www.Facebook.com";
  const emailAddress = "ashutosh.jha@dotsquares.com";
  const youtubeChannelId = "Www.AshutoshchannelId";
  const githubUsername = "Ashutoshgithubid";

  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="3" sm="6">
              <div className="footer_logo">
                <img src={HeaderLogo} alt=" footer logo" />
                <h5 className="Footer_Title">Foodie</h5>
                <p className="description">
                  Fast and easy food delivery service to spoil the foodie within
                  you.
                </p>
              </div>
            </Col>
            <Col lg="3" md="4" sm="6">
              <h5 className="footer_title">Delivery Time</h5>
              <ListGroup className="delivery_time_list">
                <ListGroupItem className="delivery__time-item border-0 ps-0">
                  <span className="Days_time">Monday-Thursday</span>
                  <p className="timing"> 10:00AM - 9:00PM</p>
                </ListGroupItem>
                <ListGroupItem className="delivery__time-item border-0 ps-0">
                  <span className="Days_time">Friday-Sunday</span>
                  <p className="timing"> 11:00AM - 11:00PM</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg="3" md="4" sm="6">
              <h5 className="contact_title">Contact</h5>
              <ListGroup className="delivery__time-list">
                <ListGroupItem className="delivery__time-item border-0 ps-0">
                  <span className="address_info">
                    {" "}
                    DotSquare Near Mvs School JawaharNagar Near RajaPark
                  </span>
                  <span>
                    <a href={`tel:${HotNumber}`}>{HotNumber}</a>
                  </span>
                </ListGroupItem>
                <ListGroupItem className="delivery__time-item border-0 ps-0">
                  <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg="3" md="4" sm="6">
              <div className="footer_title">
                <h5>Newsletter</h5>
                <p>Subcribe our newsletter</p>
                <div className="newsletter">
                  <span>
                    <input
                      type="email"
                      placeholder="Enter your Email Id Here"
                    />
                    <FaTelegramPlane />
                  </span>
                </div>
              </div>
            </Col>
            <Row className="mt-5">
              <Col lg="6" md="5">
                <p className="copyright_Text">
                  Copyright - 2023, made by Ashutosh Jha, under guidance from
                  Google Baba
                </p>
              </Col>
              <Col lg="6" md="6">
                <div className="social__links d-flex align-items-center gap-4 justify-content-end">
                  <p className="m-0">Follow us: </p>
                  <div>
                    <a
                      href={`https://www.youtube.com/channel/${youtubeChannelId}`}
                    >
                      
                    </a>
                    <FaYoutube />
                    <br />
                    <a href={`https://github.com/${githubUsername}`}>
                      
                    </a>{" "}
                    <FaGithub /> <br />
                    <span>
                      {" "}
                      <a href={`https://www.facebook.com/${FaceBook}`}>
                       
                      </a>
                      <FaFacebookF />
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
