import React, { Component } from "react";
import styled from "styled-components";
const RoundedDiv = styled.div`
  margin: 15px;
  border-radius: 20px;
  background-color: #f6f8ff;
  padding: 20px;
  cursor: pointer;
`;

const FeatureThumbnail = styled.img`
  width: 80px;
  height: 80px;
  margin: 5px auto;
`;

const FeatureTitle = styled.h5`
  margin: 5px;
`;

export default class Feature extends Component {
    
  mouseEnter = () => {
    console.log("mouse neter");
    // this.props.onMouseEnter(this.props.index);
  };

  render() {
      // const {onMouseEnter,index}=this.props;
    return (
      <RoundedDiv onMouseEnter={this.mouseEnter} className="text-center">
        <FeatureThumbnail src={this.props.image} alt={this.props.image} />
        <FeatureTitle>{this.props.name}</FeatureTitle>
      </RoundedDiv>
    );
  }
}