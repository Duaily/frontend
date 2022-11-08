import { MenuItemType } from "@types";
import React, { useEffect } from "react";

interface HouseProps {
  setClickedMenu: React.Dispatch<React.SetStateAction<MenuItemType>>;
}

function House({ setClickedMenu }: HouseProps) {
  useEffect(() => {
    setClickedMenu("trade");
  }, [setClickedMenu]);
  return (
    <div>
      <div>
        <h1>빈 집 거래</h1>
        <p>다양한 집을 거래할 수 있는 공간입니다.</p>
      </div>
      <div>
        <button>전체</button>
        <button>남해</button>
        <button>속초</button>
        <button>제주도</button>
      </div>
      <div>
        <div>
          <input type="text" />
          <button>검색</button>
        </div>
        <div>
          <button>글쓰기</button>
        </div>
      </div>
    </div>
  );
}

export default House;
