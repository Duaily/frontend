import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid #9a9a9a;
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  & > h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 40px;
    margin-right: 20px;
    @media screen and (max-width: 500px) {
      font-size: 18px;
    }
  }
  & > p {
    font-size: 14px;
    font-weight: 700;
    line-height: 40px;
    color: #9a9a9a;
    @media screen and (max-width: 500px) {
      font-size: 10px;
      line-height: 20px;
    }
  }
`;
export const Content = styled.p`
  font-size: 20px;
  line-height: 40px;
  @media screen and (max-width: 500px) {
    font-size: 12px;
    line-height: 24px;
  }
`;
