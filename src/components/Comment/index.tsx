import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";

interface CommentProps {
  author: string;
  createdAt: Date;
  content: string;
}

function Comment({ author, createdAt, content }: CommentProps) {
  return (
    <Container>
      <Info>
        <h1>{author}</h1>
        <p>{dayjs(createdAt).format("YYYY.MM.DD")}</p>
      </Info>
      <Content>{content}</Content>
    </Container>
  );
}

export default Comment;

const Container = styled.div`
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid #9a9a9a;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  & > h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 40px;
    margin-right: 20px;
  }
  & > p {
    font-size: 14px;
    font-weight: 700;
    line-height: 40px;
    color: #9a9a9a;
  }
`;
const Content = styled.p`
  font-size: 20px;
  line-height: 40px;
`;
