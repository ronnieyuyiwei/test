import React, {Component} from 'react'
import Child from "./Child";
import Father from "./Father";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launch: "12345"
    }
  }
  // componentWillMount() {
  //   console.log('componentWillMount')
  // }
  // componentDidMount() {
  //   console.log('componentDidMount')
  //   setTimeout(function () {
  //     this.setState({
  //       launch: new Date().valueOf()
  //     })
  //   }.bind(this), 3000)
  // }
  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  // }
  // componentWillUpdate(nextProps, nextState, nextContext) {
  //   console.log("================", "willUpdate", "=============")
  //   console.log("================", nextState, "=============")
  //   console.log("================", nextContext, "=============")
  // }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log("================", "didUpdate", "=============")
  //   console.log("================", prevState, "=============")
  //   console.log("================", snapshot, "=============")
  // }
  // updateState = () => {
  //   console.log('更新');
  //   this.setState({
  //     launch: new Date().valueOf()
  //   })
  // }
  render() {
    console.log('render')
    return (
      <div>
        <Father>
          <div className={'div1'}>div1</div>
          <span className={'span1'}>span1xxx</span>
        </Father>
        33
      </div>
    )
  }
}
export default Home
