import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 480px;
  padding: 50px 120px;
  color: white;
  background-color: ${(props) => props.theme.brown_color};
  @media screen and (max-width: 500px) {
    padding: 30px 30px;
  }
`;
export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-left: 70px;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;
export const Slogan = styled.div`
  line-height: 2;
  font-size: 16px;
  font-weight: 900;
  white-space: pre-wrap;
  word-break: break-all;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 185px;
  font-weight: bold;
  & > a {
    font-size: 14px;
    &:hover {
      opacity: 0.8;
    }
    @media screen and (max-width: 500px) {
      font-size: 12px;
    }
  }
`;
export const CopyRight = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 2;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
