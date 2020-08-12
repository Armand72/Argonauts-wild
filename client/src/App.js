import React, { Component } from "react";
import "./assets/styles/main.scss";
import API from "./api/axios";
import ListMembers from "./ListMembers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: "",
      listMembers: [],
    };
  }

  async componentDidMount() {
    const listMembers = await API.get("members");
    this.setState({ listMembers: listMembers.data });
  }

  updateData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  addMember = async (e) => {
    e.preventDefault();
    const member = this.state.member;

    const body = {
      member,
    };

    try {
      await API.post("members", body);
      const listMembers = await API.get("members");
      this.setState({ listMembers: listMembers.data });
      this.setState({ member: "" });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { listMembers, member } = this.state;

    return (
      <>
        <div className="homepage">
          <header>
            <h1>The Argonauts</h1>
          </header>
          <section className="top">
            <form className="form">
              <div className="title">
                <h1>Add an Argonaut</h1>
              </div>
              <div className="form__container">
                <div className="form__registration">
                  <p className="form__subtext">Argonaut's name</p>
                  <input
                    name="member"
                    value={member}
                    onChange={this.updateData}
                    className="form__input"
                  />
                </div>
                <button
                  onClick={this.addMember}
                  type="submit"
                  className={
                    member === ""
                      ? "form__button form__button--disabled"
                      : "form__button"
                  }
                  disabled={member < 1}
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
          <section className="bottom">
            <div className="title">
              <h1>Crew Members</h1>
            </div>
            <div className="columns">
              <div className="columns__items">
                <img src="./col.png"></img>
                <img src="./col.png"></img>
                <img src="./col.png"></img>
              </div>
            </div>
            <div className="name-container">
              {listMembers.map((props, index) => (
                <ListMembers key={index} member={props.member} />
              ))}
            </div>
          </section>
          <footer>
            <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
          </footer>
        </div>
      </>
    );
  }
}

export default App;
