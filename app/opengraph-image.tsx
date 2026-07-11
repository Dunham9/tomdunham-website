import { ImageResponse } from "next/og";

export const alt = "Tom Dunham — Writer, Director and Development Producer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await fetch(
    new URL("../public/branding/td-logo.png", import.meta.url)
  ).then((response) => response.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#f8f6f1",
          padding: "0 110px",
          color: "#181818",
        }}
      >
        <img
          src={logo as unknown as string}
          alt=""
          width="74"
          height="74"
          style={{
            objectFit: "contain",
            marginRight: "38px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "58px",
              lineHeight: 1,
              letterSpacing: "-1px",
            }}
          >
            Tom Dunham
          </div>

          <div
            style={{
              marginTop: "18px",
              fontFamily: "Arial, sans-serif",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "rgba(24, 24, 24, 0.55)",
            }}
          >
            Writer · Director · Development Producer
          </div>
        </div>
      </div>
    ),
    size
  );
}