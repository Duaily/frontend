import Footer from "@components/Footer";
import { opacityVariants } from "@utils/variants";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function Process() {
  return (
    <Container variants={opacityVariants} initial="initial" animate="mount">
      <JumbotronSection>
        <h1>중개 프로세스</h1>
        <p>듀얼리가 제안하는 중개 프로세스를 소개합니다.</p>
      </JumbotronSection>
      {/** 서비스 피해 보상 */}
      <Content>
        <Head1>서비스 피해 보상</Head1>
        <Head3>
          듀얼리는 부동산 중개행위를 하지 않으며 등록 및 열람으로 문제되는
          당사간의 거래에 관련한 모든 법적 책임을 지지않습니다.
        </Head3>
        <Box>
          <Head3 style={{ color: "#045345" }}>(1) 손해배상</Head3>
          <div style={{ marginLeft: "35px", marginBottom: "40px" }}>
            <Text>
              ① 듀얼리는 서비스 이용과 관련하여 회원에게 발생한 어떠한 손해에
              대하여도 배상할 책임을 지지 않습니다.
            </Text>
            <Text style={{ lineHeight: "25px" }}>
              ② 회원이 서비스를 이용함에 있어 행한 불법행위로 인하여 듀얼리가
              당해 회원 이외의 제3자로부터 손해배상청구, 소송을 비롯한 각종의
              이의제기를 받는 경우 당해 회원은 듀얼리의 면책을 위하여 노력하여야
              하며, 만일 듀얼리가 면책되지 못한 경우는 당해 회원은 그로 인하여
              듀얼리에 발생한 모든 손해를 배상하여야 합니다.
            </Text>
          </div>
          <Head3 style={{ color: "#045345" }}>(2) 면책사항</Head3>
          <div style={{ marginLeft: "35px" }}>
            <Text>
              ① 듀얼리는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를
              제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
            </Text>
            <Text>
              ② 듀얼리는 회원의 귀책사유로 인한 서비스의 이용 장애에 대하여
              책임을 지지 않습니다.
            </Text>
            <Text style={{ lineHeight: "25px" }}>
              ③ 듀얼리는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에
              대하여 책임을 지지 않으며, 그 밖에 서비스를 통하여 얻은 자료로
              인한 손해 등에 대하여도 책임을 지지 않습니다.
            </Text>
            <Text>
              ④ 듀얼리는 회원이 게재한 정보, 자료, 사실의 신뢰도, 정확성 등
              내용에 대하여는 책임을 지지 않습니다.
            </Text>
          </div>
        </Box>
        {/** 매매 계약 체결 전*/}
        <Head1>매매 계약 체결 전</Head1>
        <Head2>1. 등기부등본 내용확인</Head2>
        <Head3 style={{ marginLeft: "35px" }}>
          (1) 등기부등본 갑구 내용 확인
        </Head3>
        <Text style={{ marginLeft: "70px", marginBottom: "40px" }}>
          갑구에는 소유권 그리고 소유권과 관련된 권리 관계에 대한 사항이
          기록되어 있습니다. 따라서, 소유권과 관련하여 등기를 한 목적뿐만 아니라
          등기원인이 무엇인지 등에 대한 확인이 가능합니다. 마지막 부분을 통하여
          <Strong> 현재 부동산 소유자를 확인</Strong>할 수 있을 뿐만 아니라,{" "}
          <Strong>
            소유권 외 소유권과 관련된 권리관계인 가등기, 가처분, 가압류, 경매
            등과 같은 소유권에 영향을 미칠 수 있는 내용 여부를 확인
          </Strong>
          해야 합니다.
        </Text>
        <Head3 style={{ marginLeft: "35px" }}>
          (2) 등기부등본 을구 내용 확인
        </Head3>
        <Text style={{ marginLeft: "70px", marginBottom: "40px" }}>
          을구에는 부동산등기부등본의 마지막이면서 가장 중요한 사항들이 담겨
          있습니다. 소유권을 제외한 부동산에 대한 ‘권리 전부’를 확인할 수 있으며
          , 부동산의 담보, 채무상황 등을 파악할 수 있습니다. 해당 부분에서는
          <Strong>
            {" "}
            (근)저당권, 전세권, 지역권, 지상권등의 권리가 등기되어 있는지 여부를
            확인
          </Strong>
          해야 하며, <Strong>등기 이전 전에 소멸이 가능한지 확인</Strong>을
          해야합니다. 또한 이는{" "}
          <Strong>매수자 측으로 명의가 넘어오기 전까지 변동사항을 확인</Strong>
          해야 합니다.
        </Text>
        {/** 매매 계약 체결 시*/}
        <Head1>매매 계약 체결 시</Head1>
        <Head3 style={{ marginLeft: "35px" }}>(1) 계약 체결 과정</Head3>
        <Text style={{ marginLeft: "70px" }}>
          1. 직접 대면으로 등기부등본 상의 소유자와 계약체결 당사자가 동일한지
          신분증을 확인합니다.
        </Text>
        <Text style={{ marginLeft: "70px" }}>
          2. 계약서 작성당일에도 등기부등본을 발급받아서 ‘부동산의 표시’를
          확인합니다.
          <Text style={{ fontSize: "16px", marginLeft: "20px" }}>
            ✓ ‘부동산의 표시’ 부분은 등기부 등본을 참고하여 작성하며, 계약내용은
            쌍방 합의된 매매대금, 계약금, 중도금, 잔금 금액과 날짜를 작성해야
            합니다.
          </Text>
        </Text>
        <Text style={{ marginLeft: "70px", marginBottom: "40px" }}>
          3. 매수자는 매도자에게 계약금 입금을 한 후 게약서를 작성 한 후 1부씩
          나눠 가집니다.
        </Text>
        <Head3 style={{ marginLeft: "35px" }}>(2) 필요서류</Head3>
        <Text style={{ marginLeft: "70px", marginBottom: "40px" }}>
          부동산 매매 계약서 2부, 부동산거래계약 신고서 1부, 등기부등본 1부,
          도장
        </Text>
        {/** 매매 계약 체결 후*/}
        <Head1>매매 계약 체결 후</Head1>
        <Head2>1. 부동산거래계약신고필증 발급</Head2>
        <Head3 style={{ marginLeft: "35px" }}>(1) 신고 방법</Head3>
        <Text style={{ marginLeft: "70px", marginBottom: "40px" }}>
          법무사에 따라 소유권 등기 이전 시 함께 대행하기도하지만 매수자가 직접
          하는 것도 가능합니다.
          <Box>
            <Text
              style={{
                color: "#E05E2C",
                lineHeight: "60px",
                fontWeight: "bold",
              }}
            >
              매수자가 직접 할 경우
            </Text>
            <Text
              style={{
                fontSize: "16px",
                marginLeft: "30px",
                lineHeight: "45px",
              }}
            >
              국토교통부 부동산 거래관리 시스템 접속, 매수인 공인인증서로 작성
              가능합니다.
            </Text>
            <Text
              style={{
                fontSize: "16px",
                marginLeft: "30px",
                lineHeight: "45px",
              }}
            >
              물건 관할지 구청에서 직접 신청 가능합니다.
            </Text>
          </Box>
        </Text>
        <Head3 style={{ marginLeft: "35px" }}>(2) 신고 기간</Head3>
        <Text style={{ marginLeft: "70px", marginBottom: "40px" }}>
          거래계약일 30일 이내여야 합니다. 만약 신고 기간을 넘기게 된다면
          과태료가 부과됩니다.
          <Text
            style={{
              fontSize: "16px",
              marginLeft: "20px",
              marginBottom: "40px",
            }}
          >
            ✓ 잔금 지급 전 등기부등본 다시 재발급하여 중요한 권리 변동이 있는지
            반드시 확인하여야 합니다.
          </Text>
        </Text>
        <Head2>2. 소유권 이전 등기</Head2>
        <Head3 style={{ marginLeft: "35px" }}>(1) 등기 신청 기간</Head3>
        <Text style={{ marginLeft: "70px" }}>
          잔금일로부터 60일 이내 취득세를 신고하고 소유권 이전등기 신청을 마쳐야
          합니다.
          <Text
            style={{
              fontSize: "16px",
              marginLeft: "20px",
              marginBottom: "40px",
            }}
          >
            ✓ 60일 이내 취득세 신고를 하지 않을 경우 취득세액의 20%에 해당하는
            가산세를 납부해야 하고, 기간 내 이전 등기를 하지 않으면 부동산등기
            특별조치법상 부동산등기해태 과태료를 납부해야 합니다.{" "}
          </Text>
        </Text>
        <Head3 style={{ marginLeft: "35px" }}>(2) 필요 서류</Head3>
        <Text style={{ marginLeft: "70px", marginBottom: "40px" }}>
          <li>
            매도인 : 부동산 매도용 인감증명서, 인감도장, 등기필증 또는
            등기필정보(등기권리증), 주민등록초본
          </li>
          <li>매수인 : 주민등록초본, 가족관계증명서, 주민등록증, 도장</li>
        </Text>
        <Head3 style={{ marginLeft: "35px" }}>(3) 신고 방법</Head3>
        <Text style={{ marginLeft: "70px" }}>
          법무사에게 위임이 가능합니다.
        </Text>
        <Text style={{ marginLeft: "70px" }}>
          부동산 관할 등기소에 방문해 직접 등기도 가능합니다.
        </Text>
        <Box style={{ marginLeft: "70px", marginBottom: "40px" }}>
          <Text
            style={{
              color: "#E05E2C",
              lineHeight: "60px",
              fontWeight: "bold",
            }}
          >
            직접 등기가 불가능한 경우
          </Text>
          <Text
            style={{
              fontSize: "16px",
              marginLeft: "30px",
              lineHeight: "45px",
            }}
          >
            <li>
              매수인이 은행에서 잔금 대출을 받아, 매수와 동시에 근저당권이
              설정되어 있는 경우 불가능합니다.{" "}
            </li>
            <li>매도인이 등기권리증을 분실한 경우 불가능합니다.</li>
            <li>
              그 외 권리관계나 세금 등이 복잡하여 일반인이 처리하기 어려운 경우
              불가능합니다.
            </li>
          </Text>
        </Box>
        <Head3 style={{ marginLeft: "35px" }}>
          (4) 소유권 등기이전 처리가 어려운 경우
        </Head3>
        <Text style={{ marginLeft: "70px" }}>
          매도인에게 근저당권부 채무가 있는 경우에 불가능합니다.매수인으로부터
          잔금을 받고 채무를 변제해야 완료 가능합니다.
        </Text>
        <Text style={{ marginLeft: "70px" }}>
          등기권리증 분실할 경우에 불가능합니다.하지만, 법무소 사무소에 연락하면
          확인서면을 준비해 주기 때문 없어도 진행이 가능합니다.{" "}
        </Text>
      </Content>
      <Footer />
    </Container>
  );
}

export default Process;

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
  width: 100%;
  height: 330px;
  background-color: #f3f3f3;
  & > h1 {
    font-size: 32px;
    font-weight: 700;
    color: ${(props) => props.theme.green_color};
    text-decoration: underline;
    text-underline-position: under;
  }
  & > p {
    font-size: 24px;
    font-weight: 350;
  }
`;
const Content = styled.div`
  width: 100%;
  padding: 80px 120px;
`;
const Box = styled.div`
  width: 100%;
  margin: 10px 0 40px 0;
  padding: 45px 40px;
  background-color: #fff8f4;
  border-radius: 20px;
`;
const Head1 = styled.h1`
  color: ${(props) => props.theme.green_color};
  font-size: 28px;
  font-weight: bold;
  line-height: 60px;
`;
const Head2 = styled.h2`
  font-size: 22px;
  font-weight: bold;
  line-height: 40px;
`;
const Head3 = styled.h3`
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
`;
const Text = styled.div`
  font-size: 18px;
  line-height: 40px;
`;
const Strong = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #e05e2c;
  line-height: 40px;
`;
