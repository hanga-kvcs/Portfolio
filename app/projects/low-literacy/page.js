"use client";
import Layout from "../../../components/Layout";
import { motion } from "framer-motion";

export default function LowLiteracyApp() {
return ( <Layout>
<motion.section
className="project-page"
>
{/* --- MAIN TITLE --- */} <h1 className="project-main-title">APP TO HELP LOW-LITERATE PEOPLE</h1>

    {/* --- INTRO TEXT --- */}
    <p className="project-intro">
      Low literacy is a fundamental problem that prevents nearly two million people (in the Netherlands alone) from fully participating in society as we know it today.<br /><br />
      People who are low literate can read and write, but they are slow and at a very basic level at it. Moreover, they often experience difficulties with math and digital skills. The lack of these basic skills limits these individuals' ability to actively participate in the community and society. The stakeholder, the Tailors, pointed out the problem the project is focusing on.
    </p>

    {/* --- FULL-WIDTH IMAGE --- */}
    <div className="project-image-full">
      <img src="/images/MediUitleg banner.png" alt="Low Literacy App Mockup" />
    </div>

    {/* --- SUBTITLE + PARAGRAPH --- */}
    <div className="project-section">
      <h2 className="project-subtitle">goal</h2>
      <p className="project-text">
        The goal of this project is to create a user-friendly AI solution that helps low-literate individuals better engage with digital tools, services, and information.<br /><br />

        The desired outcome is to develop an interface that empowers users with low literacy to access information and services more easily, enabling them to participate more fully in society. This solution should reduce the intimidation of interacting with digital systems, simplify complex information into manageable and understandable outputs, and provide a comfortable user experience through AI assistance.
      </p>
    </div>

    {/* --- SUBTITLE + SIDE TEXT + IMAGE --- */}
    <div className="project-split">
      <div className="project-split-text">
        <h2 className="project-subtitle">research</h2>
        <p className="project-text">
          I used different CMD methods to find information on the research question I defined for the project. These methods included literature study, design pattern search, benchmark creation as well as interviews. I then put all my findings in different mind maps. This research helped me with understanding how to design a product for this very specific target audience, these findings I got to use later when I worked on the UX/UI.
        </p>
      </div>
    </div>
    <div className="project-split-image">
      <img src="/images/MediUitleg_01.png" alt="Design Process" />
    </div>

    <div className="project-split">
      <div className="project-split-text">
        <h2 className="project-subtitle">ideation</h2>
        <p className="project-text">
          To find the best solution to the problem, I decided to do some pattern research on all the findings I had. For this I tried to look at connections such as design patterns, or target group problems and connect them. I also used some AI models for this, so my personal opinion doesn’t influence the results. <br /><br />
          The user case I defined was for a mobile app. With this app the users can scan the a medicine packaging, once done the app will simplify the content and explain the important details to the user with a possible audio option. 
        </p>
      </div>
    </div>
    <div className="project-split-image">
      <img src="/images/MediUitleg_02.png" alt="Design Process" />
    </div>

    <div className="project-split">
      <div className="project-split-text">
        <h2 className="project-subtitle">prototype</h2>
        <p className="project-text">
          Once the idea of creating a text scanning app got defined I looked into OCR. This is a model I used for a previous project before, so I already had a good idea on what to expect an how to fine tune it to fit this project.
        </p>
      </div>
    </div>
    <div className="project-split-image">
      <img src="/images/MediUitleg_03.png" alt="Design Process" />
    </div>

    <div className="project-split">
      <div className="project-split-text">
        <h2 className="project-subtitle">design</h2>
        <p className="project-text">
          I began the UX design by reviewing my research, focusing on simplicity, high contrast, familiar layouts, and clear symbols. The color scheme prioritizes visibility, using calming blue for trust and green for progression. Based on stakeholder feedback, I replaced text on the opening page with a guide video and added camera guidelines to help users take better pictures. A simple loading screen and an error page were included. Further refinements were made after user testing.
        </p>
      </div>
    </div>
    <div className="project-split-image">
      <img src="/images/MediUitleg_04.png" alt="Design Process" />
    </div>

    <div className="project-section">
      <p className="project-text">
        After a user testing event, I updated the UX/UI design based on key findings. The updated layout features an optional guide button instead of an initial video, a clear selection box for individual words after taking a picture, and a simple error screen with one action button.
      </p>
    </div>
      <div className="project-split-image">
      <img src="/images/MediUitleg_05.png" alt="Design Process" />
    </div>

    <div className="project-split">
      <div className="project-split-text">
        <h2 className="project-subtitle">testing</h2>
        <p className="project-text">
          The easiest way to test with this target group was to invite a research group to the office and make a questions session as well as testing session at once. Here I gained more insight on how they interact with technology and what they think about some of the design features I thought of. Afterwards I implemented most of the feedback I received.
        </p>
      </div>
    </div>
    <div className="project-split-image">
      <img src="/images/MediUitleg_06.png" alt="Design Process" />
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
      <source src="/images/MediUitleg_demo.mp4" type="video/mp4"></source>
    </video>

  </motion.section>
</Layout>

);
}
