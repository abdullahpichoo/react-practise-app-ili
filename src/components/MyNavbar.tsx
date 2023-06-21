import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import MyButton from "./MyButton";

const MyNavbar = () => {
  const [expand, setExpand] = useState<"sm" | "md" | "lg" | "xl" | "xxl">("lg");
  return (
    <>
      <Navbar bg="light" expand={expand} className="sticky-top px-sm-5">
        <Container fluid>
          <Navbar.Brand href="#" className="fs-3 fw-bold text-dark-blue">
            Medilab
          </Navbar.Brand>
          <div className="d-flex gap-2">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-2 text-center text-md">
                  <Nav.Link
                    className="navlink-hover navlink-hover-underline text-sm"
                    href="#action1"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    className="navlink-hover navlink-hover-underline text-sm"
                    href="#action2"
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    className="navlink-hover navlink-hover-underline text-sm"
                    href="#action3"
                  >
                    Services
                  </Nav.Link>
                  <Nav.Link
                    className="navlink-hover navlink-hover-underline text-sm"
                    href="#action4"
                  >
                    Departments
                  </Nav.Link>
                  <Nav.Link
                    className="navlink-hover navlink-hover-underline text-sm"
                    href="#action5"
                  >
                    Doctors
                  </Nav.Link>

                  <NavDropdown
                    className="navlink-hover navlink-hover-underline text-sm p-0"
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item className="navlink-hover" href="#action3">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item className="navlink-hover" href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item className="navlink-hover" href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    className="navlink-hover-underline navlink-hover text-sm"
                    href="#action6"
                  >
                    Contact
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <MyButton text="Make an Appointment" variant="regular" />
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
