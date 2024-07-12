import React, { useState } from "react";
import "./DonationPage.css";

const DonationPage = () => {
  const [amount, setAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");

  const handleDonate = () => {
    if (amount && selectedOrganization && selectedPaymentOption) {
      alert(
        `Donating $${amount} to ${selectedOrganization} via ${selectedPaymentOption}`
      );
    } else {
      alert(
        "Please enter an amount, select an organization, and choose a payment option."
      );
    }
  };

  const handleAmountClick = (value) => {
    setAmount(value);
    setSelectedAmount(value);
  };

  const handleCustomAmountChange = (e) => {
    setAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <div className="page">
      <h1> Donate </h1>{" "}
      <div className="amount-input">
        <select>
          <option value="ZAR"> USD </option>{" "}
          {/* Add more currency options if needed */}{" "}
        </select>{" "}
        <input
          type="number"
          value={amount}
          onChange={handleCustomAmountChange}
          placeholder="Enter amount"
        />
      </div>{" "}
      <div className="donation-suggestions">
        {" "}
        {[200, 450, 700, 1000].map((value) => (
          <button
            key={value}
            className={selectedAmount === value ? "selected" : ""}
            onClick={() => handleAmountClick(value)}
          >
            USD {value.toFixed(2)}{" "}
          </button>
        ))}{" "}
        <button
          className={selectedAmount === null ? "selected" : ""}
          onClick={() => setSelectedAmount(null)}
        >
          Own Amount{" "}
        </button>{" "}
      </div>{" "}
      <select
        value={selectedOrganization}
        onChange={(e) => setSelectedOrganization(e.target.value)}
      >
        <option value=""> Select organization </option>{" "}
        <option value="Organization 1"> Organization 1 </option>{" "}
        <option value="Organization 2"> Organization 2 </option>{" "}
        <option value="Organization 3"> Organization 3 </option>{" "}
      </select>{" "}
      <select
        value={selectedPaymentOption}
        onChange={(e) => setSelectedPaymentOption(e.target.value)}
      >
        <option value=""> Select payment option </option>{" "}
        <option value="Credit Card"> Credit Card </option>{" "}
        <option value="PayPal"> PayPal </option>{" "}
        <option value="Bank Transfer"> Bank Transfer </option>{" "}
      </select>{" "}
      <div className="donation-summary">
        <h2> Donation Summary </h2> <p> Payment Amount: R {amount} </p>{" "}
        <p> Giving Frequency: One time </p>{" "}
        <p className="info-text"> Consider making this donation recurring </p>{" "}
        <hr />
        <p className="donation-total"> Donation Total: R {amount} </p>{" "}
      </div>{" "}
      <button onClick={handleDonate} className="donate-button">
        {" "}
        Donate Now{" "}
      </button>{" "}
    </div>
  );
};

export default DonationPage;
