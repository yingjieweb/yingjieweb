import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Yingjieweb — Full-stack developer building AI agents with Python, Next.js, React, and Vue";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const avatar = await readFile(
    join(process.cwd(), "public/assets/images/avatar.jpg"),
  );
  const avatarDataUrl = `data:image/jpeg;base64,${avatar.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 84px",
          color: "#002245",
          backgroundColor: "#f7f4ed",
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(99, 164, 255, 0.2) 0 3px, transparent 4px), radial-gradient(circle at 88% 82%, rgba(99, 164, 255, 0.2) 0 3px, transparent 4px)",
          backgroundSize: "48px 48px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: 660,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              color: "#63a4ff",
              marginBottom: 28,
            }}
          >
            YINGJIEWEB
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            Full-stack developer
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 34,
              fontWeight: 600,
              color: "#435b73",
            }}
          >
            Building AI agents
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 42,
              gap: 14,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {[
              ["Python", "#4b7eae"],
              ["Next.js", "#111111"],
              ["React", "#58bfe7"],
              ["Vue", "#42b883"],
            ].map(([label, color]) => (
              <span
                key={label}
                style={{
                  display: "flex",
                  padding: "10px 18px",
                  border: `2px solid ${color}`,
                  borderRadius: 999,
                  color,
                  backgroundColor: "rgba(255, 255, 255, 0.72)",
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            width: 350,
            height: 350,
            display: "flex",
            padding: 12,
            border: "4px solid #63a4ff",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            boxShadow: "18px 18px 0 rgba(0, 34, 69, 0.12)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarDataUrl}
            alt=""
            width="326"
            height="326"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
