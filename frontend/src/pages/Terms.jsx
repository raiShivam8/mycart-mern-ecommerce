import "./css/supportPages.css";

function Terms() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: "Terms Query",
      message: form.message.value,
      type: "terms",
    };

    const res = await fetch("https://mycart-mern-ecommerce.onrender.com/api/support", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    alert(data.message || "Terms query submitted successfully");
    form.reset();
  };

  return (
    <section className="support-page">
      <div className="support-container">
        <div className="support-hero">
          <h1>Terms of Service</h1>
          <p>Please read our terms carefully before using MyCart services.</p>
        </div>

        <div className="support-grid">
          <div className="support-card">
            <h2>Shopping Terms</h2>

            <div className="support-box">
              <h3>Account Responsibility</h3>
              <p>Users must provide correct name, email, phone and address while placing orders.</p>
            </div>

            <div className="support-box">
              <h3>Order Policy</h3>
              <p>Orders are confirmed after checkout and may be cancelled before shipping.</p>
            </div>

            <div className="support-box">
              <h3>Payment Policy</h3>
              <p>Payments can be made using COD, UPI, cards or other available options.</p>
            </div>
          </div>

          <div className="support-card">
            <h2>Need Help With Terms?</h2>

            <form className="support-form" onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder="Your Name" required />
              <input name="email" type="email" placeholder="Your Email" required />
              <input name="phone" type="text" placeholder="Mobile Number" />

              <textarea
                name="message"
                placeholder="Ask your question about terms or policies..."
                required
              ></textarea>

              <button type="submit">Submit Query</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Terms;