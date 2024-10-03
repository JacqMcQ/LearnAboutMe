import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (name === "name" && !value) {
      newErrors.name = "Name is required";
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      newErrors.email = value ? "Email is invalid" : "Email is required";
    } else if (name === "message" && !value) {
      newErrors.message = "Message is required";
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); 
        } else {
          const errorData = await response.json();
          setErrors({ submit: errorData.message });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrors({ submit: "An error occurred while submitting the form." });
      }
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>
        {errors.submit && <span className="error">{errors.submit}</span>}
        <button type="submit">Submit</button>
        {successMessage && <span className="success">{successMessage}</span>}
      </form>
    </section>
  );
};

export default Contact;
