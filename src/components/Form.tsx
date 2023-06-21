import React from "react";
import MyButton from "./MyButton";

const Form = ({ type }: { type: string }) => {
  return (
    <div className="container">
      <form action="submit">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          {type === "Appointment" ? (
            <>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Appointment Date"
                />
              </div>
              <div className="col">
                <select
                  className="px-3 py-2 text-muted form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Select Department</option>
                  <option value="1">Department 1</option>
                  <option value="2">Department 2</option>
                  <option value="3">Department 3</option>
                </select>
              </div>
              <div className="col">
                <select
                  className="px-3 py-2 text-muted form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Select Doctor</option>
                  <option value="1">Doctor 1</option>
                  <option value="2">Doctor 2</option>
                  <option value="3">Doctor 3</option>
                </select>
              </div>
            </>
          ) : (
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
          )}
        </div>
        <textarea placeholder="Message" className="mt-3 form-control" />
        <div className="text-center mt-4">
          {type === "Appointment" ? (
            <MyButton text="Make an Appointment" variant="regular" />
          ) : (
            <MyButton text="Send Message" variant="regular" />
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
