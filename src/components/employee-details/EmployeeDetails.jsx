import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Table, Divider, Button, Form, Input } from 'antd';
import toast from "react-hot-toast";
import SERVER_URL from '../../utils/axios';
import './EmployeeDetails.css'
import passport from '../../assets/passport.png'
import icp from '../../assets/icp.png'
import labour from '../../assets/labour.png'
import insurance from '../../assets/insurance.png'
import iloe from '../../assets/imageedit_4_9013849099-removebg-preview.png'
import companyLogo from '../../assets/company.png'
import EditEmployeeDetails from '../edit-employee-details/EditEmployeeDetails';

export const EmployeeDetails = () => {
    const { employeeId } = useParams()
    const [employeeDetails, setEmployeeDetails] = useState({})
    const [companyDetails, setCompanyDetails] = useState({})
    console.log(companyDetails,'commmmm');
    
    const companyId=companyDetails._id
    const editEmployeeData = async (values) => {
        values.company_id=companyId
        console.log(values,'vvvaalll');
        const response = await SERVER_URL.patch(`/users/editEmployee/${employeeId}`, values)
        if (response.data.success) {
            
            toast.success(response.data.message)
        }
        else {
            toast.error("Employee Data Not Updated")
        }
        getOwnEmployee()
    }

    const getOwnEmployee = async () => {
        const response = await SERVER_URL.get(`/users/getOwnEmployee/${employeeId}`)
        setCompanyDetails(response.data.totalData.companyData)
        setEmployeeDetails(response.data.totalData.employeeData)

        console.log(response.data.totalData,'ddttaa');
    }
    useEffect(() => {
        getOwnEmployee()
    },[])
  return (
      <>
          <div>
          <div className='editPageTop'>
              <h4>{ employeeDetails.user_id}</h4>
          <EditEmployeeDetails
              editEmployeeData={editEmployeeData}
          />
          </div>
           
          <div className='EmployeeContainer'>
          {/* Company Details */}
          <div className="card">
              <div className="cardPhoto">
                  <img src={companyLogo} alt="" />
              </div>
              <h1>Company</h1>
              <div className="cardDetails">
                
                  <p> {companyDetails.company_name} </p>
                  <p>Company Code: {companyDetails.company_code} </p>
                  <p>Mensha No: {companyDetails.mensha_no} </p>
                  <p> Visa Type: {companyDetails.visa} </p>
                  

              </div>
          </div>
        {/* ============passport card==================== */}
          <div className="card">
              <div className="cardPhoto">
                  <img src={passport} alt="" />
              </div>
              <h1>Passport</h1>
              <div className="cardDetails">
                  <p>{employeeDetails.employee_name}</p> 
                  
                 <p>Nationality: {employeeDetails.nationality} </p>
                  <p>Passport No: {employeeDetails.passport_number} </p>
                  <p>Passport Expiry: {employeeDetails.passport_expiry} </p>

              </div>
          </div>
          {/* Immigration card */}
          <div className="card">
              <div className="cardPhoto">
                  <img src={icp} alt="" />
              </div>
              <h1>Immigration</h1>
              <div className="cardDetails">
                  <p>EID: {employeeDetails.eid_number} </p>
                  <p>UID: {employeeDetails.uid_number}</p>
                  {employeeDetails.visit_visa_date ? <p>Visit Visa Expiry Date: { employeeDetails.visit_visa_date}</p>:''}
                  {employeeDetails.on_arrival_date ? <p>On Arrival Date: { employeeDetails.on_arrival_date}</p>:''}
                  {employeeDetails.exp_after_cancel ? <p>Cancellation Expiry Date: { employeeDetails.exp_after_cancel}</p>:''}
                  {employeeDetails.eid_exp ? <p>EID Expiry Date: { employeeDetails.eid_exp}</p>:''}
                  
                  <p>Type: { employeeDetails.visa_type} </p>
                  

              </div>
          </div>
          {/* ==========labour========== */}
          <div className="card">
              <div className="cardPhoto">
                  <img src={labour} alt="" />
              </div>
              <h1>Labour</h1>
              <div className="cardDetails">
                  <p>Labour Card: {employeeDetails.labour_number} </p>
                  <p>Proffission: { employeeDetails.profission}</p>
                  <p>Work Type: { employeeDetails.work_type}  </p>
                  <p>Expiry: { employeeDetails.eid_exp} </p>
                  

              </div>
          </div>
          {/* insurance */}
          {employeeDetails.insurance_exp ?
              <div className="card">
              <div className="cardPhoto">
                  <img src={insurance} alt="" />
              </div>
              <h1>Insurance</h1>
              <div className="cardDetails">
                      <p>Expiry Date: { employeeDetails.insurance_exp}</p>
                 
                  

              </div>
          </div> :''
          }
          {/* =============================iloe======================== */}
          {employeeDetails.iloe_exp ?
          <div className="card">
          <div className="cardPhoto">
              <img src={iloe} alt="" />
          </div>
          <h1>ILOE</h1>
          <div className="cardDetails">
                      <p>Expiry Date: { employeeDetails.iloe_exp}</p>
              

          </div>
      </div> :''
        }
          
          
    </div> 
          </div>
      </>
  )
}
