import { MenuItemType } from "@types";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import searchImg from "@assets/search.svg";
import { dummy_review_data } from "@utils/dummy";
import ReviewCard from "@components/ReviewCard";

interface CommunityProps {
  setClickedMenu: React.Dispatch<React.SetStateAction<MenuItemType>>;
}

const DUMMY_REVIEW_DATA = dummy_review_data;

function Commnunity({ setClickedMenu }: CommunityProps) {
  useEffect(() => {
    setClickedMenu("community");
  }, [setClickedMenu]);
  return (
    <Container>
      <JumbotronSection>
        <h1>듀얼라이프 생생 후기</h1>
        <p style={{ textAlign: "center" }}>
          듀얼리 속에서 발견할 수 있는 듀얼라이프의 생생한 <br />
          후기를 들을 수 있는 공간입니다.
        </p>
      </JumbotronSection>
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
      <ReviewCardContainer>
        {DUMMY_REVIEW_DATA.map((review) => (
          <ReviewCard
            key={review.id}
            title={review.title}
            imageUrl={review.imageUrl}
            previewText={review.previewText}
            user={review.user}
          />
        ))}
      </ReviewCardContainer>
    </Container>
  );
}

export default Commnunity;

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
  font-size: 32px;
  font-weight: 700;
`;

const ReviewCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 70px;
  margin-top: 55px;
`;
