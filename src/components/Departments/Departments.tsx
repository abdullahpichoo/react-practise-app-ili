import React, { useState } from "react";
import SectionHeading from "../SectionHeading";
import DepartmentCard from "./DepartmentCard";
import { departments } from "./departmentsList";

const Departments = () => {
  const [selectedDept, setSelectedDept] = useState<string>("Cardiology");
  const handleButtonClick = (buttonName: string) => {
    setSelectedDept(buttonName);
  };

  return (
    <section className="container w-100">
      <>{console.log(departments[selectedDept].title)}</>
      <SectionHeading
        title="Departments"
        desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
      />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="department-btns d-flex flex-column w-100">
              {Object.keys(departments).map((buttonName) => (
                <button
                  key={buttonName}
                  onClick={() => handleButtonClick(buttonName)}
                  className={`department-btn fw-bolder text-start px-4 text-dark-blue  ${
                    buttonName === selectedDept
                      ? "department-btn-selected"
                      : "text-hover-blue"
                  }`}
                >
                  {buttonName}
                </button>
              ))}
            </div>
          </div>
          <div className="dept-card col-12 mt-4 mt-lg-0 col-lg-9 ms-3 ms-lg-0">
            <DepartmentCard
              title={departments[selectedDept].title}
              desc={departments[selectedDept].desc}
              image={departments[selectedDept].image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;

// const [currentButton, setCurrentButton] = useState<string | null>(null);

// const handleButtonClick = (buttonName: string) => {
//   setCurrentButton(buttonName);
// };

// return (
//   <div>
//     <div>
//       {currentButton && (
//         <div>
//           <h3>{buttonDetails[currentButton].title}</h3>
//           <p>{buttonDetails[currentButton].description}</p>
//         </div>
//       )}
//     </div>
//     <div>
//       <button onClick={() => handleButtonClick('B1')}>B1</button>
//       <button onClick={() => handleButtonClick('B2')}>B2</button>
//       <button onClick={() => handleButtonClick('B3')}>B3</button>
//       <button onClick={() => handleButtonClick('B4')}>B4</button>
//       <button onClick={() => handleButtonClick('B5')}>B5</button>
//     </div>
//   </div>
// );
