import { ImageResponse } from "next/og";

import OpenGraphImage from "@hhs/components/custom/og-image";
import { OG_IMAGE, SITE_TITLE } from "@hhs/constants/metadata";
import { getBoldFont, getRegularFont } from "@hhs/utils/fonts";

export const alt = SITE_TITLE;
export const size = {
  width: OG_IMAGE.width,
  height: OG_IMAGE.height,
};
export const contentType = OG_IMAGE.type;

export default async function Image() {
  const [regularFontData, boldFontData] = await Promise.all([
    getRegularFont(),
    getBoldFont(),
  ]);

  return new ImageResponse(<OpenGraphImage />, {
    ...size,
    fonts: [
      {
        name: "Geist",
        data: regularFontData,
        style: "normal",
        weight: 400,
      },
      {
        name: "Geist",
        data: boldFontData,
        style: "normal",
        weight: 600,
      },
    ],
  });
}
