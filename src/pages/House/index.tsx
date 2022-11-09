import { MenuItemType } from "@types";
import { opacityVariants } from "@utils/variants";
import searchImg from "@assets/search.svg";
import { dummy_house_data } from "@utils/dummy";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import HouseCard from "@components/HouseCard";
import Footer from "@components/Footer";

interface HouseProps {
  setClickedMenu: React.Dispatch<React.SetStateAction<MenuItemType>>;
}

const DUMMY_HOUSE_DATA = dummy_house_data;

function House({ setClickedMenu }: HouseProps) {
  useEffect(() => {
    setClickedMenu("trade");
  }, [setClickedMenu]);
  return (
    <Container variants={opacityVariants} initial="initial" animate="mount">
      <JumbotronSection>
        <h1>빈 집 거래</h1>
        <p>다양한 집을 거래할 수 있는 공간입니다.</p>
      </JumbotronSection>
      <div style={{ width: "100%", padding: "0 125px" }}>
        <ButtonContainer>
          <CategoryButton isClicked={true}>전체</CategoryButton>
          <CategoryButton isClicked={false}>남해</CategoryButton>
          <CategoryButton isClicked={false}>속초</CategoryButton>
          <CategoryButton isClicked={false}>제주도</CategoryButton>
        </ButtonContainer>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginBottom: "80px",
          }}
        >
          <InputContainer>
            <Input type="text" />
            <SearchImg src={searchImg} alt="searchImg" />
          </InputContainer>
          <div>
            <PostHouseButton>글쓰기</PostHouseButton>
          </div>
        </div>
        <TotalPostBox>총 포스트 수</TotalPostBox>
        <HouseCardContainer>
          {DUMMY_HOUSE_DATA.map((house) => (
            <HouseCard
              key={house.id}
              houseImage={house.imageUrl}
              title={house.title}
              location={house.location}
              min_price={house.minPrice}
              max_price={house.maxPrice}
              upload_date={house.upload_date}
              author={house.author}
            />
          ))}
        </HouseCardContainer>
      </div>
      <div style={{ marginBottom: "110px" }} />
      <Footer />
    </Container>
  );
}

export default House;

const Container = styled(motion.div)`
  width: 100%;
  max-width: 1440px;
  min-height: 100%;
  margin: 0 auto;
`;
const JumbotronSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 90px;
  width: 100%;
  height: 350px;
  background-color: #f3f3f3;
  & > h1 {
    font-size: 40px;
    font-weight: 900;
    color: ${(props) => props.theme.green_color};
    text-decoration: underline;
    text-underline-position: under;
  }
  & > p {
    font-size: 28px;
    font-weight: 350;
    margin-bottom: 60px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  margin: 0 auto;
  margin-bottom: 100px;
`;
const CategoryButton = styled.div<{ isClicked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 145px;
  height: 70px;
  border: 5px solid ${(props) => props.theme.green_color};
  border-radius: 50px;
  color: ${(props) => (props.isClicked ? "white" : props.theme.green_color)};
  background-color: ${(props) =>
    props.isClicked ? props.theme.green_color : "white"};
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  height: 70px;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  outline: none;
  border: none;
  border-bottom: 4px solid black;
  font-size: 30px;
  font-weight: 700;
`;
const SearchImg = styled.img`
  align-self: flex-start;
  transform: translateX(-48px);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const PostHouseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 155px;
  height: 60px;
  color: white;
  border-radius: 50px;
  background-color: ${(props) => props.theme.green_color};
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const TotalPostBox = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 40px;
  border-bottom: 8px solid black;
  font-size: 32px;
  font-weight: 700;
`;

const HouseCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 70px;
  margin-top: 55px;
`;
