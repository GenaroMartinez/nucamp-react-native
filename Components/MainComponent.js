import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import { CAMPSITES } from "../shared/campsites";
import CampsiteInfo from "./CampsiteInfoComponent";
import { View } from "react-native";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      selectedCampsites: null,
    };
  }

  onCampsiteSelect(campsiteId) {
    this.setState({ selectedCampsite: campsiteId });
  }

  render() {
    return <Directory campsites={this.state.campsites} />;
  }
}

export default Main;
