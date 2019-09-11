import React from 'react';

class Rect extends React.Component {
  calcX() {
    if (this.props.width < 0) {
      return this.props.x + this.props.width;
    }
    return this.props.x;
  }
  calcY() {
    if (this.props.height < 0) {
      return this.props.y + this.props.height;
    }
    return this.props.y;
  }
  calcWidth() {
    if (this.props.width < 0) {
      return this.props.width * -1;
    }
    return this.props.width;
  }
  calcHeight() {
    if (this.props.height < 0) {
      return this.props.height * -1;
    }
    return this.props.height;
  }
  render() {
    if (this.props.x) {
      return (
        <div>
          <svg viewBox="0 0 500 500">
            <rect
              x={this.calcX()}
              y={this.calcY()}
              width={this.calcWidth()}
              height={this.calcHeight()}
              style={{ "fillOpacity": "0", "stroke": "#4d0099", "strokeDasharray": [3, 2] }}
            />
          </svg>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default Rect;
