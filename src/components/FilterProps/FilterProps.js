import React, { useState } from "react";
import styles from "./FilterProps.module.css";
import SearchInput from "./SearchInput.jsx";
import data from "./Animals.json";
import Animal from "./Animal.jsx";
import ShowMoreButton from "./ShowMoreButton.jsx";
import ShowLessButton from "./ShowLessButton.jsx";

// Define the number of animals to display per page:
function FilterProps() {
  const animalsPerPage = 6;

  // State hook to manage the number of animals displayed:
  const [animalsDisplayed, setAnimalsDisplayed] = useState(animalsPerPage);

  // Function to increase the number of animals displayed:
  function increasePageSize() {
    setAnimalsDisplayed(animalsDisplayed + animalsPerPage);
  }

  // Function to decrase the number of animals displayed:
  function decreasePageSize() {
    setAnimalsDisplayed(animalsDisplayed - animalsPerPage);
  }

  // State hook to manage the search input value:
  const [input, setInput] = useState("");

  // Filter the data array based on search input:
  const filteredArray = data.filter((animal) =>
    animal.title.toLowerCase().includes(input.toLowerCase())
  );
  // Slice the filtered array based on number of animals displayed:
  const filteredSliceArray = filteredArray.slice(0, animalsDisplayed);

  // Come back to this part and rewrite as normal function //
  // Map through the sliced array and create animal components:
  const animals = filteredSliceArray.map((animal) => {
    return (
      <div>
        <Animal
          id={animal.id}
          key={animal.id}
          title={animal.title}
          description={animal.description}
          image={animal.image}
        />
      </div>
    );
  });

  // Render the FilterProps component UI to screen:
  // Code for number of animals shown:
  return (
    <div className={styles.wrapper}>
      <SearchInput input={input} setInput={setInput} />
      {filteredArray.length === 1 ? (
        <p className={styles.animalnumber}>
          {filteredSliceArray.length} of{" "}
          {`${filteredArray.length} animal shown`}
        </p>
      ) : (
        <p className={styles.animalnumber}>
          {filteredSliceArray.length} of{" "}
          {`${filteredArray.length} animals shown`}
        </p>
      )}
      <div>
        {filteredArray.length === 0 ? (
          <p>sad</p>
        ) : (
          // Allows the styling around all 6 animals, Pete helped with this part!
          <div className={styles.container}>{animals}</div>
        )}
      </div>
      {animalsDisplayed >= filteredArray.length ? (
        <ShowLessButton decreasePageSize={decreasePageSize} />
      ) : (
        <ShowMoreButton increasePageSize={increasePageSize} />
      )}
    </div>
  );
}

export default FilterProps;
