import React from "react";
import { useTranslation } from "react-i18next";
import { useClient } from "@/hooks/useClient";

const Hero = () => {
  const { t } = useTranslation("common");
  const { isLoad } = useClient();

  if (isLoad) return <p>Loading...</p>;
  
  return (
    <div>
      <p>{t("welcome")}</p>
    </div>
  );
};

export default Hero;

