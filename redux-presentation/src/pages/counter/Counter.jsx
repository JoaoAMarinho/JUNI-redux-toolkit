import styles from "./Counter.module.css";

export const Counter = () => {
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            /* TODO */ console.log("Decrement value");
          }}
        >
          -
        </button>
        <span aria-label="Count" className={styles.value}>
          {0 /* TODO: value*/}
        </span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            /* TODO */ console.log("Increment value");
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={0 /* TODO */}
          type="number"
          onChange={() => {
            /* TODO */ console.log("Change increment ammount");
          }}
        />
        <button
          className={styles.button}
          onClick={() => {
            /* TODO */ console.log("Increment by ammount");
          }}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => {
            /* TODO */ console.log("Increment async");
          }}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => {
            /* TODO */ console.log("Increment on condition");
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
