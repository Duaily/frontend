import { CategoryType, MenuItemType } from "@types";
import { opacityVariants } from "@utils/variants";
import searchImg from "@assets/search.svg";
import pencilImg from "@assets/jam_pencil.svg";
import { dummy_house_data } from "@utils/dummy";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import HouseCard from "@components/HouseCard";
import Footer from "@components/Footer";
import { useNavigate } from "react-router-dom";

interface HouseProps {
  setClickedMenu: React.Dispatch<React.SetStateAction<MenuItemType>>;
}

const DUMMY_HOUSE_DATA = dummy_house_data;

function House({ setClickedMenu }: HouseProps) {
  const navigate = useNavigate();
  const circleRef = useRef<HTMLDivElement>(null);
  const allRef = useRef<HTMLDivElement>(null);
  const [clickedCat, setClickedCat] = useState<CategoryType>("all");
  const onCatClick = (
    e: React.MouseEvent<HTMLDivElement>,
    cat: CategoryType
  ) => {
    circleRef.current!.style.left =
      e.currentTarget.offsetLeft + (e.currentTarget.offsetWidth - 30) + "px";
    circleRef.current!.style.top = e.currentTarget.offsetTop + "10px ";
    setClickedCat(cat);
  };
  useEffect(() => {
    setClickedMenu("trade");
  }, [setClickedMenu]);
  useEffect(() => {
    window.scrollTo(0, 0);
    circleRef.current!.style.left =
      allRef.current!.offsetLeft + (allRef.current!.offsetWidth - 30) + "px";
    circleRef.current!.style.top = allRef.current!.offsetTop + "10px ";
  }, []);
  return (
    <Container variants={opacityVariants} initial="initial" animate="mount">
      <JumbotronSection>
        <h1>빈 집 거래</h1>
        <p>다양한 집을 거래할 수 있는 공간입니다.</p>
      </JumbotronSection>
      <MenuContainer>
        <ButtonContainer>
          <Circle ref={circleRef} />
          <CategoryButton ref={allRef} onClick={(e) => onCatClick(e, "all")}>
            전체
          </CategoryButton>
          <CategoryButton onClick={(e) => onCatClick(e, "namhae")}>
            남해
          </CategoryButton>
          <CategoryButton onClick={(e) => onCatClick(e, "sokcho")}>
            속초
          </CategoryButton>
          <CategoryButton onClick={(e) => onCatClick(e, "jeju")}>
            제주도
          </CategoryButton>
        </ButtonContainer>
      </MenuContainer>
      <div style={{ width: "100%", padding: "0 125px" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "80px",
          }}
        >
          <TotalPostBox>총 포스트 수</TotalPostBox>
          <InputContainer>
            <Input type="text" />
            <SearchImg src={searchImg} alt="searchImg" />
          </InputContainer>
        </div>
        <div>
          <PostButton onClick={() => navigate("/house/post")}>
            <img style={{ marginRight: "13px" }} src={pencilImg} alt="pencil" />
            글쓰기
          </PostButton>
        </div>

        <HouseCardContainer>
          {DUMMY_HOUSE_DATA.map((house) => (
            <HouseCard
              key={house.id}
              houseId={house.id}
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
const MenuContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
  padding: 0 125px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;
const Circle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.green_color};
  transition: 0.5s;
`;
const CategoryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 145px;
  height: 70px;
  font-size: 28px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  height: 50px;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  font-size: 24px;
  font-weight: 700;
`;
const SearchImg = styled.img`
  width: 27px;
  height: 27px;
  align-self: flex-start;
  transform: translate(-48px, 10px);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const PostButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 27px;
  align-items: center;
  color: ${(props) => props.theme.green_color};
  font-size: 26px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const TotalPostBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 32px;
  font-weight: 700;
`;

const HouseCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 70px;
  margin-top: 55px;
`;
