"use client";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function LowLiteracyApp() {
return ( <Layout>
<motion.section
className="project-page"
>
{/* --- MAIN TITLE --- */} <h1 className="project-main-title">EAR-TAG DETECTION WITH AI</h1>

    {/* --- INTRO TEXT --- */}
    <p className="project-intro">
        The Netherlands is known for having huge agricultural infrastructure. A company of veterinarians reached out to us proposing a project. Their problem was the difficulty to identify cows, making it harder to locate the sick ones. The system they currently  use is to just write down the ear tag number on the fence with a chalk, but this can be hard to read and then find the cow with that exact number, as they’re turning their heads and moving around a lot. 
    </p>

    {/* --- FULL-WIDTH IMAGE --- */}
    <div className="project-image-full">
      <img src="/images/Eartag banner.png" alt="Low Literacy App Mockup" />
    </div>

    {/* --- SUBTITLE + PARAGRAPH --- */}
    <div className="project-section">
      <h2 className="project-subtitle">goal</h2>
      <p className="project-text">
        Utilizing machine learning techniques, a model will be developed to read the cow’s ear tag and then match the number on the ear tag with the I&R. The goal is to use machine learning to create a solution capable of processing videos and images with cows with high accuracy. <br></br>
        During this my main tasks were research, creating visuals and working with OCR which involved image preprocessing.
      </p>
    </div>

    {/* --- SUBTITLE + SIDE TEXT + IMAGE --- */}
    <div className="project-split">
      <div className="project-split-text">
        <h2 className="project-subtitle">analysis</h2>
        <p className="project-text">
          To start an AI project the dataset is the most important aspect. Analysing it helps understanding the problem and the current resources. In this case the cows that are located on one of the farms. This helped me to see the numbers and colors of them, making the model training easier.
        </p>
      </div>
    </div>
    <div className="project-split-image">
      <img src="/images/Eartag_01.png" alt="Design Process" />
    </div>

    <div className="project-split">
      <div className="project-split-text">
        <h2 className="project-subtitle">process</h2>
        <p className="project-text">
          In this project halfway through I had to showcase all the process so far to the client and other professionals that attended a small event my university organised. For this I created an infograph that explains the “why?”s and “how?”s.
        </p>
      </div>
    </div>
    <div className="project-split-image">
      <img src="/images/Eartag_02.png" alt="Design Process" />
    </div>

    <div className="project-split">
      <div className="project-split-text">
        <h2 className="project-subtitle">demo</h2>
        <p className="project-text">
          The demo of the project is made our of different parts of the technical aspects. As my main part was the text recognition from images and video frames I showcased that. On the left side is a picture of the cow with the eartag and on the right side we can see what the AI model was able read from the image.
        </p>
      </div>
    </div>
    <div className="project-split-image">
      <img src="/images/Eartag_03.png" alt="Poster Design" />
      <img src="/images/Eartag_04.png" alt="Poster Design" />
    </div>

  </motion.section>
</Layout>

);
}
