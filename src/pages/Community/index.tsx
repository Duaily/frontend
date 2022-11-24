import { CommnunityCatType, MenuItemType } from "@types";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import searchImg from "@assets/search.svg";
import pencilImg from "@assets/jam_pencil.svg";
import { dummy_review_data } from "@utils/dummy";
import ReviewCard from "@components/ReviewCard";
import { opacityVariants } from "@utils/variants";
import Footer from "@components/Footer";
import Banner from "@components/Banner";

interface CommunityProps {
  setClickedMenu: React.Dispatch<React.SetStateAction<MenuItemType>>;
}

const DUMMY_REVIEW_DATA = dummy_review_data;

function Commnunity({ setClickedMenu }: CommunityProps) {
  const circleRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const [clickedCat, setClickedCat] = useState<CommnunityCatType>("review");
  const onCatClick = (
    e: React.MouseEvent<HTMLDivElement>,
    cat: CommnunityCatType
  ) => {
    circleRef.current!.style.left =
      e.currentTarget.offsetLeft + (e.currentTarget.offsetWidth - 10) + "px";
    circleRef.current!.style.top = e.currentTarget.offsetTop + "10px ";
    setClickedCat(cat);
  };
  useEffect(() => {
    setClickedMenu("community");
  }, [setClickedMenu]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    circleRef.current!.style.left =
      reviewRef.current!.offsetLeft +
      (reviewRef.current!.offsetWidth - 10) +
      "px";
    circleRef.current!.style.top = reviewRef.current!.offsetTop + "10px ";
  }, []);
  return (
    <Container variants={opacityVariants} initial="initial" animate="mount">
      {clickedCat === "free" ? (
        <Banner
          title="자유게시판"
          substring1="다양한 고민들을 해결할 수 있는 공간입니다. "
        />
      ) : clickedCat === "review" ? (
        <Banner
          title="듀얼라이프 생생 후기"
          substring1="듀얼리 속에서 발견할 수 있는 듀얼라이프의 생생한"
          substring2="후기를 들을 수 있는 공간입니다."
        />
      ) : (
        <Banner
          title="홍보게시판"
          substring1="나만의 듀얼 라이프와 다양한 듀얼 라이프를"
          substring2="탐색할 수 있는 공간입니다."
        />
      )}
      <MenuContainer>
        <ButtonContainer>
          <Circle ref={circleRef} />
          <CategoryButton
            ref={reviewRef}
            onClick={(e) => onCatClick(e, "review")}
          >
            후기게시판
          </CategoryButton>
          <CategoryButton onClick={(e) => onCatClick(e, "free")}>
            자유게시판
          </CategoryButton>
          <CategoryButton onClick={(e) => onCatClick(e, "marketing")}>
            홍보게시판
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
          <PostButton>
            <img style={{ marginRight: "13px" }} src={pencilImg} alt="pencil" />
            글쓰기
          </PostButton>
        </div>
        <ReviewCardContainer>
          {DUMMY_REVIEW_DATA.map((review) => (
            <ReviewCard
              key={review.id}
              id={review.id}
              title={review.title}
              imageUrl={review.imageUrl}
              previewText={review.previewText}
              user={review.user}
            />
          ))}
        </ReviewCardContainer>
      </div>
      <div style={{ marginBottom: "110px" }} />
      <Footer />
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

const ReviewCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  column-gap: 70px;
  row-gap: 70px;
  margin-top: 55px;
`;
