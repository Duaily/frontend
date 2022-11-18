import axios from "axios";
import React, { useState } from "react";

function HousePost() {
  const [title, setTitle] = useState("");
  const [imageUrls, setImageUrls] = useState<string[]>([]);
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
    const { data } = await axios.post("house", {
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
    });
    console.log(data.data);
  };
  return (
    <div>
      <div>
        <h1>제목</h1>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <h1>이미지 주소</h1>
        <input type="file" onChange={onFileUpload} />
        {imageUrls.map((url, idx) => (
          <img
            style={{ width: "100px", height: "100px" }}
            key={idx}
            src={url}
            alt="houseImage"
          />
        ))}
      </div>
      <div>
        <h1>도/시</h1>
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </div>
      <div>
        <h1>도로명주소</h1>
        <input
          type="text"
          value={street}
          onChange={(e) => {
            setStreet(e.target.value);
          }}
        />
      </div>
      <div>
        <h1>우편번호</h1>
        <input
          type="text"
          value={zipcode}
          onChange={(e) => {
            setZipcode(e.target.value);
          }}
        />
      </div>
      <div>
        <h1>빈 집 가격</h1>
        <input
          type="text"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <div>
        <h1>빈 집 크기</h1>
        <input
          type="text"
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />
      </div>
      <div>
        <h1>준공연도 (yyyy-mm-dd)</h1>
        <input
          type="text"
          value={createdDate}
          onChange={(e) => {
            setCreatedDate(e.target.value);
          }}
        />
      </div>
      <div>
        <h1>빈 집 용도</h1>
        <input
          type="text"
          value={purpose}
          onChange={(e) => {
            setPurpose(e.target.value);
          }}
        />
      </div>
      <div>
        <h1>지역 ID</h1>
        <input
          type="text"
          value={regionId}
          onChange={(e) => {
            setRegionId(Number(e.target.value));
          }}
        />
      </div>
      <button onClick={onPostHouse}>클릭</button>
    </div>
  );
}

export default HousePost;
