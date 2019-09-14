import React from 'react'
import PropTypes from 'prop-types'

const ListMenu = (props) => {
  console.log(props)
  const { items } = props
  return (
    <ul>
      {items.map((item, index) => <li key={index}>{item.title}</li>)}
    </ul>
  )
}
ListMenu.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ListMenu

