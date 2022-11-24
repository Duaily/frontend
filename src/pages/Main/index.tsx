import React, { useEffect } from "react";
import * as S from "./styles";
import logo from "@assets/logo.svg";
import { MenuItemType } from "@types";
import { opacityVariants } from "@utils/variants";
import { dummy_house_data, dummy_review_data } from "@utils/dummy";
import { useNavigate } from "react-router-dom";
import HouseCard from "@components/HouseCard";
import ReviewCard from "@components/ReviewCard";
import Footer from "@components/Footer";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@apis/auth";
import { FaSpinner } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import { isLoginAtom } from "@atoms/atom";

interface MainProps {
  setClickedMenu: React.Dispatch<React.SetStateAction<MenuItemType>>;
}

const DUMMY_HOUSE_DATA = dummy_house_data.slice(0, 6);
const DUMMY_REVIEW_DATA = dummy_review_data.slice(0, 3);

function Main({ setClickedMenu }: MainProps) {
  const { data, isFetching } = useQuery(["user-info"], getUser);
  const setIsLogin = useSetRecoilState(isLoginAtom);
  const navigate = useNavigate();
  useEffect(() => {
    setClickedMenu("duaily intro");
    if (data) {
      setIsLogin(true);
    }
  }, [data, setClickedMenu, setIsLogin]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (isFetching && !data)
    return (
      <S.LoadingContainer>
        <FaSpinner size={36} className="spinner" />
        <br></br>
        <h1>잠시만 기다려주세요</h1>
      </S.LoadingContainer>
    );
  return (
    <S.Container variants={opacityVariants} initial="initial" animate="mount">
      <S.JumbotronSection />
      <S.JumbotronText>
        <p>
          듀얼리는 도시의 삶과 시골의 삶을 향수할 수 있는 듀얼라이프의 삶의
          방식을 돕는 플랫폼입니다.
        </p>
        <p>
          듀얼리는 빈집 중개를 통해 도심을 벗어난 사람들의 듀얼라이프 이상을
          실현시킴에서
        </p>
        <p>나아가 지역의 빈집 문제를 해결할 수 있습니다.</p>
        <p>
          당신의 듀얼라이프 꿈이 현실이 될 수 있도록 듀얼리가 함께 하겠습니다.
        </p>
        <div />
      </S.JumbotronText>
      <S.HouseSection>
        <S.HouseInfo>
          <S.HouseTitle>빈 집 매물</S.HouseTitle>
          <S.HouseLink onClick={() => navigate("/house")}>
            빈 집 더보기 &gt;
          </S.HouseLink>
        </S.HouseInfo>
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
      </S.HouseSection>
      <S.ReviewSection>
        <S.ReviewInfo>
          <S.ReviewTitle>듀얼 라이프 생생 후기</S.ReviewTitle>
          <S.ReviewLink onClick={() => navigate("/community")}>
            후기 더보기 &gt;
          </S.ReviewLink>
        </S.ReviewInfo>
        <S.ReviewCardContainer>
          {DUMMY_REVIEW_DATA.map((review) => (
            <ReviewCard
              key={review.id}
              id={review.id}
              imageUrl={review.imageUrl}
              title={review.title}
              previewText={review.previewText}
              user={review.user}
            />
          ))}
        </S.ReviewCardContainer>
        <S.BottomTextContainer>
          <img src={logo} alt="logo" />
          <S.BottomText>
            <div>듀얼라이프 실현,</div>
            <div>이제는 듀얼리가 해결해드릴게요.</div>
          </S.BottomText>
        </S.BottomTextContainer>
      </S.ReviewSection>
      <Footer />
    </S.Container>
  );
}

export default Main;
