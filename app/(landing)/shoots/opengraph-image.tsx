import { ImageResponse } from "next/og";

import OpenGraphImage from "@hhs/components/custom/og-image";
import {
  OG_IMAGE,
  SHOOTS_DESCRIPTION,
  SHOOTS_TITLE,
  SITE_TITLE,
} from "@hhs/constants/metadata";
import { getBoldFont, getRegularFont } from "@hhs/utils/fonts";

export const alt = `${SHOOTS_TITLE} - ${SITE_TITLE}`;
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

  return new ImageResponse(
    (
      <OpenGraphImage
        title={SHOOTS_TITLE}
        subtitle={SITE_TITLE}
        description={SHOOTS_DESCRIPTION}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 22H4a2 2 0 0 1-2-2V6" />
            <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
            <circle cx="12" cy="8" r="2" />
            <rect width="16" height="16" x="6" y="2" rx="2" />
          </svg>
        }
      />
    ),
    {
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
    }
  );
}
