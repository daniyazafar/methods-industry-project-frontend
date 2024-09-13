import { useState, useEffect } from "react";
import "./SeeBundleModal.scss";

// Import images
import pkg1 from "../../assets/packages/pkg1.png";
import pkg2 from "../../assets/packages/pkg2.png";
import pkg3 from "../../assets/packages/pkg3.png";
import pkg4 from "../../assets/packages/pkg4.png";
import pkg5 from "../../assets/packages/pkg5.png";
import pkg6 from "../../assets/packages/pkg6.png";
import pkg7 from "../../assets/packages/pkg7.png";
import pkg8 from "../../assets/packages/pkg8.png";
import pkg9 from "../../assets/packages/pkg9.png";
import pkg10 from "../../assets/packages/pkg10.png";
import pkg11 from "../../assets/packages/pkg11.png";

function SeeBundleModal({ onClose }) {
  // Array of images and their corresponding package names
  const bundles = [
    { name: "Primetime", image: pkg1 },
    { name: "Living", image: pkg2 },
    { name: "Sportsnet & Beyond", image: pkg3 },
    { name: "TSN & Beyond", image: pkg4 },
    { name: "Blockbusters", image: pkg5 },
    { name: "World & Beyond", image: pkg6 },
    { name: "Lifestyle & Beyond", image: pkg7 },
    { name: "Explore", image: pkg8 },
    { name: "Time Shift", image: pkg9 },
    { name: "Laughs and Cheers", image: pkg10 },
    { name: "Amazon Prime", image: pkg11 },
  ];

  // Function to get a random bundle
  const getRandomBundle = () => {
    const randomIndex = Math.floor(Math.random() * bundles.length);
    return bundles[randomIndex];
  };

  // State to hold the randomly selected bundle
  const [selectedBundle, setSelectedBundle] = useState({ name: "", image: "" });

  // Set the random bundle when the component mounts
  useEffect(() => {
    setSelectedBundle(getRandomBundle());
  }, []);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <span className="modal__close" onClick={() => {
    window.location.reload(); // Refresh the page
  }}>
          X
        </span>
        <div className="modal__details">
          <p>Your bundle is...</p>
          <h2> {selectedBundle.name}</h2>
          <div className="modal__bundle">
            <a
              href="https://www.telus.com/en/shop/subscriptions/streamplus?&cmp=KNC_TelusDigital_2024_HS_NA_StreamPlus_CONV_GSE_Brand_All_ON_Q1-4_EN_&SEM_CID=20675408135&SEM_AG=156186439574&SEM_KW=telus%20streaming&SEM_MT=e&gad_source=1&gclid=CjwKCAjwxY-3BhAuEiwAu7Y6s6ru-IZY9dRhJt9VogKqFvgANcXOJEI6jg5HU3Kjp5sKy3AISg0OsBoCg2cQAvD_BwE&gclsrc=aw.ds"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={selectedBundle.image}
                alt={`Selected Package: ${selectedBundle.name}`}
              />
            </a>
          </div>
          <p>
            Based on your family's unique needs, we have selected this bundle to
            match your preferences. Now everyone will have access to their new
            favorite shows!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SeeBundleModal;
