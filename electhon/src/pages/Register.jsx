import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import "../styles/register.css";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwm4ELNP97zLo2sJPKcXUFg0Np6QrnJn_hgp3jJiEuPoFIz0ANQQc-5IuzWsWhFVsYl/exec";

export default function Register() {
  const [formData, setFormData] = useState({
    teamName: "",
    leadName: "",
    leadRoll: "",
    leadEmail: "",
    leadPhone: "",

    member2Name: "",
    member2Roll: "",
    member2Phone: "",

    member3Name: "",
    member3Roll: "",
    member3Phone: "",

    problemStatement: "",
    abstract: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const e = {};

    if (!formData.teamName) e.teamName = "Please enter Team Name";

    if (!formData.leadName) e.leadName = "Please enter Team Lead Name";
    if (!formData.leadRoll) e.leadRoll = "Please enter Team Lead Roll No";

    if (!formData.leadEmail)
      e.leadEmail = "Please enter College Email ID";
    else if (!/^[a-z]+\.\d{2}[a-z]{3}@kongu\.edu$/.test(formData.leadEmail))
      e.leadEmail = "Email must be like ananths.23eee@kongu.edu";

    if (!formData.leadPhone)
      e.leadPhone = "Please enter Mobile Number";
    else if (!/^[6-9]\d{9}$/.test(formData.leadPhone))
      e.leadPhone = "Invalid mobile number";

    // Teammate 2
    if (!formData.member2Name) e.member2Name = "Enter Teammate 2 Name";
    if (!formData.member2Roll) e.member2Roll = "Enter Teammate 2 Roll No";
    if (!formData.member2Phone)
      e.member2Phone = "Enter Teammate 2 Mobile Number";
    else if (!/^[6-9]\d{9}$/.test(formData.member2Phone))
      e.member2Phone = "Invalid mobile number";

    // Teammate 3
    if (!formData.member3Name) e.member3Name = "Enter Teammate 3 Name";
    if (!formData.member3Roll) e.member3Roll = "Enter Teammate 3 Roll No";
    if (!formData.member3Phone)
      e.member3Phone = "Enter Teammate 3 Mobile Number";
    else if (!/^[6-9]\d{9}$/.test(formData.member3Phone))
      e.member3Phone = "Invalid mobile number";

    if (!formData.problemStatement)
      e.problemStatement = "Select a Problem Statement";

    if (!formData.abstract) e.abstract = "Please enter Abstract";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      alert("Registration Successful 🚀");

      setFormData({
        teamName: "",
        leadName: "",
        leadRoll: "",
        leadEmail: "",
        leadPhone: "",

        member2Name: "",
        member2Roll: "",
        member2Phone: "",

        member3Name: "",
        member3Roll: "",
        member3Phone: "",

        problemStatement: "",
        abstract: "",
      });

      setErrors({});
    } catch (err) {
      alert("Submission failed. Try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <section className="register">
        <h2>Join The Hackathon</h2>

        <form className="register-form" onSubmit={handleSubmit}>
          {/* Team Info */}
          <div className="form-card">
            <h3>TEAM INFORMATION</h3>
            <input
              name="teamName"
              placeholder="Team Name"
              value={formData.teamName}
              onChange={handleChange}
            />
            {errors.teamName && <span>{errors.teamName}</span>}
          </div>

          {/* Team Lead */}
          <div className="form-card">
            <h3>TEAM LEAD (MEMBER 1)</h3>

            <input
              name="leadName"
              placeholder="Name"
              value={formData.leadName}
              onChange={handleChange}
            />
            {errors.leadName && <span>{errors.leadName}</span>}

            <input
              name="leadRoll"
              placeholder="Roll No"
              value={formData.leadRoll}
              onChange={handleChange}
            />
            {errors.leadRoll && <span>{errors.leadRoll}</span>}

            <input
              name="leadEmail"
              placeholder="Email ID"
              value={formData.leadEmail}
              onChange={handleChange}
            />
            {errors.leadEmail && <span>{errors.leadEmail}</span>}

            <input
              name="leadPhone"
              placeholder="Mobile Number"
              value={formData.leadPhone}
              onChange={handleChange}
            />
            {errors.leadPhone && <span>{errors.leadPhone}</span>}
          </div>

          {/* Members */}
          <div className="member-grid">
            <div className="form-card">
              <h3>TEAM MATE 2</h3>
              <input
                name="member2Name"
                placeholder="Name"
                value={formData.member2Name}
                onChange={handleChange}
              />
              {errors.member2Name && <span>{errors.member2Name}</span>}

              <input
                name="member2Roll"
                placeholder="Roll No"
                value={formData.member2Roll}
                onChange={handleChange}
              />
              {errors.member2Roll && <span>{errors.member2Roll}</span>}

              <input
                name="member2Phone"
                placeholder="Mobile Number"
                value={formData.member2Phone}
                onChange={handleChange}
              />
              {errors.member2Phone && <span>{errors.member2Phone}</span>}
            </div>

            <div className="form-card">
              <h3>TEAM MATE 3</h3>
              <input
                name="member3Name"
                placeholder="Name"
                value={formData.member3Name}
                onChange={handleChange}
              />
              {errors.member3Name && <span>{errors.member3Name}</span>}

              <input
                name="member3Roll"
                placeholder="Roll No"
                value={formData.member3Roll}
                onChange={handleChange}
              />
              {errors.member3Roll && <span>{errors.member3Roll}</span>}

              <input
                name="member3Phone"
                placeholder="Mobile Number"
                value={formData.member3Phone}
                onChange={handleChange}
              />
              {errors.member3Phone && <span>{errors.member3Phone}</span>}
            </div>
          </div>

          {/* Idea */}
          <div className="form-card">
            <h3>IDEA DETAILS</h3>

            <select
              name="problemStatement"
              value={formData.problemStatement}
              onChange={handleChange}
            >
              <option value="">Select Problem Statement</option>
              
              <option value="HS1: Smart Energy Meter with Tampering Detection System">
                HS1: Smart Energy Meter with Tampering Detection System
              </option>
              <option value="HS2: Smart Hybrid Surge Detection and Backup Storage System">
                HS2: Smart Hybrid Surge Detection and Backup Storage System
              </option>
              <option value="HS3: Battery Theft Detection in EV with Monitoring System">
                HS3: Battery Theft Detection in EV with Monitoring System
              </option>
              <option value="HS4: Wireless Home Automation with Overload Protection">
                HS4: Wireless Home Automation with Overload Protection
              </option>
              <option value="SS1: ChargeSense – Smart EV Log Analysis Platform">
                SS1: ChargeSense – Smart EV Log Analysis Platform
              </option>
              <option value="SS2: VisionForge – AI-Based CNC Inspection Software">
                SS2: VisionForge – AI-Based CNC Inspection Software
              </option>
            </select>

            {errors.problemStatement && (
              <span>{errors.problemStatement}</span>
            )}

            <textarea
              name="abstract"
              placeholder="Abstract"
              rows="4"
              value={formData.abstract}
              onChange={handleChange}
            />
            {errors.abstract && <span>{errors.abstract}</span>}
          </div>
              {/* WhatsApp Group Card */}
<div className="form-card">
  <h3>WHATSAPP GROUP</h3>

  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
    Join the official WhatsApp group for updates and announcements.
  </p>

  <a
    href="https://chat.whatsapp.com/FZgECIkLwcF9Gfga2PhxEf"
    target="_blank"
    rel="noopener noreferrer"
    className="register-btn"
    style={{
      width: "auto",
      padding: "14px 34px",
      marginTop: "20px",
      letterSpacing: "3px",
    }}
  >
    JOIN WHATSAPP GROUP
  </a>
</div>


          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? "Submitting..." : "REGISTER NOW"}
          </button>

         
        </form>
      </section>
    </PageWrapper>
  );
}
