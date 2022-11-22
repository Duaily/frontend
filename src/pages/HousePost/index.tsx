import { getUser } from "@apis/auth";
import { useQuery } from "@tanstack/react-query";
import { opacityVariants } from "@utils/variants";
import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

type Category = "MINE" | "MONTHLY";
function HousePost() {
  const { data, isFetching } = useQuery(["user-info"], getUser);
  const [title, setTitle] = useState("");
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [category, setCategory] = useState<Category>("MINE");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [purpose, setPurpose] = useState("");
  const [regionId, setRegionId] = useState(0);
  const onFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const { data } = await axios.post("/s3", formData);
    setImageUrls((prev) => [...prev, data.data]);
  };
  const onPostHouse = async () => {
    await axios.post("house", {
      title,
      imageUrls,
      city,
      street,
      zipcode,
      price,
      size,
      createdDate,
      purpose,
      regionId,
      category,
    });
  };
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as Category);
  };
  if (isFetching && !data)
    return (
      <LoadingContainer>
        <FaSpinner size={36} className="spinner" />
        <br></br>
        <h1>잠시만 기다려주세요</h1>
      </LoadingContainer>
    );
  if (!isFetching && !data) return <Navigate to={"/login"} />;
  return (
    <Container variants={opacityVariants} initial="initial" animate="mount">
      <JumbotronSection>
        <h1>빈 집 게시글 작성</h1>
      </JumbotronSection>
      <div style={{ width: "100%", padding: "0 125px" }}>
        <h1>기본정보</h1>
        <BasicInfo></BasicInfo>
      </div>
    </Container>
    // <div>
    //   <div>
    //     <h1>제목</h1>
    //     <input
    //       type="text"
    //       value={title}
    //       onChange={(e) => {
    //         setTitle(e.target.value);
    //       }}
    //     />
    //   </div>
    //   <div>
    //     <h1>이미지 주소</h1>
    //     <input type="file" onChange={onFileUpload} />
    //     {imageUrls.map((url, idx) => (
    //       <img
    //         style={{ width: "100px", height: "100px" }}
    //         key={idx}
    //         src={url}
    //         alt="houseImage"
    //       />
    //     ))}
    //   </div>
    //   <div>
    //     <h1>도/시</h1>
    //     <input
    //       type="text"
    //       value={city}
    //       onChange={(e) => {
    //         setCity(e.target.value);
    //       }}
    //     />
    //   </div>
    //   <div>
    //     <h1>도로명주소</h1>
    //     <input
    //       type="text"
    //       value={street}
    //       onChange={(e) => {
    //         setStreet(e.target.value);
    //       }}
    //     />
    //   </div>
    //   <div>
    //     <h1>우편번호</h1>
    //     <input
    //       type="text"
    //       value={zipcode}
    //       onChange={(e) => {
    //         setZipcode(e.target.value);
    //       }}
    //     />
    //   </div>
    //   <div>
    //     <h1>빈 집 가격</h1>
    //     <input
    //       type="text"
    //       value={price}
    //       onChange={(e) => {
    //         setPrice(e.target.value);
    //       }}
    //     />
    //   </div>
    //   <div>
    //     <h1>빈 집 크기</h1>
    //     <input
    //       type="text"
    //       value={size}
    //       onChange={(e) => {
    //         setSize(e.target.value);
    //       }}
    //     />
    //   </div>
    //   <div>
    //     <h1>준공연도 (yyyy-mm-dd)</h1>
    //     <input
    //       type="text"
    //       value={createdDate}
    //       onChange={(e) => {
    //         setCreatedDate(e.target.value);
    //       }}
    //     />
    //   </div>
    //   <div>
    //     <h1>카테고리</h1>
    //     <select onChange={onSelectChange}>
    //       <option value="MINE">매매</option>
    //       <option value="MONTHLY">월세</option>
    //     </select>
    //   </div>
    //   <div>
    //     <h1>빈 집 용도</h1>
    //     <input
    //       type="text"
    //       value={purpose}
    //       onChange={(e) => {
    //         setPurpose(e.target.value);
    //       }}
    //     />
    //   </div>
    //   <div>
    //     <h1>지역 ID</h1>
    //     <input
    //       type="text"
    //       value={regionId}
    //       onChange={(e) => {
    //         setRegionId(Number(e.target.value));
    //       }}
    //     />
    //   </div>
    //   <button onClick={onPostHouse}>클릭</button>
    // </div>
  );
}

export default HousePost;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Container = styled(motion.div)`
  width: 100%;
  max-width: 1440px;
  min-height: 100%;
  margin: 0 auto;
`;
const JumbotronSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 90px;
  width: 100%;
  height: 250px;
  background-color: #f2f6f6;
  & > h1 {
    font-size: 40px;
    font-weight: 900;
    color: ${(props) => props.theme.green_color};
    text-decoration: underline;
    text-underline-position: under;
  }
  & > p {
    font-size: 28px;
    font-weight: 350;
    margin-bottom: 60px;
  }
`;
const BasicInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
