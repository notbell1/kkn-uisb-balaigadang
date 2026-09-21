import rawData from "../../data/village.json";
import { VillageData } from "../../types/village";

export function getVillageData(): VillageData {
  if (!rawData || typeof rawData !== "object") {
    console.error("Village JSON tidak valid:", rawData);
    return {
      area: "106.9 km²",
      rw: "14",
      rt: "58",
      population: "±20.000",
      facilities: "81",
      potentials: "25",
      subdistrict: "Kecamatan Koto Tangah",
      city: "Kota Padang",
      province: "Sumatera Barat",
      postal_code: "25171",
      history: "",
      vision: "",
      health_facilities: "",
      education_facilities: "",
      worship_facilities: "",
      office_facilities: "",
      leading_potential: "",
    };
  }

  return rawData as VillageData;
}
