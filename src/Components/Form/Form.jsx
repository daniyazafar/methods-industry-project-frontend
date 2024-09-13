import { useState } from "react";
import "./Form.scss";
import SeeBundleModal from "../SeeBundleModal/SeeBundleModal"; // Import the modal component

function Form() {
  const [budget, setBudget] = useState("");
  const [showFields, setShowFields] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [themePack, setThemePack] = useState("");
  const [favoriteGenre, setFavoriteGenre] = useState("");

  const [familyMembers, setFamilyMembers] = useState([]);

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleAddMemberClick = () => {
    setShowFields(true);
  };

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const newMember = {
      name,
      age,
      themePack,
      favoriteGenre,
      budget,
    };

    setFamilyMembers([...familyMembers, newMember]);

    setName("");
    setAge("");
    setThemePack("");
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
              <label htmlFor="themePack">Theme Pack:</label>
              <input
                className="form__theme-pack"
                type="text"
                name="themePack"
                id="themePack"
                placeholder="Enter theme pack"
                value={themePack}
                onChange={(e) => setThemePack(e.target.value)}
              />
            </div>

            <div className="form__row">
              <label htmlFor="favoriteGenre">Favorite Genre:</label>
              <input
                className="form__favorite-genre"
                type="text"
                name="favoriteGenre"
                id="favoriteGenre"
                placeholder="Enter favorite genre"
                value={favoriteGenre}
                onChange={(e) => setFavoriteGenre(e.target.value)}
              />
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
            <div className="family-card__icon">
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
                <strong>Theme Pack:</strong> {member.themePack}
              </p>
              <p>
                <strong>Favorite Genre:</strong> {member.favoriteGenre}
              </p>
              <p></p>
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
