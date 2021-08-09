import React, { useState } from "react";

function SearchBar(props) {

  const [search, setSearch] = useState();

  function handleChange(event) {
    setSearch(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.onFormSubmit(search);
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input placeholder="Search..." onChange={handleChange} className='bg-dark baloo' />
      </form>
    </>
  )
}
export default SearchBar;