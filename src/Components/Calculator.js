import React, { useEffect, useRef } from 'react';
import './cal.css';
export default function Calculator({
  result,
  handleSelect,
  handleResult,
  handleClear,
}) {
  const inputRef = useRef(null);

  /**
   * on render it will get invoke
   * @param  {} (
   */
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="calc_app">
      <form>
        <input type="text" defaultValue={result} ref={inputRef} />
      </form>
      <div className="key_pad">
        <button data-testid="button" name="7" onClick={handleSelect}>
          7
        </button>
        <button data-testid="button" name="8" onClick={handleSelect}>
          8
        </button>
        <button data-testid="button" name="9" onClick={handleSelect}>
          9
        </button>
        <button
          data-testid="button"
          name="+"
          onClick={handleSelect}
          className="same_color"
        >
          +
        </button>
        <button data-testid="button" name="4" onClick={handleSelect}>
          4
        </button>
        <button name="5" onClick={handleSelect}>
          5
        </button>
        <button name="6" onClick={handleSelect}>
          6
        </button>
        <button name="*" onClick={handleSelect} className="same_color">
          &times;
        </button>
        <button name="1" onClick={handleSelect}>
          1
        </button>
        <button name="2" onClick={handleSelect}>
          2
        </button>
        <button name="3" onClick={handleSelect}>
          3
        </button>
        <button name="/" onClick={handleSelect} className="same_color">
          /
        </button>
        <button name="." onClick={handleSelect}>
          .
        </button>
        <button name="0" onClick={handleSelect}>
          0
        </button>
        <button onClick={handleResult}>=</button>
        <button name="-" onClick={handleSelect} className="same_color">
          -
        </button>
        <button onClick={handleClear} id="clear" className="same_color">
          Clear
        </button>
      </div>
    </div>
  );
}
