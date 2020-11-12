import React, {Component} from 'react'
class Child extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log('-----ChildWillMount')
  }
  componentDidMount() {
    console.log('-----ChildDidMount')
  }
  componentWillUnmount() {
    console.log('-----childComponentWillUnmount')
  }
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log("================", "------childWillUpdate", "=============")
    console.log("================", nextState, "=============")
    console.log("================", nextContext, "=============")
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("================", "-------childDidUpdate", "=============")
    console.log("================", prevState, "=============")
    console.log("================", snapshot, "=============")
  }

  render() {
    console.log('childRender')
    return (
      <div>
        <p>child页面</p>
        {this.props.data}
      </div>
    )
  }
}
export default Child
