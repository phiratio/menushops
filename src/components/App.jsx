import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    // hmm how can we add fishy fish (javascripty way)
    // this.state.fishes.push(fish)
    // this.state.fishes.fish1 = fish
    // buut not in react

    // 1. Take a copy of the existing state (don't mutate!)
    const fishes = { ...this.state.fishes };
    // 2. Add new fish to fish variable(array)
    fishes[`fish${Date.now()}`] = fish; // passed in AddFishForm
    // 3. Set the new fishes object to state
    this.setState({
      fishes
    });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline={"Fresh Seafood Market"} />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
