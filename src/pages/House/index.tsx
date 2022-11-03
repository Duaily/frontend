import { MenuItemType } from "@types";
import React, { useEffect } from "react";

interface HouseProps {
  setClickedMenu: React.Dispatch<React.SetStateAction<MenuItemType>>;
}

function House({ setClickedMenu }: HouseProps) {
  useEffect(() => {
    setClickedMenu("trade");
  }, [setClickedMenu]);
  return <div>빈집 매물</div>;
}

export default House;
