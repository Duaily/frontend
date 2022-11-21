import { MenuItemType } from "@types";
import React, { useEffect } from "react";

interface DualLifeIntroProps {
  setClickedMenu: React.Dispatch<React.SetStateAction<MenuItemType>>;
}

function DualLifIntro({ setClickedMenu }: DualLifeIntroProps) {
  useEffect(() => {
    setClickedMenu("duallife intro");
  }, [setClickedMenu]);
  return <div>듀얼라이프 소개</div>;
}

export default DualLifIntro;
