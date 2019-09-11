import React from 'react';
import Rect from './Rect.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickX: null,
      clickY: null,
      mouseoverX: null,
      mouseoverY: null,
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
      clickX: event.clientX - 10,
      clickY: event.clientY - 10,
    });
  }
  handleMousemove(event) {
    this.setState({
      mouseoverX: event.clientX - 10,
      mouseoverY: event.clientY - 10,
    });
  }
  handleMouseup() {
    this.setState({
      clickX: null,
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
        />
      </div>
    )
  }
}

export default App;
