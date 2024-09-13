import { useState } from "react";
import "./Form.scss";
import SeeBundleModal from "../SeeBundleModal/SeeBundleModal"; // Import the modal component

function Form() {
  const [budget, setBudget] = useState("");
  const [showFields, setShowFields] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [favoriteGenre, setFavoriteGenre] = useState("");
  const [familyMembers, setFamilyMembers] = useState([]);

  // Array of 10 different shades of green and purple
  const colors = [
    "#6a1b9a", // Dark purple
    "#8e24aa", // Medium purple
    "#9c27b0", // Light purple
    "#7b1fa2", // Deep purple
    "#4a148c", // Darker purple
    "#388e3c", // Medium green
    "#2e7d32", // Dark green
    "#1b5e20", // Forest green
    "#4caf50", // Light green
    "#66bb6a", // Mint green
  ];

  // Function to select a random color from the colors array
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleAddMemberClick = () => {
    setShowFields(true);
  };

  const handleAddButtonClick = (event) => {
    event.preventDefault();

    // Create a new member with a randomly selected color
    const newMember = {
      name,
      age,
      favoriteGenre,
      budget,
      color: getRandomColor(), // Assign random color
    };

    setFamilyMembers([...familyMembers, newMember]);

    // Reset form fields
    setName("");
    setAge("");
    setFavoriteGenre("");
    setBudget("");
    setShowFields(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="form-container">
      <h3>Let's create a personalized bundle for you!</h3>
      <form className="form" action="">
        <label htmlFor="budget">What's your budget:</label>
        <input
          className="form__budget"
          placeholder="e.g. $50"
          type="number"
          name="budget"
          id="budget"
          value={budget}
          onChange={handleBudgetChange}
        />

        <button
          type="button"
          onClick={handleAddMemberClick}
          className="form__add-button"
        >
          + Add a Family Member
        </button>

        {showFields && (
          <>
            <div className="form__row">
              <label htmlFor="name">Name:</label>
              <input
                className="form__name"
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form__row">
              <label htmlFor="age">Age:</label>
              <input
                className="form__age"
                type="number"
                name="age"
                id="age"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form__row">
              <label htmlFor="favoriteGenre">Favorite Genre:</label>
              <select
                className="form__favorite-genre"
                name="favoriteGenre"
                id="favoriteGenre"
                value={favoriteGenre}
                onChange={(e) => setFavoriteGenre(e.target.value)}
              >
                <option value="" disabled>
                  Select your favorite genre
                </option>
                <option value="Action">Drama</option>
                <option value="Comedy">Food and DIY</option>
                <option value="Drama">Sports</option>
                <option value="Fantasy">Blockbusters</option>
                <option value="Horror">Science and History</option>
                <option value="Mystery">Nature and Exploring</option>
                <option value="Romance">Regional Favourites</option>
                <option value="Sci-Fi">Lifestyle</option>
                <option value="Thriller">Comedy</option>
                <option value="Western">Family</option>

              </select>
            </div>

            <button
              type="button"
              onClick={handleAddButtonClick}
              className="form__submit-button"
            >
              Add
            </button>
          </>
        )}
      </form>

      <div className="family-cards">
        {familyMembers.map((member, index) => (
          <div key={index} className="family-card">
            <div
              className="family-card__icon"
              style={{ backgroundColor: member.color }} // Set the icon background color
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/user.png"
                alt="User Icon"
              />
            </div>
            <div className="family-card__details">
              <p>
                <strong>Name:</strong> {member.name}
              </p>
              <p>
                <strong>Age:</strong> {member.age}
              </p>
              <p>
                <strong>Favorite Genre:</strong> {member.favoriteGenre}
              </p>
            </div>
          </div>
        ))}
      </div>

      {familyMembers.length > 0 && (
        <button className="see-bundle-button" onClick={handleOpenModal}>
          See Bundle
        </button>
      )}

      {isModalOpen && <SeeBundleModal onClose={handleCloseModal} />}
    </div>
  );
}

export default Form;
