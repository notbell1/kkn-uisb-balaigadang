import React from "react";
import { VillageHero } from "../components/village/VillageHero";
import { VillageProfile } from "../components/village/VillageProfile";
import { VillageMap } from "../components/village/VillageMap";
import { VillageFacilities } from "../components/village/VillageFacilities";

import { getVillageData } from "../lib/csv/village";

export const VillagePage: React.FC = () => {
  const villageData = getVillageData();

  return (
    <main>
      <VillageHero villageData={villageData} />
      <VillageProfile villageData={villageData} />
      <VillageMap villageData={villageData} />
      <VillageFacilities villageData={villageData} />
    </main>
  );
};
