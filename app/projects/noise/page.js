"use client";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function LowLiteracyApp() {
return ( <Layout>
<motion.section
className="project-page"
>
{/* --- MAIN TITLE --- */} <h1 className="project-main-title">NOISE CONTROL CAMPAIGN</h1>

    {/* --- INTRO TEXT --- */}
    <p className="project-intro">
        Starting from the beginning of 2023, a new law in the Netherlands requires primary school children to have at least two hours of physical education every week. This means that physical education teachers will need to spend more time in gym halls. However, the noise levels in gym halls are often higher than 90 dB(A) over an 8-hour workday. This is equivalent to the constant decibel value of a leaf blower or a subway train. Even before the new law, many physical education teachers were already suffering from the effects of high noise levels in these gym halls. Exposure to high decibel values can cause concentration problems, hearing loss, headaches, and even tinnitus.
    </p>

    {/* --- FULL-WIDTH IMAGE --- */}
    <div className="project-image-full">
      <img src="/images/Noise banner.png" alt="Low Literacy App Mockup" />
    </div>

    {/* --- SUBTITLE + PARAGRAPH --- */}
    <div className="project-section">
      <h2 className="project-subtitle">goal</h2>
      <p className="project-text">
        The goal of our organisation is to gain more insight into the problem of excessive noise pollution and take control of the noise levels in the gym hall. We are hoping to increase public awareness of hearing loss, tinnitus, and other negative impacts of loud noise. We want to educate people about the impact of loud noises and the lack of solutions for conditions like tinnitus and encourage them to make healthier decisions regarding their hearing.
      </p>
    </div>

    {/* --- SUBTITLE + SIDE TEXT + IMAGE --- */}
    <div className="project-split">
      <div className="project-split-text">
        <h2 className="project-subtitle">ideation</h2>
        <p className="project-text">
          As the project was already in works when I started working on it I got all the access to their previously made research. I started ideating right away, this included making a lotus blossom chart to figure out what ways can the campaign be the most effective.
        </p>
      </div>
    </div>
    <div className="project-split-image">
      <img src="/images/Noise_01.png" alt="Design Process" />
    </div>

    <div className="project-split">
      <div className="project-split-text">
        <h2 className="project-subtitle">prototype</h2>
        <p className="project-text">
          After deciding on creating a VR video experience, the first step for that was to create a storyboard. Making this helped setting the story in the most ideal way for the shooting as well as see what equipment is needed for this process.
        </p>
      </div>
    </div>
    <div className="project-split-image">
      <img src="/images/Noise_02.jpeg" alt="Design Process" />
    </div>

    <div className="project-split">
      <div className="project-split-text">
        <h2 className="project-subtitle">demo</h2>
        <p className="project-text">
          The main idea to raise awareness was to create a VR video. I decide to join a small team to create this VR simulation. The purpose is to show people how it feels to live with tinnitus. Since it’s a VR simulation they can experience all the different effect of the levels of this problem. To define the story the scene starts at a volleyball game, as those can be really loud in gymnasiums, then the character of the story goes to a club. The following day when they go to the gym they slowly start to experience tinnitus.
        </p>
      </div>
    </div>
    <video width="320" height="240" controls>
      <source src="/images/Noise_03.mp4" type="video/mp4"></source>
    </video>

    <div className="project-split">
      <div className="project-split-text">
        <h2 className="project-subtitle">posters</h2>
        <p className="project-text">
          One of my tasks during the project was to create posters that can be used as marketing materials. I decided to create both the usual static posters, that can be easily printable as well as make a dynamic poster. The idea for the dynamic poster was to put it on screens, that can be found around train stations, or even at the Eindhoven Sport Centre. These can grab the attention of people better with the movement and vibrant colors.
        </p>
      </div>
    </div>
    <div className="project-split-image">
    <img src="/images/Noise_04.jpg" alt="Poster Design" />

    <video controls>
        <source src="/images/Noise_05.mp4" type="video/mp4" />
    </video>
    </div>


  </motion.section>
</Layout>

);
}
