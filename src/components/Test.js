import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Page1 from "./Page1"
import Page2 from "./Page2"
function Test () {
  return (
    <div>这是test
      <Link to={'/test/test/page1'}>page1</Link>
      <Link to={'/test/test/page2'}>page2</Link>
      <Switch>
        <Route path={'/test/test/page1'} component={Page1}/>
        <Route path={'/test/test/page2'} component={Page2}/>
      </Switch>
    </div>
  )
}
export default Test
