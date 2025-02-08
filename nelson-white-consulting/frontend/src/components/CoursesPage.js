import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const CoursesPage = () => {
  // Replace with your actual Stripe publishable key
  const stripeKey = "your-stripe-publishable-key-here";

  const onToken = async (token) => {
    try {
      // Replace user_id with your actual authenticated user ID
      const user_id = 1;
      const response = await axios.post("http://localhost:5000/api/subscribe", {
        stripeToken: token.id,
        user_id: user_id,
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Subscription error:", error);
      alert("There was an error processing your payment.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to Course</h1>
      <p>This page is only available for members.</p>
      <div style={{ border: "1px solid #555", padding: "20px", borderRadius: "8px", display: "inline-block" }}>
        <h2>Decentralization 101 for Business Owners: Navigating the Future of Web3 and Blockchain</h2>
        <h3>$5.00 Every week</h3>
        <p>
          ✓ Over 20 hours of video content<br />✓ Unlimited lifetime access
        </p>
        <StripeCheckout
          stripeKey={stripeKey}
          token={onToken}
          amount={500} // Amount in cents
          name="Subscription Payment"
          description="Decentralization 101 Subscription"
          currency="USD"
        >
          <button style={{ margin: "10px", padding: "10px 20px" }}>Sign Up</button>
        </StripeCheckout>
        <br />
        <button style={{ marginTop: "10px", padding: "10px 20px" }}>Log In</button>
      </div>
    </div>
  );
};

export default CoursesPage;
