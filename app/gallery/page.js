"use client";
import Layout from "@/components/Layout";
import Image from "next/image";

const artworks = [
  { src: "/images/Gallery_02.png", alt: "Artwork 1", type: "image" },
  { src: "/images/Gallery_05.mp4", alt: "Artwork 2", type: "video" },
  { src: "/images/Gallery_03.png", alt: "Artwork 3", type: "image" },
  { src: "/images/Gallery_10.mp4", alt: "Artwork 4", type: "video" },
  { src: "/images/Gallery_06.mp4", alt: "Artwork 5", type: "video" },
  { src: "/images/Gallery_01.png", alt: "Artwork 6", type: "image" },
  { src: "/images/Gallery_07.mp4", alt: "Artwork 7", type: "video" },
  { src: "/images/Gallery_09.png", alt: "Artwork 8", type: "image" },
  { src: "/images/Gallery_04.png", alt: "Artwork 9", type: "image" },
  { src: "/images/Gallery_08.mp4", alt: "Artwork 10", type: "video" },
];

export default function Gallery() {
  return (
    <Layout>
      <div className="gallery-page">
        <h1>MY ARTWORKS</h1>
        <div className="gallery-grid">
          {artworks.map((art, index) => (
            <div key={index} className="gallery-grid-item">
              {art.type === "image" ? (
                <Image
                  src={art.src}
                  alt={art.alt}
                  width={300}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                />
              ) : (
                <video
                  src={art.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
