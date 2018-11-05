import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";

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
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };
  addToOrder = key => {
    console.group();
    // 1. take a copy of state
    console.info(`addToOrder event raised from Fish component`);
    console.info(`Old order state > ${JSON.stringify(this.state.order)}`);
    const order = { ...this.state.order };
    // 2. either add to the order, or update the number of the order
    order[key] = order[key] + 1 || 1;
    // 3. call setState to update our state object
    this.setState({ order });
    console.groupEnd();
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline={"Freshy Fishy"} />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key} //react handles it faster with unique key
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}/>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
