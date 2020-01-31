import React from "react";
import Modal from "./components/Modal";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Modal>
          <div>
            <h3>
              This is a modal asking you to sell your soul to the devil just to
              get rid of it
            </h3>
          </div>
        </Modal>
        <main>
          <section>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button onClick={this.toggleModal} id="toggle" type="button">
              Toggle modal
            </button>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
