import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import bannerImg from "@assets/reviewBanner.svg";
import review1Img from "@assets/review1.svg";
import review2Img from "@assets/review2.svg";
import { opacityVariants } from "@utils/variants";
import Comment from "@components/Comment";
import dayjs from "dayjs";
import Footer from "@components/Footer";
import { dummy_comment_data } from "@utils/dummy";

const dummy_review_data = {
  title: "도시에서 즐기지 못한 일상, 듀얼리와 함께 시작했어요!",
  content1: `뜨거운 여름이 오기 전 5월, 저는 남해 듀얼리하우스 2호점에서 한 달 동안 8명의 입주자와 함께 듀얼라이프를 체험했습니다.

처음 듀얼라이프를 알게 된 계기는 바로 ‘지친 일상 속 힐링’이 필요했기 때문이었어요.
하루하루를 바쁘게 살아가며 나 자신에게 집중하고 온전히 시간을 투자한 적이 거의 없다고 느꼈거든요.
아마 직장인 분들은 특히 더 공감하실 것 같아요. 다들 직장과 집만을 반복하기 때문이죠.

특히 코로나19로 인해 변화하고 있는 삶도 큰 역할을 했어요.
재택 근무를 비롯한 온라인 환경을 자주 접하며 더욱 일상 속 힐링을 찾게 되었죠.
재택 근무를 하며 특히 배달 음식을 너~무 많이 먹었어요.
그래서 듀얼라이프를 통해 건강한 음식을 먹고 싶다는 생각도 했어요.

듀얼라이프를 하려는 저의 목적을 정리하자면
1. 바쁜 도시의 삶이 아닌 진정한 힐링
2. 건강하고 활기찬 삶
이렇게였던 것 같아요. 사실 좀 단순하죠.
`,
  content2: `건강한 삶을 살기 위해 우선 먹는 것부터 바꿔봤어요. 사실 자연스레 바뀌더라구요.
왜냐하면 제가 살았던 듀얼리하우스 2호점은 바다뷰로 유명하지만 사실 마당과 밭도 있어서 직접 채소를 키울 수 있거든요!
그래서 배달 음식 혹은 음식점에 가지 않고 오로지 제가 직접 키운 채소로 요리해봤어요.
처음엔 힘들기는 했어요, 왜냐하면 전 비건도 아니고 고기를 좋아했거든요.
하지만 듀얼리하우스에 살면서 좋은 환경 속에서 건강해지는 저의 모습을 기대하며 실천했죠 ㅎㅎ
그랬더니 듀얼라이프 이전의 제 삶과는 비교할 수 없을 정도로 몸이 건강해졌어요!
`,
  content3: `매일 건강한 삶을 살고 좋은 공기를 마시며 살아보니, 정말 몸이 건강해졌어요.
도시에서만 살 때는 잔병이 많았는데 듀얼리하우스에서는 전혀 그렇지 않았답니다!
저는 그래서 ‘듀얼라이프’를 통해 추후에는 정착을 하고 싶다는 마음도 생겼어요.
일상 속의 제대로 된 힐링과 건강을 저에게 선사해준 듀얼라이프!

듀얼리를 통해 너무 알차고 재밌게 즐길 수 있었어요~
혹여나 저처럼 도시 생활에 지쳐 힐링이 필요하시거나 듀얼라이프를 시작하려는 분들께 많은 도움이 되었으면 좋겠네요.
다들 듀얼리를 통해 듀얼라이프를 알아 가시고 실현해보세요!
`,
  author: "듀얼리 최고",
  createdAt: new Date("2022-09-13"),
};

const DUMMY_COMMENT_DATA = dummy_comment_data;

function ReviewDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container variants={opacityVariants} initial="initial" animate="mount">
      <TitleSection>
        <h1>{dummy_review_data.title}</h1>
      </TitleSection>
      <div style={{ width: "100%", padding: "0 125px" }}>
        <Text>{dummy_review_data.content1}</Text>
        <img src={review1Img} alt="review1" />
        <Text
          style={{
            textAlign: "center",
            color: "#045345",
            padding: "50px 0 0 0",
            fontSize: "22px",
            fontWeight: "700",
          }}
        >
          "건강 찾아가기"
        </Text>
        <Text>{dummy_review_data.content2}</Text>
        <img src={review2Img} alt="review2" />
        <Text>{dummy_review_data.content3}</Text>
        <Info>
          <span
            style={{ marginRight: "40px" }}
          >{`by. ${dummy_review_data.author}`}</span>
          <span>{dayjs(dummy_review_data.createdAt).format("YYYY.MM.DD")}</span>
        </Info>
        <Line height="8px" color="black" />
        <CommentContainer>
          <h1>총 댓글 수</h1>
          <Line height="1px" color="black" />
          <TextAreaBox>
            <TextArea></TextArea>
            <Button>등록</Button>
          </TextAreaBox>
          <Line
            height="1px"
            color="#9A9A9A
"
          />
          {DUMMY_COMMENT_DATA.map((comment) => (
            <Comment
              key={comment.id}
              author={comment.author}
              createdAt={comment.createdAt}
              content={comment.content}
            />
          ))}
        </CommentContainer>
      </div>
      <div style={{ marginBottom: "110px" }} />
      <Footer />
    </Container>
  );
}

export default ReviewDetail;

const Container = styled(motion.div)`
  width: 100%;
  max-width: 1440px;
  min-height: 100%;
  margin: 0 auto;
`;
const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 90px;
  width: 100%;
  height: 500px;
  background-image: url(${bannerImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  & > h1 {
    font-size: 50px;
    font-weight: 700;
    color: white;
  }
`;
const Text = styled.p`
  padding: 50px 0;
  font-size: 20px;
  line-height: 40px;
  word-break: break-all;
  white-space: pre-wrap;
`;
const Info = styled(Text)`
  text-align: end;
`;
const Line = styled.div<{ height: string; color: string }>`
  width: 100%;
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  margin: 20px 0;
`;
const CommentContainer = styled.div`
  margin-top: 50px;
  & > h1 {
    font-size: 32px;
    font-weight: 700;
  }
`;
const TextAreaBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  background-color: #f5f5f5;
  padding: 15px;
  border: 0;
  outline: none;
  resize: none;
  color: #717171;
  white-space: pre-wrap;
  &:focus {
    outline: none;
  }
`;
const TextArea = styled.textarea`
  flex-grow: 1;
  width: 100%;
  border: 0;
  padding: 30px;
  outline: none;
  resize: none;
  color: #717171;
  white-space: pre-wrap;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  align-self: flex-end;
  width: 135px;
  height: 50px;
  margin-top: 15px;
  background: black;
  border: none;
  outline: none;
  border-radius: 25px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
