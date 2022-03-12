import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./profile.css";
import "./navbar";
import "./Footer";
import Navbar from "./navbar";
import Footer from "./Footer";
import { db } from "./firebase";

class Profile extends Component {
  state = {
    info: [],
  };

  fetchData = () => {
    db.collection("User")
      .get()
      .then((querySnapshot) => {
        // var id=querySnapshot.getKey();

        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          let { info } = this.state;
          info.push(data);
          this.setState({ info });
        });
      });
  };

  componentDidMount = () => {
    this.fetchData();
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="bg1">
          <br />
          <br />
          {this.state.info.map((User, index) => (
            <div className="container emp-profile">
              <form method="post">
                <div className="row">
                  <div className="col-md-2">
                    <div className="profile-img">
                      <img
                        src="https://nd.net/wp-content/uploads/2016/04/profile-dummy.png"
                        alt=""
                      />

                    </div>
                  </div>
                  <div className="col-md-6">
                    
                  </div>
           
                </div>
                <div className="row">
                  <div className="col-md-4">
                 
                  </div>
                  <div className="col-md-4">
                    <div className="tab-content profile-tab" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                      
                        <div className="row">
                          <div className="col-md-4">
                            <label style={{ color: "black" }}>Name</label>
                          </div>
                          <div className="col-md-4">
                            <p>
                              {User.fname} {User.lname}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <label style={{ color: "black" }}>Email</label>
                          </div>
                          <div className="col-md-4">
                            <p>xyz@gmail.com</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <label style={{ color: "black" }}>Phone</label>
                          </div>
                          <div className="col-md-4">
                            <p>9999999999</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <label style={{ color: "black" }}>Department</label>
                          </div>
                          <div className="col-md-4">
                            <p>IT</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <label style={{ color: "black" }}>
                              Employee ID
                            </label>
                          </div>
                          <div className="col-md-4">
                            <p>20ITEMP234</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default Profile;
