import React from "react";
// import { Link } from "react-router-dom";

import { Col, Row, Container } from "reactstrap";
import caricons from "../Assests/caricons.png";
import discounticons from "../Assests/discounticons.png";
import { Link } from "react-router-dom";
import Category from "../Category/Category";
import HomePageBurger1 from '../Assests/Home pageBurger1.jpg'
import HomePagePizza1 from '../Assests/HomePagePizza1.jpg'
import Homebread from '../Assests/Homebread.jpg'

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl:
      "https://www.shutterstock.com/image-vector/quick-delivery-home-service-fast-600w-1602765481.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, esse.",
  },
  {
    title: "Super Dine In",
    imgUrl:
      "https://media.istockphoto.com/id/183860499/photo/dinner-table-at-sunset.jpg?s=612x612&w=0&k=20&c=r_b1yhtG1jgUMZHZ1t5dc8PH-X9xBc62TO68atLw9vk=",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente?",
  },
  {
    title: "Easy Pick Up",
    imgUrl:
      "https://png.pngtree.com/thumb_back/fh260/background/20220204/pngtree-pick-up-repair-and-maintenance-service-concept-vector-illustration-image_985021.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, saepe!",
  },
];

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="Hero_content">
                <h5 className="mb_3">
                  Fast and easy food delivery service to spoil the foodie within
                  you
                </h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?just wait </span> <br /> food at
                  <span> your door!</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, minima.
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4 foodItemSection">
                  <div className="Order_btn">
                    <button className="order__btn d-flex align-items-center justify-content-between">
                      Order now <i className="ri-arrow-right-s-line"></i>
                    </button>
                  </div>

                  <div className="food_iteam for home">
                    {" "}
                    <button className="all__foods-btn">
                      <Link to="/foods">See all foods</Link>
                    </button>
                  </div>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-5 delivery">
                  <div className="FreeDeliverycustom">
                    <p className="d-flex align-items-center gap-2">
                      <span className="shipping__icon">
                        <img src={caricons} alt="Icons"></img>
                      </span>
                      Free Delivery
                    </p>
                  </div>
                  <div className="securecheckout">
                    {" "}
                    <p className="d-flex align-items-center gap-2">
                      <span className="caricons">
                        <img src={discounticons} alt="discounticonsimage" />
                      </span>
                      100% secure checkout
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img
                  className="HeroImage"
                  src="https://sofyad.com/static/media/hero.e3ef74be66b8a37b4de8.png"
                  alt="Highqualityima"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Category />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <div className="servicesection">
                <div className="service">
                  <h5 className="feature__subtitle mb-4">What We can Serve</h5>
                </div>
                <div className="back_class">
                  <h2 className="feature__title">Just sit back at home</h2>
                </div>
                <div className="takecare">
                  <h2 className="feature__title">
                    we will <span>take care</span>
                  </h2>
                </div>
                <div className="language">
                  <p className="mb-1 mt-4 feature__text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laborum, deserunt.
                  </p>
                </div>
                <div className="lang_class">
                  <p className="mb-1 mt-4 feature__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Error, ullam?
                  </p>
                </div>
              </div>
            </Col>
            <div className="fantasysection">
              {featureData.map((item, index) => {
                return (
                  <>
                    <Col
                      lg="4"
                      md="6"
                      sm="6"
                      key={index}
                      className="sectionImage"
                    >
                      <div className="feature__item text-center px-5 py-3">
                        <div className="delivery_image">
                          <div className="Imagestyle">
                            <img
                              className="feature__item text-center px-5 py-3"
                              src={item.imgUrl}
                              alt="featureImage"
                            />
                          </div>

                          <div className="Image_des">
                            {" "}
                            <h5 className="fw-bold mb-3">{item.title}</h5>
                          </div>
                          <div className="Image_des">
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </>
                );
              })}
            </div>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <div className="foodspart">
                  <h2>Popular Foods</h2>
                </div>
              <div className="famousfoodsection">
                
              </div>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-5">
                <div className="primary_btn">
                  <button>All </button>

                </div>
                <div className="bodyImages_Item1">
                  <img src={HomePageBurger1} alt="Home Page BurgerImage"/>
                </div>
                <div className="HomePiza">
                  <img src={HomePagePizza1} alt="Home Pizza"/>
                </div>
                <div className="homebread">
                  <img src={Homebread} alt="HomeBread"/>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
