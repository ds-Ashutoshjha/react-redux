import React from "react";
import { Col, Container,Row } from "reactstrap";

const foodItem = [
  {
    title: "Chicken Burger",
    ImageUrlItem:
      "http://localhost:3000/static/media/product_01.6be97a612b580d595585.jpg",
    PriceIcon: " ₹",
  },
  {
    title: "Vegetarian Pizza",
    ImageUrlItem:
      "http://localhost:3000/static/media/product_2.1.f15385546f60c8d0f0d9.jpg",
    PriceIcon: " ₹",
  },
  {
    title: "Double Cheese Margherita",
    ImageUrlItem:
      "http://localhost:3000/static/media/product_01.6be97a612b580d595585.jpg",
    PriceIcon: " ₹",
  },
  {
    title: "Mexican Green Wave",
    ImageUrlItem:
      "http://localhost:3000/static/media/product_4.1.3c8ecc492220a3922731.jpg",
    PriceIcon: " ₹",
  },
  {
    title: "Cheese Burger",
    ImageUrlItem:
      "http://localhost:3000/static/media/product_04.f7c5294d0481fb12cc4c.jpg",
    PriceIcon: " ₹",
  },
  {
    title: "Royal Cheese Burger",
    ImageUrlItem:
      "http://localhost:3000/static/media/product_01.6be97a612b580d595585.jpg",
    PriceIcon: " ₹",
  },
  {
    title: "Seafood Pizza",
    ImageUrlItem:
      "http://localhost:3000/static/media/product_2.2.4967c9cbe3fec366a31a.jpg",
    PriceIcon: " ₹",
  },
  {
    title: "Thin Cheese Pizza",
    ImageUrlItem:
      "http://localhost:3000/static/media/product_3.2.ebcb16b50e4ef0060a5e.jpg",
    PriceIcon: " ₹",
  },
  {
    title: "Pizza With Mushroom",
    ImageUrlItem:
      "http://localhost:3000/static/media/product_4.2.e82e43e0a3fc5dab999e.jpg",
    PriceIcon: " ₹",
  },
  {
    title: "Classic Hamburger",
    ImageUrlItem:
      "http://localhost:3000/static/media/product_08.efc6c71968cf3ffe817a.jpg",
    PriceIcon: " ₹",
  },
  {
    title: "Crunchy Bread",
    ImageUrlItem:
      "http://localhost:3000/static/media/bread(1).2d6c544795d9845f71aa.png",
    PriceIcon: " ₹",
  },
  {
    title: "Delicious Bread",
    ImageUrlItem:
      "http://localhost:3000/static/media/bread(2).8e7ae222cfca8aaf6dab.png",
    PriceIcon: " ₹",
  },
  {
    title: "Loaf Bread",
    ImageUrlItem:
      "http://localhost:3000/static/media/bread(2).8e7ae222cfca8aaf6dab.png",
    PriceIcon: " ₹",
  },
];

const FoodDetail = () => {
  return ( 
  <>
  <section>
    <Container>
      <Row>
    <Col>
    <div className=" FoodItem Section">
      {foodItem.map((idex,item) => {
        return(
          <>
       <img src={idex.ImageUrlItem} alt="FoodItemPic"/>
          </>
        )
      })}

    </div>
    </Col>
      </Row>
    </Container>
  </section>

  </>
  );
};

export default FoodDetail;
