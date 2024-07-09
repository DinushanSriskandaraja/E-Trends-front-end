import React, { useState } from "react";
import "./DonationPage.css";

const DonationPage = () => {
  const [amount, setAmount] = useState("");

  const handleDonate = () => {
    alert(`Donating $${amount}`);
  };

  return (
    <div className="page">
      <h1> Donate </h1>{" "}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleDonate}> Donate </button>{" "}
    </div>
  );
};

export default DonationPage;
