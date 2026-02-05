import { motion } from "framer-motion";
import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import "../styles/problems.css";

const hardwareTitles = [
  "Smart Energy Meter with Tampering Detection System",
  "Smart Hybrid Surge Detection and Backup Storage System",
  "Battery Theft Detection in EV with Monitoring System",
  "Wireless Home Automation with Overload Protection",
];

const softwareTitles = [
  "ChargeSense – Smart EV Log Analysis Platform",
  "VisionForge – AI-Based CNC Inspection Software",
];

export default function Problems() {
  const [openType, setOpenType] = useState(null);

  const titles =
    openType === "hardware"
      ? hardwareTitles
      : openType === "software"
      ? softwareTitles
      : [];

  const downloadFile =
    openType === "hardware"
      ? "/problem-statements/hardware/Hardware_Problem_Statements.pdf"
      : "/problem-statements/software/Software_Problem_Statements.pdf";

  return (
    <PageWrapper>
      <section className="problems">
       

        <h2>Problem Statements</h2>

        <div className="problem-grid">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="problem-card"
            onClick={() => setOpenType("hardware")}
          >
            <h3>Hardware</h3>
            <p>Smart grids, renewable devices, automation systems.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="problem-card"
            onClick={() => setOpenType("software")}
          >
            <h3>Software</h3>
            <p>AI analytics, inspection platforms, data intelligence.</p>
          </motion.div>
        </div>

        {/* POPUP MODAL */}
        {openType && (
          <div className="modal-overlay" onClick={() => setOpenType(null)}>
            <motion.div
              className="modal"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>
                {openType === "hardware"
                  ? "Hardware Problem Statements"
                  : "Software Problem Statements"}
              </h3>

              <ul className="ps-list">
                {titles.map((title, index) => (
                  <li key={index}>
                    <span>{title}</span>
                  </li>
                ))}
              </ul>

              <a className="download-all" href={downloadFile} download>
                Download Full Problem Statements
              </a>

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