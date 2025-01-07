"use client";

import { useState } from "react";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementIfOdd,
  selectCount
} from "@/redux/reducers/counter/counterSlice";

import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import styles from "./Counter.module.css";
import { Button, Input } from "@mui/material";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <Button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <span aria-label="Count" className={styles.value}>
          {count}
        </span>
        <Button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </div>
      <div className={styles.row}>
        <Input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={(e) => {
            setIncrementAmount(e.target.value);
          }}
        />
        <Button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </Button>
        <Button
          className={styles.button}
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue));
          }}
        >
          Add If Odd
        </Button>
      </div>
    </div>
  );
};
