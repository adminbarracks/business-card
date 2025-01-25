import React from "react";
import "./InteractiveFeatures.css"; // Import the CSS file

const InteractiveFeatures = () => {
  // Feature list data
  const features = [
    {
      href: "https://drive.google.com/drive/folders/1S-ru_hZgtEMn4Pg8H4yDzjvW8jFLZJU_?usp=sharing",
      text: "Explore Happiness Menu",
    },
    {
      href: "https://drive.google.com/drive/folders/1LFqBKJxPP5RDhaziM--fcUqJlhNeo5w6?usp=drive_link",
      text: "Watch Direction Video",
    },
    {
      href: "https://drive.google.com/drive/folders/1Pi4KPcRme2dt-M9AbrRNeqeeLf-DSSpP",
      text: "Watch Testimonial Video",
    },
    {
      href: "https://drive.google.com/drive/folders/15ooXkurf1NFPHbF7ze8OmwNuphhFbqmk",
      text: "View Ambience Photos",
    },
    {
      href: "https://drive.google.com/file/d/1AjP8Pca8flI8AymYvvOdhJq_7fzd5fPZ/view",
      text: "Watch Party Hall Video",
    },
  ];

  return (
    <div className="interactive-features-section">
      <h2 className="interactive-features-heading">Interactive Features</h2>
      <ul className="interactive-features-list">
        {features.map((feature, index) => (
          <li key={index} className="square-box">
            <a href={feature.href} target="_blank" rel="noopener noreferrer">
              {feature.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InteractiveFeatures;
