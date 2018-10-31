import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // Okay this is how we bind the methods to this
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this); // this inside the gotostore is now the storepicker's context
}

  myInput = React.createRef();

  goToStore(event) {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from the input
    // 3. Change the page to /store/:storename
  }

  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
