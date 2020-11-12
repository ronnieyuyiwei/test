import React from 'react'

class Children extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  deleteValue = () => {
    this.setState({
      value: ''
    })
  }
  onChangeValue = (e) => {
   alert('hello')
  }
  render() {
    return (
      <div>children</div>
    )
  }
}
export default Children
