import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

    render() {
        // Destructure 'props' object to eliminate the need for this.props.data syntax and instead directly call the data/state
        const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={onReset}
        >
          Reset
        </button>
        {counters.map((counter) => (
          <div key={counter.id}>
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              counter={counter}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
