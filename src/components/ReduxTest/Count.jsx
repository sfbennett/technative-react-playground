import React from "react";
import styles from "./Count.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./countSlice";

export function Count() {
  const counter = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Counter</h1>
      <h1 className={styles.number}>{counter}</h1>
      <div className={styles.buttoncontainer}>
        <div>
          <button
            onClick={() => dispatch(increment())}
            className={styles.upbutton}
          >
            Count Up
          </button>
        </div>
        <div>
          <button
            onClick={() => dispatch(decrement())}
            className={styles.downbutton}
          >
            Count Down
          </button>
        </div>
      </div>
    </div>
  );
}

export default Count;
