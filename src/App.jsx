import React from "react";
import Header from "../src/components/Header/Header";
import ContactDetails from "../src/components/ContactDetails/ContactDetails";
import SocialMedia from "../src/components/SocialMedia/SocialMedia";
import Location from "../src/components/Location/Location";
import InteractiveFeatures from "../src/components/InteractiveFeatures/InteractiveFeatures";
import CallToAction from "../src/components/CallToAction/CallToAction";
import "../src/App.css"; // Import the external CSS file

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <ContactDetails />
      <SocialMedia />
      <Location />
      <InteractiveFeatures />
      <CallToAction />
    </div>
  );
};

export default App;
