import React, { Component } from "react";
import styled from "styled-components";
import {
  Container,
  Col,
  Row,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import Feature from "./Feature";
import { Swipeable } from "react-swipeable";
import "../App.css";

import LineTo from "react-lineto";
const image7 = require("../images/square1.png");

const image1 = require("../images/iphone-image-1.png");
const image2 = require("../images/iphone-image-2.png");
const image3 = require("../images/iphone-image-3.png");
const overlay = require("../images/iphone-frame.png");
const mask = require("../images/iphone-mask.svg");

const Overlay = styled.div`
  background: url(${overlay}) top left no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
`;

const CarouselContainer = styled.div`
  width: 300px;
  height: 600px;
  margin: auto;
`;

const CarouselInner = styled.div`
  width: 300px;
  height: 600px;
  position: relative;
`;

const Mask = styled.div`
  mask: url(${mask});
`;

const items = [
  {
    src: `${image1}`,
    altText: "item 1"
  },
  {
    src: `${image2}`,
    altText: "item 2"
  },
  {
    src: `${image3}`,
    altText: "item 3"
  }
];

export default class InteractiveMobileSection extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} />
          {/* <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          /> */}
        </CarouselItem>
      );
    });

    return (
      <div className="m-4">
        <Container>
          <div className="d-none d-md-block">
            <div className="py-4 display-3 text-center">
              Parametricos Compartments
            </div>
            <h4 className="px-5 mb-5 pt-1">
              <i>
                At parametricos we focus on the professionals' needs to improve
                his workflow and his life. That is why we came up with the six
                most important parameters that can significantly alter the
                design and construction process. - Marios Messios, CEO
              </i>
              <br />
            </h4>
          </div>
          <div className="d-md-none">
            <h1 className="py-4 text-center">Parametricos Compartments</h1>
            <h5 className="px-5 mb-5 pt-1 text-center">
              <i>
                At parametricos we focus on the professionals' needs to improve
                his workflow and his life. That is why we came up with the six
                most important parameters that can significantly alter the
                design and construction process. - Marios Messios, CEO
              </i>
              <br />
            </h5>
          </div>
          <Row>
            <Col md="3" className="d-none d-md-block">
              <Row className="align-items-center">
                <Col xs="12">
                  <Feature
                    image
                    src={image7}
                    onMouseEnter={this.goToIndex}
                    index={0}
                    name="#1"
                    className="Feature1"
                  />
                  <LineTo from="Feature1" to="Phone" />
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col xs="12">
                  <Feature
                    image
                    src={image7}
                    onMouseEnter={this.goToIndex.bind(this)}
                    index={1}
                    name="#2"
                  />
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col xs="12">
                  <Feature
                    image
                    src={image7}
                    onMouseEnter={this.goToIndex.bind(this)}
                    index={2}
                    name="#3"
                  />
                </Col>
              </Row>
            </Col>
            <Col xs="12" md="6">
              <CarouselContainer>
                <CarouselInner>
                  <Overlay />
                  <Mask>
                    <Carousel
                      activeIndex={activeIndex}
                      next={this.next}
                      previous={this.previous}
                      interval={0}
                    >
                      {slides}
                      <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={this.previous}
                      />
                      <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={this.next}
                      />
                    </Carousel>
                  </Mask>
                </CarouselInner>
              </CarouselContainer>
            </Col>
            <Col md="3" className="d-none d-md-block">
              <Row className="align-items-center">
                <Col xs="12">
                  <Feature
                    image
                    src={image7}
                    onMouseEnter={this.goToIndex}
                    index={3}
                    name="#4"
                  />
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col xs="12">
                  <Feature
                    image
                    src={image7}
                    onMouseEnter={this.goToIndex}
                    index={4}
                    name="#5"
                  />
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col xs="12">
                  <Feature
                    image
                    src={image7}
                    onMouseEnter={this.goToIndex}
                    index={5}
                    name="#6"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
