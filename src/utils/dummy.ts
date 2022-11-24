// house 더미 데이터 이미지
import house1Img from "@assets/houseDummy/house1.svg";
import house2Img from "@assets/houseDummy/house2.svg";
import house3Img from "@assets/houseDummy/house3.svg";
import house4Img from "@assets/houseDummy/house4.svg";
import house5Img from "@assets/houseDummy/house5.svg";
import house6Img from "@assets/houseDummy/house6.svg";
import house7Img from "@assets/houseDummy/house7.svg";
import house8Img from "@assets/houseDummy/house8.svg";
import house9Img from "@assets/houseDummy/house9.svg";
import house10Img from "@assets/houseDummy/house10.svg";
import house11Img from "@assets/houseDummy/house11.svg";
import house12Img from "@assets/houseDummy/house12.svg";
import house13Img from "@assets/houseDummy/house13.svg";
import house14Img from "@assets/houseDummy/house14.svg";
import house15Img from "@assets/houseDummy/house15.svg";
// review 더미 데이터 이미지
import review1Img from "@assets/reviewDummy/review1.svg";
import review2Img from "@assets/reviewDummy/review2.svg";
import review3Img from "@assets/reviewDummy/review3.svg";
import review4Img from "@assets/reviewDummy/review4.svg";
import review5Img from "@assets/reviewDummy/review5.svg";
import review6Img from "@assets/reviewDummy/review6.svg";
import review7Img from "@assets/reviewDummy/review7.svg";
import review8Img from "@assets/reviewDummy/review8.svg";
// trend 더미 데이터 이미지
import trend1Img from "@assets/trendDummy/trend1.svg";
import trend2Img from "@assets/trendDummy/trend2.svg";
import trend3Img from "@assets/trendDummy/trend3.svg";
import trend4Img from "@assets/trendDummy/trend4.svg";
// session 더미 데이터 이미지
import session1Img from "@assets/sessionDummy/session1.svg";
import session2Img from "@assets/sessionDummy/session2.svg";
import session3Img from "@assets/sessionDummy/session3.svg";

interface DummyHouse {
  id: number;
  imageUrl: string;
  title: string;
  location: string;
  minPrice: number;
  maxPrice: number;
  upload_date: Date;
  author: string;
}
interface DummyReview {
  id: number;
  imageUrl: string;
  title: string;
  previewText: string;
  user: string;
}
interface DummyTrend {
  id: number;
  imageUrl: string;
  title: string;
  previewText: string;
}
interface DummySession {
  id: number;
  imageUrl: string;
  title: string;
}
interface DummyComment {
  id: number;
  author: string;
  createdAt: Date;
  content: string;
}

export const dummy_comment_data: DummyComment[] = [
  {
    id: 1,
    author: "YOLO",
    createdAt: new Date("2021-09-13"),
    content: `직장만 10년 동안 다닌 도시 사람입니다.
저도 요즘 건강 고민이 많아 힐링이 필요한데 글이 정말 도움 많이 되었어요. 감사합니다.`,
  },
  {
    id: 2,
    author: "해피해",
    createdAt: new Date("2021-09-23"),
    content: `듀얼라이프 한 달인데도 변화가 있었다니 부러워요!
저도 듀얼라이프 곧 시작하려고 하는데 건강해지고 싶어요~`,
  },
  {
    id: 3,
    author: "DUAL",
    createdAt: new Date("2022-10-13"),
    content: `듀얼라이프 효과과 대단한데요?
마치 나비효과처럼 좋은 일만 생기는 것 같아요!`,
  },
];

