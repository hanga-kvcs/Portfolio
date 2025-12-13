"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <Layout>
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* LEFT SIDE — TEXT */}
        <div className="about-text">
          <h1 className="about-title">ABOUT</h1>

          <p className="about-paragraph">
            Hi! I’m Hanga Kovács, a passionate UX/UI designer with a focus on Human Interaction Design and a specialization in AI. My mission is to create intuitive, human-centered experiences that make technology accessible to everyone.
          </p>

          <p className="about-paragraph">
            I thrive at the intersection of creativity and innovation, crafting solutions that address real-world challenges. From simplifying complex systems for low-literate individuals to designing immersive XR experiences, I approach each project with empathy and a focus on inclusivity.
          </p>

          <div className="about-links">
            <a
              href="mailto:k.hanga03@gmail.com"
              className="about-link header-link"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/hanga-kov%C3%A1cs-463925199/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link header-link"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="about-image">
          <img src="/images/about-me.jpg" alt="Hanga Kovács" />
        </div>
      </motion.section>
    </Layout>
  );
}
