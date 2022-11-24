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
    imageUrl: "https://picsum.photos/450/450",
    title: `효율적인 듀얼라이프를 위한
인테리어 꿀팁 배우기`,
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/450/450",
    title: `효율적인 듀얼라이프를 위한
인테리어 꿀팁 배우기`,
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/450/450",
    title: `효율적인 듀얼라이프를 위한
인테리어 꿀팁 배우기`,
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/450/450",
    title: `효율적인 듀얼라이프를 위한
인테리어 꿀팁 배우기`,
  },
  {
    id: 5,
    imageUrl: "https://picsum.photos/450/450",
    title: `효율적인 듀얼라이프를 위한
인테리어 꿀팁 배우기`,
  },
  {
    id: 6,
    imageUrl: "https://picsum.photos/450/450",
    title: `효율적인 듀얼라이프를 위한
인테리어 꿀팁 배우기`,
  },
  {
    id: 7,
    imageUrl: "https://picsum.photos/450/450",
    title: `효율적인 듀얼라이프를 위한
인테리어 꿀팁 배우기`,
  },
  {
    id: 8,
    imageUrl: "https://picsum.photos/450/450",
    title: `효율적인 듀얼라이프를 위한
인테리어 꿀팁 배우기`,
  },
];
export const dummy_trend_data: DummyTrend[] = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/450/450",
    title: "듀얼 라이프 생활 백서 : 경제편",
    previewText: `경제적인 부담으로 듀얼라이프를 망설이셨나요?
듀얼 라이프를 위한 지원금 및 정책을 알려드려요.`,
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/450/450",
    title: "듀얼 라이프 생활 백서 : 경제편",
    previewText: `경제적인 부담으로 듀얼라이프를 망설이셨나요?
듀얼 라이프를 위한 지원금 및 정책을 알려드려요.`,
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/450/450",
    title: "듀얼 라이프 생활 백서 : 경제편",
    previewText: `경제적인 부담으로 듀얼라이프를 망설이셨나요?
듀얼 라이프를 위한 지원금 및 정책을 알려드려요.`,
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/450/450",
    title: "듀얼 라이프 생활 백서 : 경제편",
    previewText: `경제적인 부담으로 듀얼라이프를 망설이셨나요?
듀얼 라이프를 위한 지원금 및 정책을 알려드려요.`,
  },
  {
    id: 5,
    imageUrl: "https://picsum.photos/450/450",
    title: "듀얼 라이프 생활 백서 : 경제편",
    previewText: `경제적인 부담으로 듀얼라이프를 망설이셨나요?
듀얼 라이프를 위한 지원금 및 정책을 알려드려요.`,
  },
  {
    id: 6,
    imageUrl: "https://picsum.photos/450/450",
    title: "듀얼 라이프 생활 백서 : 경제편",
    previewText: `경제적인 부담으로 듀얼라이프를 망설이셨나요?
듀얼 라이프를 위한 지원금 및 정책을 알려드려요.`,
  },
  {
    id: 7,
    imageUrl: "https://picsum.photos/450/450",
    title: "듀얼 라이프 생활 백서 : 경제편",
    previewText: `경제적인 부담으로 듀얼라이프를 망설이셨나요?
듀얼 라이프를 위한 지원금 및 정책을 알려드려요.`,
  },
  {
    id: 8,
    imageUrl: "https://picsum.photos/450/450",
    title: "듀얼 라이프 생활 백서 : 경제편",
    previewText: `경제적인 부담으로 듀얼라이프를 망설이셨나요?
듀얼 라이프를 위한 지원금 및 정책을 알려드려요.`,
  },
];
export const dummy_review_data: DummyReview[] = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/450/450",
    title: `도시에서 즐기지 못한 일상,
듀얼리와 함께 시작했어요!`,
    previewText: `듀얼리를 통해 듀얼 라이프를 알게 되었어요. 
일상에 지친 저에게 힐링이 되어준 듀얼리는 삶의 낙입니다.`,
    user: "듀얼리 최고",
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/450/450",
    title: `도시에서 즐기지 못한 일상,
듀얼리와 함께 시작했어요!`,
    previewText: `듀얼리를 통해 듀얼 라이프를 알게 되었어요. 
일상에 지친 저에게 힐링이 되어준 듀얼리는 삶의 낙입니다.`,
    user: "듀얼리 최고",
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/450/450",
    title: `도시에서 즐기지 못한 일상,
듀얼리와 함께 시작했어요!`,
    previewText: `듀얼리를 통해 듀얼 라이프를 알게 되었어요. 
일상에 지친 저에게 힐링이 되어준 듀얼리는 삶의 낙입니다.`,
    user: "듀얼리 최고",
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/450/450",
    title: `도시에서 즐기지 못한 일상,
듀얼리와 함께 시작했어요!`,
    previewText: `듀얼리를 통해 듀얼 라이프를 알게 되었어요. 
일상에 지친 저에게 힐링이 되어준 듀얼리는 삶의 낙입니다.`,
    user: "듀얼리 최고",
  },
  {
    id: 5,
    imageUrl: "https://picsum.photos/450/450",
    title: `도시에서 즐기지 못한 일상,
듀얼리와 함께 시작했어요!`,
    previewText: `듀얼리를 통해 듀얼 라이프를 알게 되었어요. 
일상에 지친 저에게 힐링이 되어준 듀얼리는 삶의 낙입니다.`,
    user: "듀얼리 최고",
  },
  {
    id: 6,
    imageUrl: "https://picsum.photos/450/450",
    title: `도시에서 즐기지 못한 일상,
듀얼리와 함께 시작했어요!`,
    previewText: `듀얼리를 통해 듀얼 라이프를 알게 되었어요. 
일상에 지친 저에게 힐링이 되어준 듀얼리는 삶의 낙입니다.`,
    user: "듀얼리 최고",
  },
  {
    id: 7,
    imageUrl: "https://picsum.photos/450/450",
    title: `도시에서 즐기지 못한 일상,
듀얼리와 함께 시작했어요!`,
    previewText: `듀얼리를 통해 듀얼 라이프를 알게 되었어요. 
일상에 지친 저에게 힐링이 되어준 듀얼리는 삶의 낙입니다.`,
    user: "듀얼리 최고",
  },
  {
    id: 8,
    imageUrl: "https://picsum.photos/450/450",
    title: `도시에서 즐기지 못한 일상,
듀얼리와 함께 시작했어요!`,
    previewText: `듀얼리를 통해 듀얼 라이프를 알게 되었어요. 
일상에 지친 저에게 힐링이 되어준 듀얼리는 삶의 낙입니다.`,
    user: "듀얼리 최고",
  },
];