export const dummy_session_data: DummySession[] = [
  {
    id: 1,
    imageUrl: session1Img,
    title: `효율적인 듀얼라이프를 위한
인테리어 꿀팁 배우기`,
  },
  {
    id: 2,
    imageUrl: session2Img,
    title: `듀얼 라이프 두 배로 즐기기
01. 관광 명소`,
  },
  {
    id: 3,
    imageUrl: session3Img,
    title: `비건과 건강 그 사이,
더욱 활력있는 듀얼라이프`,
  },
  {
    id: 4,
    imageUrl: session1Img,
    title: `효율적인 듀얼라이프를 위한
인테리어 꿀팁 배우기`,
  },
  {
    id: 5,
    imageUrl: session2Img,
    title: `듀얼 라이프 두 배로 즐기기
01. 관광 명소`,
  },
  {
    id: 6,
    imageUrl: session3Img,
    title: `비건과 건강 그 사이,
더욱 활력있는 듀얼라이프`,
  },
  {
    id: 7,
    imageUrl: session1Img,
    title: `효율적인 듀얼라이프를 위한
인테리어 꿀팁 배우기`,
  },
  {
    id: 8,
    imageUrl: session2Img,
    title: `듀얼 라이프 두 배로 즐기기
01. 관광 명소`,
  },
];
export const dummy_trend_data: DummyTrend[] = [
  {
    id: 1,
    imageUrl: trend1Img,
    title: "듀얼 라이프 생활 백서 : 경제편",
    previewText: `경제적인 부담으로 듀얼라이프를 망설이셨나요?
듀얼 라이프를 위한 지원금 및 정책을 알려드려요.`,
  },
  {
    id: 2,
    imageUrl: trend2Img,
    title: "유기농 듀얼 라이프를 위한 꿀팁",
    previewText: `식물 기르기가 대세인 요즘,
듀얼 라이프에서도 식물을 기르는 방법을 알려드려요.`,
  },
  {
    id: 3,
    imageUrl: trend3Img,
    title: "듀얼 라이프 생활 백서 : 인테리어편",
    previewText: `듀얼 라이프는 옛것만을 추구한다는 편견은 X !
개성과 취향이 드러날 수 있는 인테리어를 해보세요.`,
  },
  {
    id: 4,
    imageUrl: trend4Img,
    title: "듀얼 라이프 생활 백서 : 관광편",
    previewText: `오로지 휴식만을 위한 듀얼 라이프가 아닌,
관광과 다양한 경험을 통해 알찬 시간을 누리세요.`,
  },
  {
    id: 5,
    imageUrl: trend1Img,
    title: "듀얼 라이프 생활 백서 : 경제편",
    previewText: `경제적인 부담으로 듀얼라이프를 망설이셨나요?
듀얼 라이프를 위한 지원금 및 정책을 알려드려요.`,
  },
  {
    id: 6,
    imageUrl: trend2Img,
    title: "유기농 듀얼 라이프를 위한 꿀팁",
    previewText: `식물 기르기가 대세인 요즘,
듀얼 라이프에서도 식물을 기르는 방법을 알려드려요.`,
  },
  {
    id: 7,
    imageUrl: trend3Img,
    title: "듀얼 라이프 생활 백서 : 인테리어편",
    previewText: `듀얼 라이프는 옛것만을 추구한다는 편견은 X !
개성과 취향이 드러날 수 있는 인테리어를 해보세요.`,
  },
  {
    id: 8,
    imageUrl: trend4Img,
    title: "듀얼 라이프 생활 백서 : 관광편",
    previewText: `오로지 휴식만을 위한 듀얼 라이프가 아닌,
관광과 다양한 경험을 통해 알찬 시간을 누리세요.`,
  },
];
export const dummy_review_data: DummyReview[] = [
  {
    id: 1,
    imageUrl: review1Img,
    title: `도시에서 즐기지 못한 일상,
듀얼리와 함께 시작했어요!`,
    previewText: `듀얼리를 통해 듀얼 라이프를 알게 되었어요. 
일상에 지친 저에게 힐링이 되어준 듀얼리는 삶의 낙입니다.`,
    user: "듀얼리 최고",
  },
  {
    id: 2,
    imageUrl: review2Img,
    title: `산과 바다를 즐기는 삶,
너무 매력적이에요!`,
    previewText: `듀얼리를 통해 듀얼라이프를 시작했어요.
매일 아침 자연과 함께하다니 행복합니다!`,
    user: "욜로듀얼리",
  },
  {
    id: 3,
    imageUrl: review3Img,
    title: `건강도 되찾게 해준 듀얼리,
감사해요!`,
    previewText: `도시에서 살 때는 건강을 챙기지 않았는데
듀얼리를 통해 듀얼라이프를 하며 건강해졌어요!`,
    user: "행복한 삶",
  },
  {
    id: 4,
    imageUrl: review4Img,
    title: `건강 되찾기 프로젝트! 역시 듀얼 라이프`,
    previewText: `듀얼 라이프를 통해 건강도 되찾고 싶었어요.
도시에서는 누리지 못한 것들을 누리니 목표를 벌써 이루었어요.`,
    user: "개발자상민",
  },
  {
    id: 5,
    imageUrl: review5Img,
    title: `하루하루 상쾌하고 행복해요, 다들 얼른 듀얼 라이프 시작해요!`,
    previewText: `바쁜 일상 없이 오로지 나만의 시간을 가진다는 것이 너무 좋아요!
직장과 회사 그리고 사람들에 치이지 않는 이 삶..ㅎㅎ`,
    user: "폴라리스 민서",
  },
  {
    id: 6,
    imageUrl: review6Img,
    title: `마음도 눈도 즐거운 듀얼라이프!`,
    previewText: `도시에서 살 때는 여유로운 적이 없었어요.
듀얼리를 통해 삶의 여유도 가지고 건강도 되찾았어요.`,
    user: "산속에 사는 다람쥐",
  },
  {
    id: 7,
    imageUrl: review7Img,
    title: `매일매일이 꿈같아요. 듀얼라이프 만족도 1000% !`,
    previewText: `포근하고 경치 좋은 시골에서 즐기는 듀얼 라이프는
정말 제 인생의 전환점이 되어주었어요. 짱짱!`,
    user: "해피해피",
  },
  {
    id: 8,
    imageUrl: review8Img,
    title: `도시에서 즐기지 못한 일상, 듀얼리와 함께 시작했어요!`,
    previewText: `듀얼리를 통해 듀얼 라이프를 알게 되었어요. 
일상에 지친 저에게 힐링이 되어준 듀얼리는 삶의 낙입니다.`,
    user: "듀얼리 최고",
  },
];

