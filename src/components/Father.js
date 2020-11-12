import React from 'react'
const Father = (props) => {
  console.log(props.children[1].props.children)
  return (
    <div>
      这是father
      {
        props.children.map(item => item)
      }
    </div>
  )
}
export default Father
