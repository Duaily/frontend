import { MenuItemType } from "@types";
import React, { useEffect } from "react";

interface CommunityProps {
  setClickedMenu: React.Dispatch<React.SetStateAction<MenuItemType>>;
}

function Commnunity({ setClickedMenu }: CommunityProps) {
  useEffect(() => {
    setClickedMenu("community");
  }, [setClickedMenu]);
  return <div>커뮤니티</div>;
}

export default Commnunity;
