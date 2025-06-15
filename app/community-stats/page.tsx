import CommunityStats from "@hhs/components/custom/community-stats";
import Subtitle from "@hhs/components/custom/subtitle";
import LandingLayoutView from "@hhs/layouts/landing-layout";
import React from "react";

function CommunityStatsPage() {
  return (
    <LandingLayoutView>
      <Subtitle>Topluluk İstatistikleri</Subtitle>
      <CommunityStats />
    </LandingLayoutView>
  );
}

export default CommunityStatsPage;
