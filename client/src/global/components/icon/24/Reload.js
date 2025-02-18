import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default class Reload extends Component {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    stroke: PropTypes.string,
    fill: PropTypes.string,
    svgProps: PropTypes.object
  };

  static defaultProps = {
    className: "",
    size: "inherit",
    stroke: "currentColor",
    fill: "currentColor",
    svgProps: {}
  };

  get defaultHeight() {
    return 24;
  }

  get defaultWidth() {
    return 24;
  }

  get size() {
    return this.props.size;
  }

  get width() {
    if (this.size === null || this.size === "inherit") return null;
    if (this.size === "default") return this.defaultWidth;
    return this.size;
  }

  get height() {
    if (this.size === null || this.size === "inherit") return null;
    if (this.size === "default") return this.defaultHeight;
    return this.size;
  }

  get viewBox() {
    return "0 0 24 24";
  }

  get classes() {
    const { className } = this.props;
    return classnames("manicon-svg", className);
  }

  get fill() {
    return this.props.fill;
  }

  get stroke() {
    return this.props.stroke;
  }

  render() {
    const baseSvgProps = {
      xmlns: "http://www.w3.org/2000/svg",
      className: this.classes,
      width: this.width,
      height: this.height,
      viewBox: this.viewBox,
      fill: this.fill
    };

    const svgProps = Object.assign(baseSvgProps, this.props.svgProps);

    return (
      <svg {...svgProps}>
        <path
          fillRule="evenodd"
          d="M11.84,17.9997 C13.726,17.9997 15.409,17.1237 16.51,15.7587 L17.291,16.3807 C16.006,17.9757 14.041,18.9997 11.84,18.9997 C7.981,18.9997 4.84,15.8587 4.84,11.9997 C4.84,11.8297 4.863,11.6657 4.876,11.4987 L2.637,13.3467 L2,12.5747 L5.319,9.8357 L8.638,12.5747 L8.001,13.3467 L5.861,11.5797 C5.852,11.7197 5.84,11.8577 5.84,11.9997 C5.84,15.3087 8.531,17.9997 11.84,17.9997 Z M21.0432,10.653 L21.6802,11.424 L18.3602,14.164 L15.0412,11.424 L15.6782,10.653 L17.8182,12.42 C17.8282,12.281 17.8402,12.141 17.8402,12 C17.8402,8.691 15.1482,6 11.8402,6 C9.9542,6 8.2712,6.876 7.1702,8.241 L6.3892,7.619 C7.6732,6.024 9.6392,5 11.8402,5 C15.6992,5 18.8402,8.14 18.8402,12 C18.8402,12.17 18.8162,12.334 18.8042,12.501 L21.0432,10.653 Z"
        />
      </svg>
    );
  }
}
