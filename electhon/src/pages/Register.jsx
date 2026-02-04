import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import "../styles/register.css";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzrrvdM1votcYR5XWtBS8ucfkvnXCYGXve1DV03sfuJXj4x7613upPZly_G6MuJXVg/exec";

export default function Register() {
  const [formData, setFormData] = useState({
    teamName: "",
    leadName: "",
    leadRoll: "",
    leadEmail: "",
    leadPhone: "",
    member2Name: "",
    member2Roll: "",
    member3Name: "",
    member3Roll: "",
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

    if (!formData.teamName) e.teamName = "Please enter your Team Name";
    if (!formData.leadName) e.leadName = "Please enter your Team Lead Name";
    if (!formData.leadRoll) e.leadRoll = "Please enter your Team Lead Roll No";

    if (!formData.leadEmail)
      e.leadEmail = "Please enter college Email ID";
    else if (!/^[a-z]+\.\d{2}[a-z]{3}@kongu\.edu$/.test(formData.leadEmail))
      e.leadEmail =
        "Email must be in format (ananths.23eee@kongu.edu)";

    if (!formData.leadPhone)
      e.leadPhone = "Please enter your Mobile Number";
    else if (!/^[6-9]\d{9}$/.test(formData.leadPhone))
      e.leadPhone =
        "Mobile number must be 10 digits and start with 6-9";

    if (formData.member2Name && !formData.member2Roll)
      e.member2 = "Please fill Roll No for Teammate 2";

    if (formData.member3Name && !formData.member3Roll)
      e.member3 = "Please fill Roll No for Teammate 3";

    if (!formData.problemStatement)
      e.problemStatement = "Please enter your Problem Statement";

    if (!formData.abstract)
      e.abstract = "Please enter your Abstract";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!result.success) {
        throw new Error(result.error || "Submission failed");
      }

      alert("Registration Successful 🚀");

      setFormData({
        teamName: "",
        leadName: "",
        leadRoll: "",
        leadEmail: "",
        leadPhone: "",
        member2Name: "",
        member2Roll: "",
        member3Name: "",
        member3Roll: "",
        problemStatement: "",
        abstract: "",
      });

      setErrors({});
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <section className="register">
        <video
          className="bg-video"
          src="/bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <h2>Join the Outlaws</h2>

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

          {/* Teammates */}
          <div className="member-grid">
            <div className="form-card">
              <h3>TEAMMATE 2 (OPTIONAL)</h3>
              <input
                name="member2Name"
                placeholder="Name"
                value={formData.member2Name}
                onChange={handleChange}
              />
              <input
                name="member2Roll"
                placeholder="Roll No"
                value={formData.member2Roll}
                onChange={handleChange}
              />
              {errors.member2 && <span>{errors.member2}</span>}
            </div>

            <div className="form-card">
              <h3>TEAMMATE 3 (OPTIONAL)</h3>
              <input
                name="member3Name"
                placeholder="Name"
                value={formData.member3Name}
                onChange={handleChange}
              />
              <input
                name="member3Roll"
                placeholder="Roll No"
                value={formData.member3Roll}
                onChange={handleChange}
              />
              {errors.member3 && <span>{errors.member3}</span>}
            </div>
          </div>

          {/* Idea */}
          <div className="form-card">
            <h3>IDEA DETAILS</h3>

            <input
              name="problemStatement"
              placeholder="Problem Statement"
              value={formData.problemStatement}
              onChange={handleChange}
            />
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

          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? "Submitting..." : "REGISTER NOW"}
          </button>
        </form>
      </section>
    </PageWrapper>
  );
}
