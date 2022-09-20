import Signup from "./Signup";
import Login from "./Login";
import React from "react";
import {Routes,Route} from 'react-router-dom';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from 'react-bootstrap/Container';
import { UserAuthContextProvider } from "../contexts/UserAuthContext";
import Home from "../pages/Home";
import ProtectedRoute from './ProtectedRoute';
import "./App.css";



function App() {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
          <Routes>
            <Route
                path="/Home"
                element={
                  <ProtectedRoute>
                    <Home/>
                  </ProtectedRoute>
                }
              />
            <Route path="/" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
          </Routes>
        </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
