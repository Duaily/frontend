import React from "react";
import jumbotImage2 from "@assets/jumboImage2.svg";
import styled from "styled-components";

function Main() {
  return (
    <Container>
      <img src={jumbotImage2} alt="jumbo" />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100%;
  margin: 0 auto;
`;
