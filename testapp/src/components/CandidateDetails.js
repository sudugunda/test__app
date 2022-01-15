import React, { useReducer } from 'react'
import './CandidateDetails.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'

function CandidateDetails() {

        const initialState = {firstName: 'Mark', middleName: '', lastName: '', city: '', state: '', zip: '', preference: '' };
        
        const reducer = (state, action) => {
            console.log(state);
            switch(action.type){
                case 'firstName':
                    return { ...state, 'firstName': action.data }
                case 'lastName':
                    return { ...state, 'lastName': action.data }
                case 'middleName':
                    return { ...state, 'middleName': action.data }
                case 'city':
                    return { ...state, 'city': action.data }
                case 'state':
                    return { ...state, 'state': action.data }
                case 'zip':
                    return { ...state, 'zip': action.data }
                case 'preference':
                    return { ...state, 'preference': action.data }
            }
        }

        const [validated, setValidated] = useState(false);
        const [state, dispatch] = useReducer(reducer, initialState);
        const [temp, setTemp] = useState("");
      
        const handleSubmit = (event) => {
          event.preventDefault();
          console.log(state);
          setValidated(true);
        };

        const handleChange = (e) => {
            setTemp(e.target.value);
        }

        const commitHandleChange = (str) => {
            dispatch({type:str, data:temp});
            setTemp("");
        }
      
        return (
          <Form noValidate validated={validated} onSubmit={handleSubmit} className="m-3">
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue="Mark"
                  onChange={handleChange}
                  onBlur={() => {commitHandleChange('firstName')}}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Middle name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue="Otto"
                  onChange={handleChange}
                  onBlur={() => {commitHandleChange('middleName')}}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue="Star"
                  onChange={handleChange}
                  onBlur={() => {commitHandleChange('lastName')}}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" required 
                onChange={handleChange}
                onBlur={() => {commitHandleChange('city')}}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" required 
                onChange={handleChange}
                onBlur={() => {commitHandleChange('state')}}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="Zip" required 
                onChange={handleChange}
                onBlur={() => {commitHandleChange('zip')}}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3 p-3">
                <Form.Select aria-label="Default select example"
                onChange={handleChange}
                onBlur={() => {commitHandleChange('preference')}}
                >
                    <option>--------Preference of test language-----------</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                    <option value="Js">Js</option>
                    <option value="C++">C++</option>
                </Form.Select>
            </Row>
            
            <Button type="submit">Submit form</Button>
          </Form>
        );
      }

export default CandidateDetails
