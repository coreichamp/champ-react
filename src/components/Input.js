import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ value, type, onChange }) => {
  // const [val, setVal] = React.useState('')
  // const { value, type, onChange } = props
  // console.log(val)
  const handleInputChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <>
      <input type={type} value={value} onChange={handleInputChange} />
    </>
  )
}

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  value: null,
  onChange: () => {},

}

export default Input
