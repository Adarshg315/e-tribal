import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(9),
  },
}));
class NameForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      mobileno: "",
      shopname: "",
      categories: "",
      Gender: "",
      pin: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      fields: "",
      errors: "",
    };
    this.handle = this.handle.bind(this);
    this.Change = this.Change.bind(this);
    this.Number = this.Number.bind(this);
    this.mobile = this.mobile.bind(this);
    this.shopname = this.shopname.bind(this);
    this.address1 = this.address1.bind(this);
    this.address2 = this.address2.bind(this);
    this.city = this.city.bind(this);
    this.check = this.check.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    //console.log(event.target.elements.firstname.value)
    // console.log(event.target.firstname.value)
    //console.log(this.inputNode.value)
    console.log(event.target.elements.lastname.value);
    console.log(event.target.elements.pin.value);
    console.log(event.target.elements.mobileno.value);
    console.log(event.target.elements.categories.value);
    console.log(event.target.elements.gender.value);

    console.log(event.target.elements.shopname.value);
    console.log(event.target.elements.address1.value);
    console.log(event.target.elements.address2.value);
    console.log(event.target.elements.city.value);
    console.log(event.target.elements.state.value);
  };
  handle(e) {
    let val = e.target.value.replace(/[^A-Za-z]/gi, "");
    this.setState((state) => ({ firstname: val }));
  }
  Number(e) {
    let val = e.target.value.replace(/[^+91(7\d|8\d|9\d)\d{9}$]/gi, "");
    this.setState((state) => ({ pin: val }));
  }
  mobile(e) {
    let val = e.target.value.replace(/[^+91(7\d|8\d|9\d)\d{9}$]/gi, "");
    this.setState((state) => ({ mobileno: val }));
  }
  Change(e) {
    let val = e.target.value.replace(/[^A-Za-z]/gi, "");
    this.setState((state) => ({ lastname: val }));
  }
  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  shopname(e) {
    let val = e.target.value.replace(/[^A-Za-z]/gi, "");
    this.setState((state) => ({ shopname: val }));
  }
  address1(e) {
    let val = e.target.value.replace("[A-Za-z0-9]+");
    this.setState((state) => ({ address1: val }));
  }
  address2(e) {
    let val = e.target.value.replace("[A-Za-z0-9]+");
    this.setState((state) => ({ address2: val }));
  }
  city(e) {
    let val = e.target.value.replace(/[^A-Za-z]/gi, "");
    this.setState((state) => ({ city: val }));
  }
  check(e) {
    let val = e.target.value.replace(/[^A-Za-z]/gi, "");
    this.setState((state) => ({ state: val }));
  }
  render() {
    return (
      <div
        style={{
          flexGrow: 1,
          padding: 70,
          // margin: 10,
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <h4>
            <i>TELL ME ABOUT YOUR BUSSINESS</i>
          </h4>
          <br />
          <div>
            <h5>
              <i>seller information</i>
            </h5>
            <label>
              <b>Firstname</b>
              <br />
              <input
                style={{ width: "300px" }}
                id="user"
                name="firstname"
                placeholder="firstname"
                value={this.state.firstname}
                onChange={this.handle}
                ref={(node) => (this.inputNode = node)}
                required
              />
            </label>
            <br />

            <label>
              <b>Lastname</b>
              <br />
              <input
                style={{ width: "300px" }}
                name="lastname"
                placeholder="lastname"
                value={this.state.lastname}
                onChange={this.Change}
                ref={(node) => (this.inputNode = node)}
                required
              />
            </label>
            <br />

            <label>
              <b>mobile no.</b>
              <br />
              <input
                max="10"
                style={{ width: "300px" }}
                name="mobileno"
                maxlength="10"
                minlength="10"
                placeholder="mobileno"
                value={this.state.mobileno}
                onChange={this.mobile}
                ref={(node) => (this.inputNode = node)}
                required
              />
            </label>
            <br />
            <label>
              <b>shopname </b>
              <br />
              <input
                style={{ width: "300px" }}
                name="shopname"
                placeholder="shopname"
                value={this.state.shopname}
                onChange={this.shopname}
                ref={(node) => (this.inputNode = node)}
                required
              />
            </label>
            <br />

            <label>
              <b>Choose shop category </b>
            </label>
            <br />
            <select
              style={{ width: "200px" }}
              id="categories"
              name="categories"
              placeholder="categories"
            >
              <option value="Clothing">Clothing</option>
              <option value="footwears"> footwears </option>
              <option value="Jewellery">Jewellery</option>
              <option value="bags">bags</option>
              <option value="paintings">paintings</option>
              ref={(node) => (this.inputNode = node)}
              required{" "}
            </select>
            <br />
            <br />
            <label>
              <b>Gender </b>
              <br />
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                ref={(node) => (this.inputNode = node)}
              />
              <label for="male">Male</label>
              <br />
              <input type="radio" id="female" name="gender" value="female" />
              <label for="female">Female</label>
              <br />
              <input type="radio" id="other" name="gender" value="other" />
              <label for="other">Other</label>
              <br />
            </label>
          </div>
          <br />

          <h5>
            <i>Address</i>
          </h5>
          <div>
            <label>
              <b>pincode </b>
              <br />
              <input
                style={{ width: "100px" }}
                name="pin"
                maxlength="6"
                minlength="6"
                placeholder="pin"
                value={this.state.pin}
                onChange={this.Number}
                ref={(node) => (this.inputNode = node)}
                required
              />
            </label>

            <br />
            <label>
              <b>address 1 </b>
              <br />
              <input
                style={{ width: "500px" }}
                name="address1"
                placeholder="address1"
                value={this.state.address1}
                onChange={this.address1}
                ref={(node) => (this.inputNode = node)}
                required
              />
            </label>
            <br />

            <label>
              <b>address 2 </b>
              <br />
              <input
                style={{ width: "500px" }}
                name="address2"
                placeholder="address2"
                value={this.state.address2}
                onChange={this.address2}
                ref={(node) => (this.inputNode = node)}
                required
              />
            </label>
            <br />

            <label>
              <b>city </b>
              <br />
              <input
                style={{ width: "500px" }}
                name="city"
                placeholder="city"
                value={this.state.city}
                onChange={this.city}
                ref={(node) => (this.inputNode = node)}
                required
              />
            </label>
            <br />

            <label>
              <b>state</b>
              <br />
              <input
                style={{ width: "500px" }}
                name="state"
                placeholder="state"
                value={this.state.state}
                onChange={this.check}
                ref={(node) => (this.inputNode = node)}
                required
              />
            </label>
            <br />
          </div>

          <br />

          <b>
            <input type="submit" classname="button " value="submit" />
          </b>
        </form>
      </div>
    );
  }
}
export default NameForm;
