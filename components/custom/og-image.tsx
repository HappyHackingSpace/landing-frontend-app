import * as React from "react";
import { SITE } from "@hhs/constants/metadata";

interface OpenGraphImageProps {
  title?: string;
  subtitle?: string;
  description?: string;
  icon?: React.ReactNode;
  url?: string;
  page?: string;
}

const OpenGraphImage: React.FC<OpenGraphImageProps> = ({
  title,
  subtitle,
  description,
  icon,
}) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
      }}
    >
      {icon && (
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            top: 72,
            right: 72,
            display: "flex",
          }}
        >
          {icon}
        </div>
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom, #8080800a 1px, transparent 1px)",
          backgroundSize: "14px 24px",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 72,
          left: 72,
          fontSize: "2rem",
          lineHeight: 1,
          fontWeight: 600,
        }}
      >
        {subtitle ?? "Community"}
      </div>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          position: "absolute",
          bottom: 72,
          left: 72,
          width: "70%",
        }}
      >
        <span
          style={{
            fontSize: "4rem",
            lineHeight: 1,
            fontWeight: 700,
          }}
        >
          {title ?? SITE.title}
        </span>

        <span
          style={{
            fontSize: "2.4rem",
            lineHeight: "2.4rem",
            marginTop: "1rem",
          }}
        >
          {description ?? SITE.description}
        </span>
      </span>
    </div>
  );
};

export default OpenGraphImage;
