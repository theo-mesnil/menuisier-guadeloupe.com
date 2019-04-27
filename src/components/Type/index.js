import React from "react"
import PropTypes from "prop-types"

const Type = ({ description, pictures, title }) => {
  return (
    <section>
      <h1>{title}</h1>
      <div>{description}</div>
    </section>
  )
}

Type.propTypes = {
  description: PropTypes.string.isRequired,
  projects: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default Type
