import React, { Component } from 'react' 
import { ReactCountryDropdown } from 'react-country-dropdown' 
const CountryDropDown = () => {
  const handleSelect = (country) => {
    console.log(country)
    /* returns the details on selected country as an object
    	{
          name: "United States of America", 
          code: "US", 
          capital: "Washington, D.C.", 
          region: "Americas", 
          latlng: [38, -97]
        }
    */
  }
  return (
    <div>
      <ReactCountryDropdown onSelect={handleSelect} countryCode='IN' />
    </div>
  )
}

export default CountryDropDown;