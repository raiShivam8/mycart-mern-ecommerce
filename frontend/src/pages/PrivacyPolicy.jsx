import "./css/supportPages.css";

function PrivacyPolicy() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: "Privacy Request",
      message: form.message.value,
      type: "privacy",
    };

    const res = await fetch("https://mycart-mern-ecommerce.onrender.com/api/support", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    alert(data.message || "Privacy request submitted successfully");
    form.reset();
  };

  return (
    <section className="support-page">
      <div className="support-container">
        <div className="support-hero">
          <h1>Privacy Policy</h1>
          <p>We protect your personal information and use it only to improve your shopping experience.</p>
        </div>

        <div className="support-grid">
          <div className="support-card">
            <h2>How We Use Your Data</h2>

            <div className="support-box">
              <h3>Account Data</h3>
              <p>Your name, email and phone are used for login and order updates.</p>
            </div>

            <div className="support-box">
              <h3>Order Data</h3>
              <p>Your address and order details are used only for delivery and support.</p>
            </div>

            <div className="support-box">
              <h3>Security</h3>
              <p>Passwords are securely hashed and sensitive data is not shared publicly.</p>
            </div>
          </div>

          <div className="support-card">
            <h2>Privacy Request</h2>

            <form className="support-form" onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder="Your Name" required />
              <input name="email" type="email" placeholder="Your Email" required />
              <input name="phone" type="text" placeholder="Mobile Number" />

              <textarea
                name="message"
                placeholder="Request data update, deletion, or privacy support..."
                required
              ></textarea>

              <button type="submit">Submit Privacy Request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;