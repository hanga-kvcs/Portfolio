"use client";
import Layout from "../../../components/Layout";
import { motion } from "framer-motion";

export default function LowLiteracyApp() {
return ( <Layout>
<motion.section
className="project-page"
>
{/* --- MAIN TITLE --- */} <h1 className="project-main-title">BRANDING FOR LONG COVID APP</h1>

    {/* --- INTRO TEXT --- */}
    <p className="project-intro">
      After a Covid-19 infection, some people continue to experience symptoms for weeks, months, or even years. They may feel extreme fatigue, muscle pain, shortness of breath, or “brain fog” problems with memory and concentration. This condition is called Long Covid. It affects millions of people worldwide and can have a big impact on daily life.<br /><br />
      Despite the scale of the problem, there are still very few digital tools that help these people manage their energy in a practical, supportive, human way.
    </p>

    {/* --- FULL-WIDTH IMAGE --- */}
    <div className="project-image-full">
      <img src="/images/covid_banner.png" alt="Low Literacy App Mockup" />
    </div>

    {/* --- SUBTITLE + PARAGRAPH --- */}
    <div className="project-section">
      <h2 className="project-subtitle">goal</h2>
      <p className="project-text">
        The goal of this project is to create a human-centered brand identity for Long Covid Buddy, a mobile app that helps people recovering from Long Covid manage their energy and prevent overexertion.<br /><br />

        The client would like to have a name, logo, and complete branding identity that communicates warmth, trust, and support. The branding should make users feel understood and encouraged, rather than medicalized or overwhelmed. Ultimately the goal is to design a brand that reflects the mission: Helping people with Long Covid regain a sense of balance, confidence, and control in their daily lives.
      </p>
    </div>

    {/* --- SUBTITLE + SIDE TEXT + IMAGE --- */}
    <div className="project-split">
      <div className="project-split-text">
        <h2 className="project-subtitle">research</h2>
        <p className="project-text">
          Setting up the project and talking to the client made it clear that this project needs a lot of research and empathy, for which the target audience’s involvement is essential. Once all the research questions were defined, I headed into finding people suffering from Long COVID to conduct interviews with them. These interviews focused on how their everyday life is affected and whether they use any healthcare apps or other forms of support.
        </p>
      </div>
    </div>
    <div className="project-split-image">
      <img src="/images/covid_2.png" alt="Design Process" />
    </div>

    <div className="project-split">
      <div className="project-split-text">
        <h2 className="project-subtitle">ideation</h2>
        <p className="project-text">
          In the beginning, it was completely up to me to decide the tone of the branding and recommend all the elements for it. I tried to keep it simple but interesting, as my research showed that a small amount of visual boldness can help evoke more trust from a younger target audience. All these different ideas were presented to the client who liked some elements, but wanted something that was less playful and that radiated more energy.
        </p>
      </div>
    </div>
    <div className="project-split-image">
      <img src="/images/covid_3.png" alt="Design Process" />
    </div>

    <div className="project-split">
      <div className="project-split-text">
        <h2 className="project-subtitle">design</h2>
        <p className="project-text">
          To create the design and brand of the app, the opening page was the main focus, as it represents the ideas of my team and me. The designs went through drastic changes in the beginning to find the right tone and colors that both the client and the users would be satisfied with. Throughout this process, the name was also changing and more ideas came up, until we were able to finalize it as a combination of two names, creating “PaceMe.”
        </p>
      </div>
    </div>
    <div className="project-split-image">
      <img src="/images/covid_4.png" alt="Design Process" />
    </div>

    <div className="project-split">
      <div className="project-split-text">
        <h2 className="project-subtitle">demo</h2>
        <p className="project-text">
          To showcase what the product looks like I created a demo video at the end of the internship with the prototypes I had. This video is used at the final stakeholder presentation as well as the company will use it later on at various events to connect with more students and professionals.
        </p>
      </div>
    </div>
    <video autoPlay loop muted playsInline width="320" height="240" controls>
      <source src="/images/long_covid_vid.mp4" type="video/mp4"></source>
    </video>

    <div className="project-section">
      <p className="project-text">
        According to the client’s current plans, the app will launch around the summer on the Google Play Store. Initially, it will be available only in Dutch, but there are plans to gradually expand the project to reach more countries across Europe.
      </p>
    </div>
      <div className="project-image-full">
      <img src="/images/covid_5.png" alt="Design Process" />
    </div>

  </motion.section>
</Layout>

);
}
