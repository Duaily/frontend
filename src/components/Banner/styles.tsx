import styled from "styled-components";

export const JumbotronSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 90px;
  width: 100%;
  height: 350px;
  background-color: #f3f3f3;
  @media screen and (max-width: 500px) {
    height: 250px;
  }
  & > h1 {
    font-size: 40px;
    font-weight: 900;
    color: ${(props) => props.theme.green_color};
    text-decoration: underline;
    text-underline-position: under;
    @media screen and (max-width: 500px) {
      font-size: 32px;
    }
  }
  & > p {
    font-size: 28px;
    font-weight: 350;
    margin-bottom: 60px;
    @media screen and (max-width: 500px) {
      font-size: 20px;
      margin-bottom: 30px;
    }
  }
`;
