import { motion } from "framer-motion";
import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import "../styles/problems.css";

const hardwareProblems = [
  {
    title: "Smart Energy Meter with Tampering Detection System",
    file: "/problem-statements/hardware/PS1_Smart_Energy_Meter.docx",
  },
  {
    title: "Smart Hybrid Surge Detection and Backup Storage System",
    file: "/problem-statements/hardware/PS2_Hybrid_Surge_Backup.docx",
  },
  {
    title: "Battery Theft Detection in EV with Monitoring System",
    file: "/problem-statements/hardware/PS3_EV_Battery_Theft.docx",
  },
  {
    title: "Wireless Home Automation with Overload Protection",
    file: "/problem-statements/hardware/PS4_Home_Automation.docx",
  },
];

const softwareProblems = [
  {
    title: "ChargeSense – Smart EV Log Analysis Platform",
    file: "/problem-statements/software/PS1_ChargeSense.docx",
  },
  {
    title: "VisionForge – AI-Based CNC Inspection Software",
    file: "/problem-statements/software/PS2_VisionForge.docx",
  },
];

export default function Problems() {
  const [openType, setOpenType] = useState(null);

  const problems =
    openType === "hardware"
      ? hardwareProblems
      : openType === "software"
      ? softwareProblems
      : [];

  return (
    <PageWrapper>
      <section className="problems">
        <video
          className="bg-video"
          src="/bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <h2>Problem Statements</h2>

        <div className="problem-grid">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="problem-card"
            onClick={() => setOpenType("hardware")}
          >
            <h3>Hardware</h3>
            <p>Smart grids, renewable devices, energy systems.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="problem-card"
            onClick={() => setOpenType("software")}
          >
            <h3>Software</h3>
            <p>AI, analytics, inspection & optimization platforms.</p>
          </motion.div>
        </div>

        {/* POPUP MODAL */}
        {openType && (
          <div className="modal-overlay" onClick={() => setOpenType(null)}>
            <motion.div
              className="modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>
                {openType === "hardware"
                  ? "Hardware Problem Statements"
                  : "Software Problem Statements"}
              </h3>

              <ul className="ps-list">
                {problems.map((ps, index) => (
                  <li key={index}>
                    <span>{ps.title}</span>
                    <a href={ps.file} download>
                      Download
                    </a>
                  </li>
                ))}
              </ul>

              <button className="close-btn" onClick={() => setOpenType(null)}>
                Close
              </button>
            </motion.div>
          </div>
        )}
      </section>
    </PageWrapper>
  );
}
