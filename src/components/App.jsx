import React from 'react';
import Rect from './Rect.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      window: null,
      clickX: null,
      clickY: null,
      mouseoverX: null,
      mouseoverY: null,
      // 
      renderRect: true,
    }
    this.handleMousedown = this.handleMousedown.bind(this);
    this.handleMousemove = this.handleMousemove.bind(this);
    this.handleMouseup = this.handleMouseup.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleMousedown);
    document.addEventListener("mousemove", this.handleMousemove);
    document.addEventListener("mouseup", this.handleMouseup);
  }
  handleMousedown(event) {
    this.setState({
      clickX: event.clientX - 11,
      clickY: event.clientY - 11,
      renderRect: true,
    });
  }
  handleMousemove(event) {
    this.setState({
      mouseoverX: event.clientX - 11,
      mouseoverY: event.clientY - 11,
    });
  }
  handleMouseup() {
    this.setState({
      clickX: null,
      clickY: null,
      renderRect: false,
    });
  }
  render() {
    return (
      <div>
        <Rect
          x={this.state.clickX}
          y={this.state.clickY}
          width={this.state.mouseoverX - this.state.clickX}
          height={this.state.mouseoverY - this.state.clickY}
          style={{ "fillOpacity": "0", "stroke": "blue", "strokeWidth": "1", "strokeDasharray": "3 3" }}
        />
      </div>
    )
  }
}

export default App;
