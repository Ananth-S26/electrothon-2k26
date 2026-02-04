import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import "../styles/register.css";

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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};

    if (!formData.teamName) e.teamName = "Please enter your Team Name";
    if (!formData.leadName) e.leadName = "Please enter your Team Lead Name";
    if (!formData.leadRoll) e.leadRoll = "Please enter your Team Lead Roll No";
   
    if (!formData.leadEmail)
      e.leadEmail = "Please enter xyz Email ID";
    else if (
      !/^[a-z]+\.\d{2}[a-z]{3}@kongu\.edu$/.test(formData.leadEmail)
    )
      e.leadEmail =
        "Email must be in college mail format (ananths.23eee@kongu.edu)";

        if (!formData.leadPhone)
        e.leadPhone = "Please enter your Mobile Number";
      else if (!/^[6-9]\d{9}$/.test(formData.leadPhone))
        e.leadPhone = "Mobile number must be 10 digits and start with 6-9";
      
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
  
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxQQeH9q-pKyPmq5zu0OG-cuh6LR5Pi-jfs4RpBbKTJmOXeQClIPqaeKpAO5Rx1Xs5F/exec",
        {
          method: "POST",
          
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      // 🔥 ALWAYS succeeds if request is sent
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
  
    } catch (error) {
      alert("Network error. Please try later.");
      console.error(error);
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
            <input name="teamName" placeholder="Team Name" onChange={handleChange} />
            {errors.teamName && <span>{errors.teamName}</span>}
          </div>

          {/* Team Lead */}
          <div className="form-card">
            <h3>TEAM LEAD (MEMBER 1)</h3>

            <input name="leadName" placeholder="Name" onChange={handleChange} />
            {errors.leadName && <span>{errors.leadName}</span>}

            <input name="leadRoll" placeholder="Roll No" onChange={handleChange} />
            {errors.leadRoll && <span>{errors.leadRoll}</span>}

            <input name="leadEmail" placeholder="Email ID" onChange={handleChange} />
            {errors.leadEmail && <span>{errors.leadEmail}</span>}

            <input name="leadPhone" placeholder="Mobile Number" onChange={handleChange} />
            {errors.leadPhone && <span>{errors.leadPhone}</span>}
          </div>

          {/* Teammates 2 & 3 */}
          <div className="member-grid">
            <div className="form-card">
              <h3>TEAMMATE 2 (OPTIONAL)</h3>
              <input name="member2Name" placeholder="Name" onChange={handleChange} />
              <input name="member2Roll" placeholder="Roll No" onChange={handleChange} />
              {errors.member2 && <span>{errors.member2}</span>}
            </div>

            <div className="form-card">
              <h3>TEAMMATE 3 (OPTIONAL)</h3>
              <input name="member3Name" placeholder="Name" onChange={handleChange} />
              <input name="member3Roll" placeholder="Roll No" onChange={handleChange} />
              {errors.member3 && <span>{errors.member3}</span>}
            </div>
          </div>

          {/* Idea */}
          <div className="form-card">
            <h3>IDEA DETAILS</h3>

            <input
              name="problemStatement"
              placeholder="Problem Statement"
              onChange={handleChange}
            />
            {errors.problemStatement && <span>{errors.problemStatement}</span>}

            <textarea
              name="abstract"
              placeholder="Abstract"
              rows="4"
              onChange={handleChange}
            />
            {errors.abstract && <span>{errors.abstract}</span>}
          </div>

          <button type="submit" className="register-btn">
            REGISTER NOW
          </button>
        </form>
      </section>
    </PageWrapper>
  );
}
