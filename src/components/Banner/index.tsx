import React from "react";
import styled from "styled-components";

interface BannerProps {
  title: string;
  substring1: string;
  substring2?: string;
}

function Banner({ title, substring1, substring2 }: BannerProps) {
  return (
    <JumbotronSection>
      <h1>{title}</h1>
      <p style={{ textAlign: "center" }}>
        {substring1}
        <br />
        {substring2 || ""}
      </p>
    </JumbotronSection>
  );
}

export default Banner;

const JumbotronSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 90px;
  width: 100%;
  height: 350px;
  background-color: #f3f3f3;
  & > h1 {
    font-size: 40px;
    font-weight: 900;
    color: ${(props) => props.theme.green_color};
    text-decoration: underline;
    text-underline-position: under;
  }
  & > p {
    font-size: 28px;
    font-weight: 350;
    margin-bottom: 60px;
  }
`;
