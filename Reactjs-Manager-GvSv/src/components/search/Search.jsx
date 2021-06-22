import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Search = (props) => {
  Search.propTypes = {
    onSubmit: PropTypes.func,
  };

  Search.defaultProps = {
    onSubmit: null,
  };
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState({});

  const handleValueChange = (event) => {
    const { name, value } = event.target;
    setSearchTerm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (!onSubmit) return;
    console.log(searchTerm);
    onSubmit(searchTerm);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="formSeachTeacher">
        <label>
          Tên:
          <input
            type="text"
            value={searchTerm.name}
            onChange={handleValueChange}
            name="name"
          />
        </label>
        <label>
          Phone:
          <input
            value={searchTerm.phone}
            onChange={handleValueChange}
            name="phone"
          />
        </label>
        <label>
          Ngày sinh:
          <input
            type="date"
            value={searchTerm.birthday}
            onChange={handleValueChange}
            name="birthday"
          />
        </label>
        <button className="buttonSearch" type="submit">
          <FontAwesomeIcon icon={faSearch} /> Tìm kiếm
        </button>
      </div>
    </form>
  );
};
export default Search;
