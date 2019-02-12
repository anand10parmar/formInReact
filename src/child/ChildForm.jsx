import React from "react";

export default ({ handleInput, handleSubmit, value }) => {
  return (
    <div className="form-container">
      <form onSubmit= {handleSubmit}>
        <label> Name: </label>
					<input type="text" value = {value}  onChange={handleInput} />
					<input type="submit" value = "Submit" />
      </form>
    </div>
  );
};
