import React, { useState } from 'react'
import './Users.css'

import {
    Button,
    Form,
    Input,
    Modal,
    Upload,
  } from "antd";

const Users = () => {
    const [form] = Form.useForm();
    const [companyExpiryDates, setCompanyExpiryDates] = useState(false)
    const handleCopmanyExpiryDates = () => {
        setCompanyExpiryDates(!companyExpiryDates)
    }
    const onFinish = (value) => {
        
        console.log(value,'expiry Dates');
    }
  return (
    <>
      <div className='UsersContainer'>
      <div className="CompanyDetailsButton"  >
        <div className="CDBLeft">
          <p>Company Name:</p>
          <p>Company Code</p>
          <p>Company Code</p>
        </div>
        <div className="CDBCenter">
          <p>License</p>
          <p>Daman</p>
          <p>Mensha</p>
        </div>
        <div className="CDBRight">
        <button onClick={handleCopmanyExpiryDates}>Edit</button>
          <p>Echannel</p>
          <p>adsf</p>
        </div>
        
          </div >
          {companyExpiryDates ? 
              <Form onFinish={onFinish}>
              <div className="companyDetailsContainer">
                  <div className="companyDetails">
                      <div className="ExpiryDate">
                          <p>License Expiry Date</p>
                      <Form.Item  name="license">
                  <Input
                    className="modalInput"
                    type="date"
                    placeholder="Select Date..."
                  />
                </Form.Item>
                      </div>
                      <div className="ExpiryDate">
                              <p>Echannel Expiry Date</p>
                          <Form.Item  name="echannel">
                  <Input
                    className="modalInput"
                    type="date"
                    placeholder="Select Date..."
                  />
                </Form.Item>
                      </div>

                  </div>
                  <div className="companyDetails">
                      <div className="ExpiryDate">
                              <p>Mensha Expiry Date</p>
                          <Form.Item  name="mensha">
                  <Input
                    className="modalInput"
                    type="date"
                    placeholder="Select Date..."
                  />
                </Form.Item>
                      </div>
                      <div className="ExpiryDate">
                              <p>Daman Expiry Date</p>
                          <Form.Item  name="daman">
                  <Input
                    className="modalInput"
                    type="date"
                    placeholder="Select Date..."
                  />
                </Form.Item>
                      </div>
                      
                      </div>
                      <Form.Item>
                          
                      <div className="addCompanyExpiryDtes">
                      <Button htmlType="submit" >SUBMIT</Button>
                      </div>
                      </Form.Item>
              </div>
         
              
              </Form>
              :
              ""
          }          
      </div>
      <div className="employeeListContainer">
        <h4>Employees</h4>
        <hr />
        <div className="employeeList">
          <div className="employee">
            <div>
            <ul>
              <li>Emirates ID</li>
              <li>Labour Card</li>
              <li>Labour Card</li>
            </ul>
            </div>
            <div>
            <ul>
              <li>Daman</li>
              <li>Labour</li>
              <li>Immigration</li>
            </ul>
            </div>
          </div>
          <div className="employee">
            <div>
            <ul>
              <li>Emirates ID</li>
              <li>Labour Card</li>
              <li>Labour Card</li>
            </ul>
            </div>
            <div>
            <ul>
              <li>Daman</li>
              <li>Labour</li>
              <li>Immigration</li>
            </ul>
            </div>
          </div>
          <div className="employee">
            <div>
            <ul>
              <li>Name</li>
              <li>Emirates ID</li>
              <li>Labour Card</li>
            </ul>
            </div>
            <div>
            <ul>
              <li>Daman</li>
              <li>Labour</li>
              <li>Immigration</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Users