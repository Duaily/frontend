import React from "react";
import * as S from "./styles";
import dayjs from "dayjs";

interface CommentProps {
  author: string;
  createdAt: Date;
  content: string;
}

function Comment({ author, createdAt, content }: CommentProps) {
  return (
    <S.Container>
      <S.Info>
        <h1>{author}</h1>
        <p>{dayjs(createdAt).format("YYYY.MM.DD")}</p>
      </S.Info>
      <S.Content>{content}</S.Content>
    </S.Container>
  );
}

export default Comment;
