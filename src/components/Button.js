import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
)
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

Button.defaultProps = {
  onClick: () => {},
  children: null,
}
export default Button
