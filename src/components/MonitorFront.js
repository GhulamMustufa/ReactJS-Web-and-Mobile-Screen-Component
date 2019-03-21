import React, { Component } from "react";
import styled from "styled-components";
import {
  Container,
  Col,
  Row,
  Carousel,
  CarouselItem,
  CarouselControl
} from "reactstrap";
import Feature from "./Feature";
import { Swipeable } from "react-swipeable";
import "../App.css";

import LineTo from "react-lineto";

const image7 = require("../images/square1.png");
const image8 = require("../images/square2.png");

const overlay = require("../images/frame.png");

const Overlay = styled.div`
  background: url(${overlay}) top left no-repeat;
  position: absolute;
  top: 170px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
  width: 300px;
  height: 300px;
`;

const CarouselContainer = styled.div`
  width: 300px;
  height: 300px;
  margin: auto;
`;

const CarouselInner = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
`;

const FastCarouselItem = styled(CarouselItem)`
  -webkit-transition: -webkit-transform 0.3s ease-in-out !important;
  -o-transition: -o-transform 0.3s ease-in-out !important;
  transition: transform 0.3s ease-in-out !important;
`;

const items = [
  {
    src: `${image7}`,
    src2: `${image8}`,
    altText: "item 1"
  },
  {
    src: `${image7}`,
    src2: `${image8}`,
    altText: "item 2"
  },
  {
    src: `${image7}`,
    src2: `${image8}`,
    altText: "item 3"
  },
  {
    src: `${image7}`,
    src2: `${image8}`,
    altText: "item 4"
  },
  {
    src: `${image7}`,
    src2: `${image8}`,
    altText: "item 5"
  },
  {
    src: `${image7}`,
    src2: `${image8}`,
    altText: "item 6"
  }
];

export default class MonitorFront extends Component {
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
    // if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <FastCarouselItem
          style={{ left: "10px" }}
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div class="row ">
            <div class="col-3 paddingZero">
              <img
                src={item.src}
                alt="Los Angeles"
                width="70"
                height="60"
                onMouseOver={e => (e.currentTarget.src = item.src2)}
                onMouseOut={e => (e.currentTarget.src = item.src)}
              />
            </div>
            <div class="col-3 paddingZero">
              <img
                src={item.src}
                alt="Los Angeles"
                width="70"
                height="60"
                onMouseOver={e => (e.currentTarget.src = item.src2)}
                onMouseOut={e => (e.currentTarget.src = item.src)}
              />
            </div>
            <div class="col-3 paddingZero">
              <img
                src={item.src}
                alt="Los Angeles"
                width="70"
                height="60"
                onMouseOver={e => (e.currentTarget.src = item.src2)}
                onMouseOut={e => (e.currentTarget.src = item.src)}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-3 paddingZero">
              <img
                src={item.src}
                alt="Los Angeles"
                width="70"
                height="60"
                onMouseOver={e => (e.currentTarget.src = item.src2)}
                onMouseOut={e => (e.currentTarget.src = item.src)}
              />
            </div>
            <div class="col-3 paddingZero">
              <img
                src={item.src}
                alt="Los Angeles"
                width="70"
                height="60"
                onMouseOver={e => (e.currentTarget.src = item.src2)}
                onMouseOut={e => (e.currentTarget.src = item.src)}
              />
            </div>
            <div class="col-3 paddingZero">
              <img
                src={item.src}
                alt="Los Angeles"
                width="70"
                height="60"
                onMouseOver={e => (e.currentTarget.src = item.src2)}
                onMouseOut={e => (e.currentTarget.src = item.src)}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-3 paddingZero">
              <img
                src={item.src}
                alt="Los Angeles"
                width="70"
                height="60"
                onMouseOver={e => (e.currentTarget.src = item.src2)}
                onMouseOut={e => (e.currentTarget.src = item.src)}
              />
            </div>
            <div class="col-3 paddingZero">
              <img
                src={item.src}
                alt="Los Angeles"
                width="70"
                height="60"
                onMouseOver={e => (e.currentTarget.src = item.src2)}
                onMouseOut={e => (e.currentTarget.src = item.src)}
              />
            </div>
            <div class="col-3 paddingZero">
              <img
                src={item.src}
                alt="Los Angeles"
                width="70"
                height="60"
                onMouseOver={e => (e.currentTarget.src = item.src2)}
                onMouseOut={e => (e.currentTarget.src = item.src)}
              />
            </div>
          </div>

          {/* <img src={item.src} alt={item.altText} /> */}
        </FastCarouselItem>
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
            <Col xs="auto" md="6">
              <Swipeable
                onSwipedLeft={() => this.next()}
                onSwipedRight={() => this.previous()}
              >
                <CarouselContainer>
                  <CarouselInner>
                    <Overlay />
                    {/* <Mask> */}
                    <Carousel
                      activeIndex={activeIndex}
                      next={this.next}
                      previous={this.previous}
                      interval={0}
                      className="Phone pClassname"
                    >
                      {slides}
                      <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={this.previous}
                        className="controlStyle"
                      />
                      <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={this.next}
                        className="imageRight"
                        className="controlStyle"
                      />
                    </Carousel>
                    {/* </Mask> */}
                  </CarouselInner>
                </CarouselContainer>
              </Swipeable>
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
