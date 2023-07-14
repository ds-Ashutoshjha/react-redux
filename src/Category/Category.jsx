import React from "react";
import { Col, Container, Row } from "reactstrap";

const Category = () => {
  const CategoryData = [
    {
      display: "FastFood",
      ImageUrl:
        "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
    },
    {
      display: "Pizza",
      ImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTha-cZDWnxFRjgYRXfa-g5zUUYYtFthmdPm3EoAqZK&s",
    },
    {
      display: "Asian food",
      ImageUrl:
        "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
      display: "Indian Thali",
      ImageUrl: "https://static.toiimg.com/photo/61275846.cms",
    },
  ];
  console.log("CategoryData", CategoryData);
  return (
    <>
      <Container>
        <Row className="lapila">
          {CategoryData.map((item) => {
            return (
              <>
                <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
                  <div className="Item_name">
                    <div className="display_Item">
                      <div className="Iteam_Name">
                        <h6>{item.display} </h6>
                      </div>
                    </div>
                    <div className="Image_category">
                      <div className="Category_Image">
                        <img src={item.ImageUrl} alt="Iteam Pic available" />
                      </div>
                    </div>
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Category;
