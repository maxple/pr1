import React from 'react'

const CountryNames = ({ data, selected = '' }) =>
  <select defaultValue={selected}>
    {data.map(({ name }, i) =>
      <option key={i}
              value={name}>{name}</option>,
    )}
  </select>

export default CountryNames