import { MenuItemType } from "@types";
import React, { useEffect } from "react";

interface LocationProps {
  setClickedMenu: React.Dispatch<React.SetStateAction<MenuItemType>>;
}

function Location({ setClickedMenu }: LocationProps) {
  useEffect(() => {
    setClickedMenu("location intro");
  }, [setClickedMenu]);
  return <div>지역소개</div>;
}

export default Location;
