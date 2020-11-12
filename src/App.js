import React, { useState, useEffect } from 'react';
import Children from "./components/Start";
import Start2 from "./components/Start2";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthorizedRoute from './routes';
class Example extends  React.Component {
  constructor(props) {
    super(props);
    // this.myRef = React.createRef()
  }

  // onRef = (ref) => {
  //   this.child = ref
  // }
  // start = () =>{
  //   this.child.onChangeValue()
  // }
  // start2 = () => {
  //   this.myRef.current.showAlert()
  // }
  // <div>
// {/*<button onClick={this.start}>触发</button>*/}
// {/*<Children onRef={this.onRef}/>*/}
// {/*<button onClick={this.start2}>触发2</button>*/}
// {/*<Start2 ref={this.myRef}/>*/}
// {/*<div id="123456">3333</div>*/}
// {/*<h1>Test页面</h1>*/}
// // </div>
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={AuthorizedRoute} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Example
