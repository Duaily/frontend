import * as S from "./styles";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import processCount from "@utils/processCount";
import { useNavigate } from "react-router-dom";

interface HouseCardProps {
  houseId: number;
  houseImage: string;
  title: string;
  location: string;
  min_price: number;
  max_price: number;
  upload_date: Date;
  author: string;
}

function HouseCard(props: HouseCardProps) {
  const navigate = useNavigate();
  return (
    <S.CardContainer
      onClick={() => navigate(`/house/${props.houseId}`)}
      whileHover={{ scale: 1.01, opacity: 0.8 }}
    >
      <S.CardImage img_src={props.houseImage}>
        <S.CardStatus>입주 가능</S.CardStatus>
      </S.CardImage>
      <S.CardInfoBox>
        <S.CardTitle>{props.title}</S.CardTitle>
        <S.CardInfo>
          <p>위치 : {props.location}</p>
          <p>
            가격 : {processCount(props.min_price)}원 ~{" "}
            {processCount(props.max_price)}원
          </p>
        </S.CardInfo>
        <S.CardMetaData>
          <p>업로드 일자 : {dayjs(props.upload_date).format("YYYY.MM.DD")}</p>
          <p>작성자 : {props.author}</p>
        </S.CardMetaData>
      </S.CardInfoBox>
    </S.CardContainer>
  );
}

export default HouseCard;