export const dummy_house_data: DummyHouse[] = [
  {
    id: 1,
    imageUrl: house1Img,
    title: `도시인듯 아닌듯 현대적인 분위기,
안성맞춤 집`,
    location: "경상남도 남해군 이동면 다정리 705-5",
    minPrice: 30000000,
    maxPrice: 40000000,
    upload_date: new Date("2022-02-05"),
    author: "재이재이",
  },
  {
    id: 2,
    imageUrl: house2Img,
    title: `바다 앞에 위치한 포근한 집,
오션뷰 집`,
    location: "경상남도 남해군 이동면 초음리 1111",
    minPrice: 90000000,
    maxPrice: 100000000,
    upload_date: new Date("2022-02-25"),
    author: "호니호니",
  },
  {
    id: 3,
    imageUrl: house3Img,
    title: `마당이 있어 유유자적 라이프
즐길 수 있는 집`,
    location: "강원도 속초시 노학동 821-3",
    minPrice: 75000000,
    maxPrice: 85000000,
    upload_date: new Date("2022-10-23"),
    author: "밍밍서",
  },
  {
    id: 4,
    imageUrl: house4Img,
    title: `멋있는 한옥 느낌을 즐길 수 있는
경치 좋은 집`,
    location: "제주특별자치도 제주시 용담2동 용해로 92",
    minPrice: 55000000,
    maxPrice: 65000000,
    upload_date: new Date("2022-05-07"),
    author: "애플상민",
  },
  {
    id: 5,
    imageUrl: house5Img,
    title: `따스한 햇살과 마당이 비추는
건강한 집`,
    location: "강원도 속초시 노학동 관광로 352",
    minPrice: 45000000,
    maxPrice: 65000000,
    upload_date: new Date("2021-01-18"),
    author: "우경우갱",
  },
  {
    id: 6,
    imageUrl: house6Img,
    title: `건강한 듀얼라이프를 즐길 수 있는
일석이조 하우스`,
    location: "전남 완도군 완도읍 청해진남로39번길 19-1",
    minPrice: 70000000,
    maxPrice: 80000000,
    upload_date: new Date("2020-04-07"),
    author: "귤귤",
  },
  {
    id: 7,
    imageUrl: house7Img,
    title: `옥탑방의 매력을 한 번에!
바다 앞 옥탑하우스`,
    location: "전남 완도군 완도읍 청해진남로39번길 19-1",
    minPrice: 75000000,
    maxPrice: 85000000,
    upload_date: new Date("2022-05-07"),
    author: "애플상민",
  },
  {
    id: 8,
    imageUrl: house8Img,
    title: `마당과 산의 정기를 모두 누리는
아기자기한 집`,
    location: "강원도 속초시 노학동 관광로 352",
    minPrice: 55000000,
    maxPrice: 75000000,
    upload_date: new Date("2020-04-07"),
    author: "우경우갱",
  },
  {
    id: 9,
    imageUrl: house9Img,
    title: `옹기종기 함께하는 행복이 두배!
땅끝마을 집`,
    location: "제주특별자치도 무근성7길11 ",
    minPrice: 60000000,
    maxPrice: 70000000,
    upload_date: new Date("2021-01-18"),
    author: "귤귤",
  },
  {
    id: 10,
    imageUrl: house10Img,
    title: `조용하고 쾌적한 삶을 즐길 수 있는 
즐거운 집`,
    location: "제주특별자치도 제주시 용담2동 용해로 92",
    minPrice: 85000000,
    maxPrice: 90000000,
    upload_date: new Date("2022-05-07"),
    author: "애플상민",
  },
  {
    id: 11,
    imageUrl: house11Img,
    title: `바다 향기를 맡으며 건강한 삶을
    즐길 수 있는 바다뷰 하우스`,
    location: "강원도 속초시 노학동 관광로 352",
    minPrice: 65000000,
    maxPrice: 75000000,
    upload_date: new Date("2021-01-18"),
    author: "우경우갱",
  },
  {
    id: 12,
    imageUrl: house12Img,
    title: `전통을 맛보고 즐길 수 있는
고풍스러운 집`,
    location: "제주특별자치도 무근성7길11 ",
    minPrice: 85000000,
    maxPrice: 95000000,
    upload_date: new Date("2020-04-07"),
    author: "귤귤",
  },
  {
    id: 13,
    imageUrl: house13Img,
    title: `한옥 마을에서 즐길 수 있는
전통스러운 집`,
    location: "제주특별자치도 제주시 용담2동 용해로 92",
    minPrice: 80000000,
    maxPrice: 90000000,
    upload_date: new Date("2022-05-07"),
    author: "애플상민",
  },
  {
    id: 14,
    imageUrl: house14Img,
    title: `울창한 나무들이 가득한 
풀향기 가득한 집`,
    location: "강원도 속초시 노학동 관광로 352",
    minPrice: 50000000,
    maxPrice: 60000000,
    upload_date: new Date("2021-04-07"),
    author: "우경우갱",
  },
  {
    id: 15,
    imageUrl: house15Img,
    title: `마당과 산이 모두 한 자리에!
건강하고 조용한 집`,
    location: "제주특별자치도 무근성7길11",
    minPrice: 40000000,
    maxPrice: 50000000,
    upload_date: new Date("2020-01-17"),
    author: "귤귤",
  },
];