export const dummy_house_data: DummyHouse[] = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/500/500",
    title: `툇마루가 있는 매력적인 집,
듀얼리 하우스 1호점`,
    location: "전남 완도군 완도읍 청해진남로39번길 19-1",
    minPrice: 30000000,
    maxPrice: 40000000,
    upload_date: new Date("2022-10-24"),
    author: "최민경",
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/500/500",
    title: `툇마루가 있는 매력적인 집,
듀얼리 하우스 1호점`,
    location: "전남 완도군 완도읍 청해진남로39번길 19-1",
    minPrice: 30000000,
    maxPrice: 40000000,
    upload_date: new Date("2022-10-24"),
    author: "최민경",
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/500/500",
    title: `툇마루가 있는 매력적인 집,
듀얼리 하우스 1호점`,
    location: "전남 완도군 완도읍 청해진남로39번길 19-1",
    minPrice: 30000000,
    maxPrice: 40000000,
    upload_date: new Date("2022-10-24"),
    author: "최민경",
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/500/500",
    title: `툇마루가 있는 매력적인 집,
듀얼리 하우스 1호점`,
    location: "전남 완도군 완도읍 청해진남로39번길 19-1",
    minPrice: 30000000,
    maxPrice: 40000000,
    upload_date: new Date("2022-10-24"),
    author: "최민경",
  },
  {
    id: 5,
    imageUrl: "https://picsum.photos/500/500",
    title: `툇마루가 있는 매력적인 집,
듀얼리 하우스 1호점`,
    location: "전남 완도군 완도읍 청해진남로39번길 19-1",
    minPrice: 30000000,
    maxPrice: 40000000,
    upload_date: new Date("2022-10-24"),
    author: "최민경",
  },
  {
    id: 6,
    imageUrl: "https://picsum.photos/500/500",
    title: `툇마루가 있는 매력적인 집,
듀얼리 하우스 1호점`,
    location: "전남 완도군 완도읍 청해진남로39번길 19-1",
    minPrice: 30000000,
    maxPrice: 40000000,
    upload_date: new Date("2022-10-24"),
    author: "최민경",
  },
  {
    id: 7,
    imageUrl: "https://picsum.photos/500/500",
    title: `툇마루가 있는 매력적인 집,
듀얼리 하우스 1호점`,
    location: "전남 완도군 완도읍 청해진남로39번길 19-1",
    minPrice: 30000000,
    maxPrice: 40000000,
    upload_date: new Date("2022-10-24"),
    author: "최민경",
  },
  {
    id: 8,
    imageUrl: "https://picsum.photos/500/500",
    title: `툇마루가 있는 매력적인 집,
듀얼리 하우스 1호점`,
    location: "전남 완도군 완도읍 청해진남로39번길 19-1",
    minPrice: 30000000,
    maxPrice: 40000000,
    upload_date: new Date("2022-10-24"),
    author: "최민경",
  },
  {
    id: 9,
    imageUrl: "https://picsum.photos/500/500",
    title: `툇마루가 있는 매력적인 집,
듀얼리 하우스 1호점`,
    location: "전남 완도군 완도읍 청해진남로39번길 19-1",
    minPrice: 30000000,
    maxPrice: 40000000,
    upload_date: new Date("2022-10-24"),
    author: "최민경",
  },
  {
    id: 10,
    imageUrl: "https://picsum.photos/500/500",
    title: `툇마루가 있는 매력적인 집,
듀얼리 하우스 1호점`,
    location: "전남 완도군 완도읍 청해진남로39번길 19-1",
    minPrice: 30000000,
    maxPrice: 40000000,
    upload_date: new Date("2022-10-24"),
    author: "최민경",
  },
  {
    id: 11,
    imageUrl: "https://picsum.photos/500/500",
    title: `툇마루가 있는 매력적인 집,
듀얼리 하우스 1호점`,
    location: "전남 완도군 완도읍 청해진남로39번길 19-1",
    minPrice: 30000000,
    maxPrice: 40000000,
    upload_date: new Date("2022-10-24"),
    author: "최민경",
  },
  {
    id: 12,
    imageUrl: "https://picsum.photos/500/500",
    title: `툇마루가 있는 매력적인 집,
듀얼리 하우스 1호점`,
    location: "전남 완도군 완도읍 청해진남로39번길 19-1",
    minPrice: 30000000,
    maxPrice: 40000000,
    upload_date: new Date("2022-10-24"),
    author: "최민경",
  },
];
