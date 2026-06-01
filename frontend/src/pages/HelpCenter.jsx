import "./css/supportPages.css";

function HelpCenter() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
      type: "complaint",
    };

    try {
      const res = await fetch("https://mycart-mern-ecommerce.onrender.com/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      alert("Your request has been submitted successfully");

      form.reset();

    } catch (err) {
      alert("Server Error");
    }
  };

  return (
    <section className="support-page">
      <div className="support-container">

        <div className="support-hero">
          <h1>Help Center</h1>

          <p>
            Need help with orders, payments, delivery, returns or complaints?
            Our support team is available 24/7.
          </p>
        </div>

        <div className="support-grid">

          <div className="support-card">

            <h2>Submit Complaint / Feedback</h2>

            <form className="support-form" onSubmit={handleSubmit}>

              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
              />

              <input
                name="subject"
                type="text"
                placeholder="Order ID / Subject"
              />

              <textarea
                name="message"
                placeholder="Write your complaint or feedback here..."
                required
              ></textarea>

              <button type="submit">
                Submit Request
              </button>

            </form>
          </div>

          <div className="support-info">

            <div className="support-card">

              <h2>Customer Support</h2>

              <div className="support-box">
                <h3>Call Support</h3>
                <p>+91 9876543210</p>
              </div>

              <div className="support-box">
                <h3>Email Support</h3>
                <p>support@mycart.com</p>
              </div>

              <div className="support-box">
                <h3>Working Hours</h3>
                <p>24/7 Customer Assistance</p>
              </div>

            </div>

            <div className="support-card">

              <h2>Frequently Asked Questions</h2>

              <div className="faq-item">
                <h4>How can I track my order?</h4>
                <p>Go to Orders page and click Track Order.</p>
              </div>

              <div className="faq-item">
                <h4>How do I cancel my order?</h4>
                <p>Orders can be cancelled before shipping.</p>
              </div>

              <div className="faq-item">
                <h4>Refund policy?</h4>
                <p>Refunds are processed within 5-7 business days.</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HelpCenter;