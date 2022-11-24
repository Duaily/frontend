import { opacityVariants } from "@utils/variants";
import bookmarkImg from "@assets/bookmark.svg";
import detailImg1 from "@assets/detail1.svg";
import detailImg2 from "@assets/detail2.svg";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";
import Footer from "@components/Footer";

const DUMMY_TITLE = `바다 앞에 위치한 포근한 집,
듀얼리 하우스 2호점
`;
function HouseDetail() {
  const id = useParams().id;
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <S.Container variants={opacityVariants} initial="initial" animate="mount">
      <S.JumbotronSection>
        <S.Thumbnail />
        <S.ThumbnailIntro>
          <S.IntroStatus>
            <S.Status>입주 가능</S.Status>
            <img src={bookmarkImg} alt="bookmark" />
          </S.IntroStatus>
          <S.InfoTitle>{DUMMY_TITLE}</S.InfoTitle>
          <S.InfoMeta>
            <p style={{ lineHeight: "35px" }}>
              <b style={{ fontWeight: "600" }}>업로드 일자</b> : 2022-02-25
            </p>
            <p style={{ lineHeight: "35px" }}>
              <b style={{ fontWeight: "600" }}>작성자</b> : 호니호니
            </p>
          </S.InfoMeta>
        </S.ThumbnailIntro>
      </S.JumbotronSection>
      <S.Content>
        <S.HouseInfo>
          <S.BaseInfo>
            <h1>기본 정보</h1>
            <p>
              <b style={{ fontSize: "18px", fontWeight: "700" }}>위치 </b>
              전남 완도군 완도읍 청해진남로39번길 19-1
            </p>
            <p>
              <b style={{ fontSize: "18px", fontWeight: "700" }}>면적 </b>
              76.83m2
            </p>
            <p>
              <b style={{ fontSize: "18px", fontWeight: "700" }}>용도 </b>
              주택
            </p>
            <p>
              <b style={{ fontSize: "18px", fontWeight: "700" }}>준공연도 </b>
              1997년
            </p>
          </S.BaseInfo>
          <S.EtcInfo>
            <S.BaseInfo>
              <h1>임대정보</h1>
              <p>
                <b style={{ fontSize: "18px", fontWeight: "700" }}>가격대 </b>
                매매 9500만원
              </p>
            </S.BaseInfo>
            <S.BaseInfo>
              <h1>기타</h1>
              <p>
                <b style={{ fontSize: "18px", fontWeight: "700" }}>전화번호 </b>
                010 - 8888 - 0913
              </p>
            </S.BaseInfo>
          </S.EtcInfo>
        </S.HouseInfo>
        <S.ContentData>
          <S.MapInfo>
            <h1>지도</h1>
            <S.MapImg />
          </S.MapInfo>
          <S.Head1>바다 앞에 위치한 포근한 집, 듀얼리 하우스 2호점</S.Head1>
          <S.Text>
            {`관광객들로 북적이는 군내길에서 벗어나 청해진남로를 따라 걷다 보면 듀얼리하우스 2호점이 있습니다.
1호점에서 도보로 2분 거리에 있는 2호점은 집주인의 어린 시절 추억이 담긴 단독주택으로 90년대 모습을 그대로 간직하고 있습니다.
앞으로는 민박집이 즐비하고, 뒤로는 텃밭과 다랭이논, 바다가 펼쳐지는 듀얼리하우스 2호점입니다.
도시의 번잡한 일상은 잠시 잊고 푸른 바다를 벗삼아 여행같은 일상을 즐겨 보세요.`}
          </S.Text>
          <S.ContentImage src={detailImg1} />
          <S.Text>
            {`듀얼리하우스 뒷편에 있는 완도바다를 보실까요?
완도바다는 탁 트인 풍경과 맑은 공기를 선사해주어 더욱 건강한 삶을 누릴 수 있도록 도와줍니다.
복작한 도시나 번화가보다는, 듀얼리하우스 2호점 뒤에 있는 완도바다를 배경 삼아
건강하고 활기찬 듀얼라이프를 시작해보세요!`}
          </S.Text>
          <S.ContentImage src={detailImg2} />
          <S.Head1>향긋한 바다냄새와 함께하는 일상</S.Head1>
          <S.Text>
            {`온전하고 완전한 듀얼라이프를 위해서는 ‘건강'과 ‘여유'를 가져야 합니다.
특히 바다가 주는 건강한 기운과 분위기를 만끽하고, 또 육지에서만 볼 수 있는 환경과 함께 할 수 있는 듀얼리하우스 2호점
일석이조의 효과를 톡톡히 누리며 여러분의 듀얼라이프를 그려나가 보세요.`}
          </S.Text>
          <S.Process>
            <h1>이 집이 궁금하다면?</h1>
            <button onClick={() => navigate("/process")}>
              중개 프로세스 확인하러 가기
            </button>
          </S.Process>
        </S.ContentData>
      </S.Content>
      <Footer />
    </S.Container>
  );
}

export default HouseDetail;
