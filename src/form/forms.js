import { useDispatch, useSelector } from "react-redux";
import formReducer from "./formreducer";
import { useState } from "react";

const Demo = () => {
  const userDetails = useSelector((state) => state);
  const [formData, setFormData] = useState({});
  

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SUBMIT_FORM",
      payload: formData,
    });
    console.log(userDetails);
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            First Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputEmail3"
              name="firstName"
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Last Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputEmail3"
              name="lastName"
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Date of Birth
          </label>
          <div class="col-sm-10">
            <input
              type="date"
              class="form-control"
              id="inputPassword3"
              name="dateofbirth"
              onChange={handleChange}
            />
          </div>
        </div>
        <fieldset class="row mb-3">
          <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="gridRadios1"
                value="male"
                onChange={handleChange}
              />
              <label class="form-check-label" for="gridRadios1">
                Male
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="gridRadios2"
                value="Female"
                onChange={handleChange}
              />
              <label class="form-check-label" for="gridRadios2">
                Female
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="gridRadios2"
                value="other"
                onChange={handleChange}
              />
              <label class="form-check-label" for="gridRadios2">
                Others
              </label>
            </div>
          </div>
        </fieldset>
        <div class="row mb-3">
          <div class="col-sm-10 offset-sm-2">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck1" />
              <label class="form-check-label" for="gridCheck1">
                Acccept and Submit
              </label>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default Demo;
