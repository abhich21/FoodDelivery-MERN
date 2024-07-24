import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import {
  FavoriteBorder,
  FavoriteBorderOutlined,
  FavoriteRounded,
} from "@mui/icons-material";
import { CircularProgress, Rating } from "@mui/material";

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 16px;
  }
  background: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  max-width: 1400px;
  display: flex;
  gap: 40px;
  justify-content: center;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const ImagesWrapper = styled.div`
  // background-color:blue;
  flex: 0.7;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  max-width: 500px;
  width: 100%;
  max-height: 500px;
  border-radius: 12px;
  object-fit: cover;
  @media (max-width: 768px) {
    max-width: 400px;
    height: 400px;
  }
`;

const Details = styled.div`
  // background-color:red;
  flex: 1;
  display: flex;
  gap: 18px;
  flex-direction: column;
  padding: 4px 10px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 60};
  text-decoration: line-through;
  text-decoration-color: ${({ theme }) => theme.text_secondary + 50};
`;

const Percent = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: green;
`;

const Ingridents = styled.div`
  font-size: 16px;
  font-weight: 500;
  diaplay: flex;
  flex-direction: column;
  gap: 24px;
`;
const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
const Item = styled.div`
  background: ${({ theme }) => theme.primary + 20};
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  padding: 4px 12px;
  display: flex;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 32px 0px;
  @media only screen and (max-width: 700px) {
    gap: 12px;
    padding: 12px 0px;
  }
`;

const FoodDetails = () => {
  return (
    <Container>
      <Wrapper>
        <ImagesWrapper>
          <Image src="https://media.istockphoto.com/id/1280147779/photo/chicken-curry-iftari.jpg?s=612x612&w=0&k=20&c=THJNS9HlSd41bMK07p8fltRYbt_ez8Tdu7YHEm2xtZs=" />
        </ImagesWrapper>
        <Details>
          <div>
            <Title>Chicken Curry</Title>
          </div>
          <Rating value={3.5} />
          <Price>
            ₹150<Span>₹200</Span> <Percent>25% off</Percent>
          </Price>
          <Desc>
            A flavorful Indian dish featuring tender chicken simmered in a rich,
            aromatic sauce bursting with vibrant spices like cumin, coriander,
            and turmeric.
          </Desc>
          <Ingridents>
              Ingridents
              <Items>
                  <Item>Chicken</Item>
                  <Item>Onions</Item>
                  <Item>Tomatoes</Item>
                  <Item>Ginger-Garlic Paste</Item>
                  <Item>Spices</Item>
                  <Item>Cooking Oil</Item>
                  <Item>Cilantro (optional)</Item>
              </Items>
            </Ingridents>
            <ButtonWrapper>
              <Button
                text="Add to Cart"
                full
                outlined
              />
              <Button text="Order Now" full />
              <Button
                leftIcon={
                    <FavoriteRounded sx={{ fontSize: "22px", color: "red" }} />
                }
                full
                outlined
              />
            </ButtonWrapper>
        </Details>
      </Wrapper>
    </Container>
  );
};

export default FoodDetails;
