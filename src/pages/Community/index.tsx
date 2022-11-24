import * as S from "./styles";
import { CommnunityCatType, MenuItemType } from "@types";
import React, { useEffect, useRef, useState } from "react";
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
    <S.Container variants={opacityVariants} initial="initial" animate="mount">
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
      <S.MenuContainer>
        <S.ButtonContainer>
          <S.Circle ref={circleRef} />
          <S.CategoryButton
            ref={reviewRef}
            onClick={(e) => onCatClick(e, "review")}
          >
            후기게시판
          </S.CategoryButton>
          <S.CategoryButton onClick={(e) => onCatClick(e, "free")}>
            자유게시판
          </S.CategoryButton>
          <S.CategoryButton onClick={(e) => onCatClick(e, "marketing")}>
            홍보게시판
          </S.CategoryButton>
        </S.ButtonContainer>
      </S.MenuContainer>
      <S.ContentConatiner>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "80px",
          }}
        >
          <S.TotalPostBox>총 포스트 수</S.TotalPostBox>
          <S.InputContainer>
            <S.Input type="text" />
            <S.SearchImg src={searchImg} alt="searchImg" />
          </S.InputContainer>
        </div>
        <div>
          <S.PostButton>
            <img style={{ marginRight: "13px" }} src={pencilImg} alt="pencil" />
            글쓰기
          </S.PostButton>
        </div>
        <S.ReviewCardContainer>
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
        </S.ReviewCardContainer>
      </S.ContentConatiner>
      <div style={{ marginBottom: "110px" }} />
      <Footer />
    </S.Container>
  );
}

export default Commnunity;
