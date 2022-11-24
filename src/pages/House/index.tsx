import * as S from "./styles";
import { CategoryType, MenuItemType } from "@types";
import { opacityVariants } from "@utils/variants";
import searchImg from "@assets/search.svg";
import pencilImg from "@assets/jam_pencil.svg";
import { dummy_house_data } from "@utils/dummy";
import React, { useEffect, useRef, useState } from "react";
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
    <S.Container variants={opacityVariants} initial="initial" animate="mount">
      <S.JumbotronSection>
        <h1>빈 집 거래</h1>
        <p>다양한 집을 거래할 수 있는 공간입니다.</p>
      </S.JumbotronSection>
      <S.MenuContainer>
        <S.ButtonContainer>
          <S.Circle ref={circleRef} />
          <S.CategoryButton ref={allRef} onClick={(e) => onCatClick(e, "all")}>
            전체
          </S.CategoryButton>
          <S.CategoryButton onClick={(e) => onCatClick(e, "namhae")}>
            남해
          </S.CategoryButton>
          <S.CategoryButton onClick={(e) => onCatClick(e, "sokcho")}>
            속초
          </S.CategoryButton>
          <S.CategoryButton onClick={(e) => onCatClick(e, "jeju")}>
            제주도
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
          <S.PostButton onClick={() => navigate("/house/post")}>
            <img style={{ marginRight: "13px" }} src={pencilImg} alt="pencil" />
            글쓰기
          </S.PostButton>
        </div>

        <S.HouseCardContainer>
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
        </S.HouseCardContainer>
      </S.ContentConatiner>
      <div style={{ marginBottom: "110px" }} />
      <Footer />
    </S.Container>
  );
}

export default House;
