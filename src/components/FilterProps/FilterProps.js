import React, { useState } from "react";
import styles from "./FilterProps.module.css";
import SearchInput from "./SearchInput.jsx";
import data from "./Animals.json";
import Animal from "./Animal.jsx";
import ShowMoreButton from "./ShowMoreButton.jsx";
import ShowLessButton from "./ShowLessButton.jsx";

function FilterProps() {
  const animalsPerPage = 6;

  const [animalsDisplayed, setAnimalsDisplayed] = useState(animalsPerPage);

  function increasePageSize() {
    setAnimalsDisplayed(animalsDisplayed + animalsPerPage);
  }

  function decreasePageSize() {
    setAnimalsDisplayed(animalsDisplayed - animalsPerPage);
  }

  const [input, setInput] = useState("");

  const filteredArray = data.filter((animal) =>
    animal.title.toLowerCase().includes(input.toLowerCase())
  );

  const filteredSliceArray = filteredArray.slice(0, animalsDisplayed);

  // Come back to this part and rewrite as normal function
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
          // Allows the styling around all 6, Pete helped with this part!
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
