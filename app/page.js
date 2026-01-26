"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  const projectsRef = useRef(null);

  // Project data (images are in /public/images)
  const projects = [
      {
      id: "covid",
      index: "01",
      title: "Branding for Long COVID app",
      client: "Fontys Delta",
      year: "2025",
      img: "/images/covid_1_bw.png",
      imgHover: "/images/covid_1.png",
      href: "/projects/covid/",
    },
    {
      id: "low-literacy",
      index: "02",
      title: "App to help low literate people",
      client: "Mindlabs / The Tailors",
      year: "2025",
      img: "/images/MediUitleg_bw.png",
      imgHover: "/images/MediUitleg.png",
      href: "/projects/low-literacy/",
    },
    {
      id: "noise",
      index: "03",
      title: "Noise Control",
      client: "Lectorate Fontys ICT / Fontys Paramedic",
      year: "2024",
      img: "/images/Noise_bw.png",
      imgHover: "/images/Noise.png",
      href: "/projects/noise/",
    },
    {
      id: "eartag",
      index: "04",
      title: "AI Research",
      client: "DAP Thewi",
      year: "2024",
      img: "/images/Eartag_bw.png",
      imgHover: "/images/Eartag.png",
      href: "/projects/ai/",
    },
  ];

  const [active, setActive] = useState(0);
  const [hoveringImage, setHoveringImage] = useState(false);

  function next() {
    setActive((s) => Math.min(projects.length - 1, s + 1));
  }
  function prev() {
    setActive((s) => Math.max(0, s - 1));
  }

  return (
    <Layout>
      {/* HERO */}
      <section className="hero" style={{ height: "100vh", position: "relative" }}>
        {/* Decorative elements */}
        <motion.img
          src="/images/sun.png"
          alt=""
          className="hero-deco hero-sun"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.img
          src="/images/star.png"
          alt=""
          className="hero-deco hero-star"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Text */}
        <h1 className="hero-title">
          UI/UX <br /> INTERACTIVE
        </h1>
        <h1 className="hero-designer">DESIGNER</h1>
      </section>


      {/* PROJECTS WRAPPER */}
      <section
        ref={projectsRef}
        className="projects-wrapper"
        id="projects"
        style={{ height: "200vh", position: "relative" }} /* shorter because no scroll-driven animation */
      >
        <div
          className="projects-sticky"
          style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}
        >
          <h1 className="projects-title">PROJECTS</h1>

          {/* Slides: render all slides, only active is interactive */}
          {projects.map((p, i) => {
            const isActive = i === active;
            return (
              <motion.div
                key={p.id}
                  className="project-slide"
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  style={{
                    pointerEvents: isActive ? "auto" : "none",
                    zIndex: isActive ? 2 : 1,
                  }}
              >
                <div className="project-left">
                  <div className="project-index">{p.index}</div>
                  <h2 className="project-name">{p.title}</h2>
                  <p className="project-client">{p.client}</p>

                  {/* see-more triggers hover swap when hovering */}
                  <Link
                    href={p.href}
                    className="see-more"
                    onMouseEnter={() => setHoveringImage(true)}
                    onMouseLeave={() => setHoveringImage(false)}
                    aria-label={`Open project ${p.title}`}
                  >
                    Learn More →
                  </Link>

                  <div className="project-footer-meta">
                    <span>{p.year}</span>
                    <span>Featured:</span>
                    <span>{p.client.split("/")[0].trim()}</span>
                  </div>
                </div>

                {/* Wrap image in Link so clicking navigates */}
                <Link
                  href={p.href}
                  className="project-image-wrap"
                  onMouseEnter={() => setHoveringImage(true)}
                  onMouseLeave={() => setHoveringImage(false)}
                >
                  <img
                    className="project-image"
                    src={hoveringImage && isActive ? p.imgHover : p.img}
                    alt={p.title}
                    draggable="false"
                    // keep data attributes in case you want them later
                    data-normal={p.img}
                    data-hover={p.imgHover}
                  />
                </Link>
              </motion.div>
            );
          })}

          {/* Arrow controls bottom-right */}
          <div className="project-arrows">
            <button
              className="arrow-btn"
              onClick={prev}
              disabled={active === 0}
              aria-label="Previous project"
            >
              ‹
            </button>

            <button
              className="arrow-btn"
              onClick={next}
              disabled={active === projects.length - 1}
              aria-label="Next project"
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
