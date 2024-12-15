import React from "react";
import i18n from "@/utils/i18";
import { Button } from "@/components/ui/button";

const Header = () => {
  const changeLanguage = (lng: string) => {
    i18n
      .changeLanguage(lng)
      .then(() => {
        console.log(`Language changed to ${lng}`);
      })
      .catch((error) => {
        console.error("Error changing language:", error);
      });
  };
  return (
    <div>
      <Button
        onClick={() => changeLanguage(i18n.language == "en" ? "ar" : "en")}
      >
        Change language
      </Button>
    </div>
  );
};

export default Header;
