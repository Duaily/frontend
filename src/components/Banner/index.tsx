import * as S from "./styles";
import React from "react";

interface BannerProps {
  title: string;
  substring1: string;
  substring2?: string;
}

function Banner({ title, substring1, substring2 }: BannerProps) {
  return (
    <S.JumbotronSection>
      <h1>{title}</h1>
      <p style={{ textAlign: "center" }}>
        {substring1}
        <br />
        {substring2 || ""}
      </p>
    </S.JumbotronSection>
  );
}

export default Banner;
