import "./css/supportPages.css";

function GiftCards() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: `Gift Card Amount: ${form.amount.value}`,
      message: form.message.value,
      type: "gift-card",
    };

    const res = await fetch("https://mycart-mern-ecommerce.onrender.com/api/support", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    alert(data.message || "Gift card request submitted successfully");
    form.reset();
  };

  return (
    <section className="support-page">
      <div className="support-container">
        <div className="support-hero">
          <h1>Gift Cards</h1>
          <p>Send digital gift cards to your friends and family instantly.</p>
        </div>

        <div className="support-grid">
          <div className="support-card">
            <h2>Buy Gift Card</h2>

            <form className="support-form" onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder="Receiver Name" required />
              <input name="email" type="email" placeholder="Receiver Email" required />
              <input name="phone" type="text" placeholder="Your Mobile Number" />
              <input name="amount" type="number" placeholder="Gift Amount" required />

              <textarea
                name="message"
                placeholder="Write a gift message..."
                required
              ></textarea>

              <button type="submit">Purchase Gift Card</button>
            </form>
          </div>

          <div className="support-card">
            <h2>Gift Card Benefits</h2>

            <div className="support-box">
              <h3>Instant Delivery</h3>
              <p>Gift cards delivered via email.</p>
            </div>

            <div className="support-box">
              <h3>Secure Payments</h3>
              <p>100% safe online transactions.</p>
            </div>

            <div className="support-box">
              <h3>Use Anytime</h3>
              <p>Redeem easily during checkout.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GiftCards;