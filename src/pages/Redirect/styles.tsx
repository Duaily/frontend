import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 300px auto;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  @media screen and (max-width: 500px) {
    width: 70%;
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => props.theme.brown_color};
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;
export const ItemLabel = styled.label`
  font-size: 0.8rem;
  color: #717171;
  margin: 30px 0 0.5em 0;
  width: 100%;
  position: relative;
  left: 10%;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ItemInput = styled.input`
  width: 87%;
  padding: 10px;
  border-radius: 5px;
  border: 0;
  background-color: #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
  }
`;
export const SubmitBtn = styled.button`
  width: 87%;
  background-color: ${(props) => props.theme.green_color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #fff;
  border: 0;
  margin-top: 2.4em;
  padding: 8px;
  cursor: pointer;
`;
export const ErrorMessage = styled.span`
  height: 20px;
  align-self: flex-start;
  font-size: 0.5rem;
  color: red;
  margin-top: 10px;
  margin-left: 40px;
`;
