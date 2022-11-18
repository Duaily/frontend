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
];
