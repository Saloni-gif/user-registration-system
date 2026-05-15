import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dob: "",
    city: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.phone ||
      !formData.dob ||
      !formData.city ||
      !formData.state ||
      !formData.country
    ) {
      alert("Please fill all fields");
      return;
    }

    // Password Match Validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Console Output
    console.log("Form Submitted Successfully");

    console.log("First Name:", formData.firstName);
    console.log("Last Name:", formData.lastName);
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
    console.log("Phone:", formData.phone);
    console.log("Date of Birth:", formData.dob);
    console.log("City:", formData.city);
    console.log("State:", formData.state);
    console.log("Country:", formData.country);

    alert("Form Submitted Successfully");
  };

  return (
    <div className="container">

      <form className="form" onSubmit={handleSubmit}>

        <h1>Saloni's Registration Form</h1>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <input
          type="date"
          name="dob"
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          onChange={handleChange}
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={handleChange}
        />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default App;