import React from "react";
import styled from "styled-components";

function Footer() {
  return <Container></Container>;
}

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 480px;
  background-color: ${(props) => props.theme.brown_color};
`;
