import styled from "styled-components";
import row_logo from "@assets/row_logo.svg";

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  background-color: white;
  z-index: 100;
  margin: 0 auto;
`;
export const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  place-items: center;
  width: 100%;
  height: 100px;
  @media screen and (max-width: 500px) {
    max-width: 390px;
    height: 80px;
  }
`;
export const LogoImage = styled.img.attrs({ src: row_logo, alt: "logo" })`
  cursor: pointer;
  -webkit-user-drag: none;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 500px) {
    height: 80px;
  }
`;
export const NavbarButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-left: 30px;
  @media screen and (max-width: 500px) {
    margin-left: 0;
  }
  & > p {
    margin-top: 3px;
    font-size: 16px;
    font-weight: 300;
    color: ${(props) => props.theme.brown_color};
    line-height: 26px;
    @media screen and (max-width: 500px) {
      font-size: 10px;
    }
  }
  & > button {
    color: ${(props) => props.theme.brown_color};
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 16px;
    font-weight: 300;
    @media screen and (max-width: 500px) {
      font-size: 10px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;
export const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  @media screen and (max-width: 500px) {
    max-width: 390px;
  }
`;
export const MenuItem = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    padding: 5px;
    color: ${(props) => props.theme.brown_color};
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    opacity: 0.8;
    @media screen and (max-width: 500px) {
      font-size: 14px;
    }
    &:hover {
      opacity: 0.6;
    }
  }
`;
export const Underline = styled.div`
  position: absolute;
  width: 0;
  background-color: ${(props) => props.theme.brown_color};
  height: 1px;
  transition: 0.5s;
`;
