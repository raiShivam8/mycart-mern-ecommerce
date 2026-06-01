import "./css/supportPages.css";

function BecomeSeller() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
      type: "seller",
    };

    const res = await fetch("https://mycart-mern-ecommerce.onrender.com/api/support", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    alert(data.message || "Seller request submitted successfully");
    form.reset();
  };

  return (
    <section className="support-page">
      <div className="support-container">
        <div className="support-hero">
          <h1>Become a Seller</h1>
          <p>Start selling your products on MyCart and grow your business online.</p>
        </div>

        <div className="support-grid">
          <div className="support-card">
            <h2>Seller Registration</h2>

            <form className="support-form" onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder="Business / Owner Name" required />
              <input name="email" type="email" placeholder="Business Email" required />
              <input name="phone" type="text" placeholder="Mobile Number" required />
              <input name="subject" type="text" placeholder="Business Category" required />

              <textarea
                name="message"
                placeholder="Tell us about your business..."
                required
              ></textarea>

              <button type="submit">Apply Now</button>
            </form>
          </div>

          <div className="support-card">
            <h2>Why Sell on MyCart?</h2>

            <div className="support-box">
              <h3>Huge Customer Base</h3>
              <p>Reach customers across India.</p>
            </div>

            <div className="support-box">
              <h3>Easy Product Management</h3>
              <p>Manage products, orders and stock easily.</p>
            </div>

            <div className="support-box">
              <h3>Fast Payments</h3>
              <p>Secure and quick seller payouts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BecomeSeller;