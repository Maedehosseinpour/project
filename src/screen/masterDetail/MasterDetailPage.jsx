import React, { useEffect, useState } from "react";
import { DetailMaster } from "../../component/LandingComponent/Professors/detailMaster/DetailMaster";
import { useParams } from "react-router-dom";

const MasterDetailPage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <DetailMaster id={id} />{" "}
    </div>
  );
};

export default MasterDetailPage;
