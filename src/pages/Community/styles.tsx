import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1440px;
  min-height: 100%;
  margin: 0 auto;
`;
export const MenuContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
  padding: 0 125px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  @media screen and (max-width: 500px) {
    padding: 0 30px;
  }
`;
export const ContentConatiner = styled.div`
  width: 100%;
  padding: 0 125px;
  @media screen and (max-width: 500px) {
    padding: 0 30px;
  }
`;
export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;
export const Circle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.green_color};
  transition: 0.5s;
  @media screen and (max-width: 500px) {
    width: 8px;
    height: 8px;
  }
`;
export const CategoryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 145px;
  height: 70px;
  font-size: 28px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  height: 50px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  font-size: 24px;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
export const SearchImg = styled.img`
  width: 27px;
  height: 27px;
  align-self: flex-start;
  transform: translate(-48px, 10px);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 500px) {
    transform: translate(0px, 10px);
  }
`;
export const PostButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 27px;
  align-items: center;
  color: ${(props) => props.theme.green_color};
  font-size: 26px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
export const TotalPostBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 32px;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

export const ReviewCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 70px;
  row-gap: 70px;
  margin-top: 55px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
  }
`;
