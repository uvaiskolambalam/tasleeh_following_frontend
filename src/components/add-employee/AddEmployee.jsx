import React, { useState } from 'react';
import { Button, Modal, Form, Input, DatePicker, Radio, Select } from 'antd';
import './AddEmployee.css'


const AddEmployee = ({handleEmployeeData}) => {
    const [superateInsurance, setSuperateInsurace] = useState(false)
    const [visit, setVisit] = useState(false)
    const [onArrival, setOnArrival] = useState(false)
    const [cancelled, setCancelled] = useState(false)
    const [eid,setEid]=useState(false)

    
    
    const [form] = Form.useForm()
    const [open, setOpen] = useState(false);

    const handleInsuranceRadioAsYes = () => {
        setSuperateInsurace(true)
    }
    const handleInsuranceRadioAsNo = () => {
        setSuperateInsurace(false)
    }
    const visitRadio = () => {
        setVisit(!visit)
        setOnArrival(false)
        setCancelled(false)
        setEid(false)
    }
    const onArrivalRadio = () => {
        setOnArrival(!onArrival)
        setVisit(false)
        setCancelled(false)
        setEid(false)
    }
    const cancelledRadio = () => {
        setCancelled(!cancelled)
        setVisit(false)
        setOnArrival(false)
        setEid(false)
    }
    const eidRadio = () => {
        setEid(!eid)
        setVisit(false)
        setOnArrival(false)
        setCancelled(false)
    }
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                Add
            </Button>
            <Modal
                title="Employee Details"
                centered
                open={open}
                onOk={() => {
                    form.validateFields()
                        .then((values) => {
                            if (values.insurance_exp) {
                                values.insurance_exp= values.insurance_exp.format('DD/MM/YYYY')
                            }
                            if (values.labour_expiry) {
                                values.labour_expiry=values.labour_expiry.format('DD/MM/YYYY')
                            }
                            if (values.on_arrival_date) {
                                values.on_arrival_date=values.on_arrival_date.format('DD/MM/YYYY')
                            }
                            if (values.passport_expiry) {
                                values.passport_expiry=values.passport_expiry.format('DD/MM/YYYY')
                            }
                            if (values.visit_visa_date) {
                                values.visit_visa_date=values.visit_visa_date.format('DD/MM/YYYY')
                            }
                            if (values.exp_after_cancel) {
                                values.exp_after_cancel=values.exp_after_cancel.format('DD/MM/YYYY')
                            }
                            if (values.eid_exp) {
                                values.eid_exp=values.eid_exp.format('DD/MM/YYYY')
                            }
                            if (values.iloe_exp) {
                                values.iloe_exp=values.iloe_exp.format('DD/MM/YYYY')
                            }
                            form.resetFields()
                            handleEmployeeData(values)
                            setOpen(false)
                    })
                    
                    setOpen(false)}
                } 
                onCancel={() => setOpen(false)}
                width={1000}
                style={{ marginLeft: 200 }}
            >
                <Form form={form}>


                    {/* ================================Row 1 ======================================================== */}
                    <div className='employeeDetails'>
                        <div className="employeeModalInput">
                            <h5>Name</h5>
                            <Form.Item name="employee_name" rules={[
                                { required: true },

                            ]}>

                                <Input
                                    className="employeeModalInput"
                                    type="text"
                                    placeholder="Employee Name"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.toUpperCase()
                                    }}
                                />
                            </Form.Item>
                        </div>
                        <div className="employeeModalInput">
                            <h5>Passport No</h5>
                            <Form.Item name="passport_number" rules={[
                                { required: true },

                            ]}>

                                <Input
                                    className="employeeModalInput"
                                    type="text"
                                    placeholder="Passport Number"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.toUpperCase()
                                    }}
                                />
                            </Form.Item>
                        </div>
                        <div className="employeeModalInput">
                            <h5>Nationality</h5>
                            <Form.Item name="nationality" >
                                <Input
                                    className="employeeModalInput"
                                    type="text"
                                    placeholder="Nationality"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.toUpperCase()
                                    }}
                                />
                            </Form.Item>
                        </div>
                    </div>




                    {/* ======================================Row 2 ======================================= */}

                    <div className='employeeDetails'>
                        <div className="employeeModalInput">
                            <h5>Passport Expiry</h5>
                            <Form.Item name="passport_expiry" >
                                <DatePicker format='DD-MM-YYYY' />
                            </Form.Item>
                        </div>
                        <div className="employeeModalInput">
                            <h5>Work Type</h5>
                            <Form.Item name="work_type" >

                                <Select
                                    placeholder='Work Type'
                                    options={[
                                        {
                                            value: 'Express',
                                            label: 'Express',
                                        },
                                        {
                                            value: 'Part Time',
                                            label: 'Part Time',
                                        },
                                        {
                                            value: 'Temporary',
                                            label: 'Temporary',
                                        },
                                        {
                                            value: 'Relative',
                                            label: 'Relative',
                                        },
                                        {
                                            value: 'Golden Visa Work Permit',
                                            label: 'Golden Visa Work Permit',
                                        },
                                        {
                                            value: 'Investor',
                                            label: 'Investor',
                                        },
                                        {
                                            value: 'Golden Visa',
                                            label:'Golden Visa'
                                        }
                                    ]}
                                />
                            </Form.Item>
                        </div>
                        <div className="employeeModalInput">
                            
                            <Form.Item >
                                <Radio.Group >

                                    <Radio onClick={visitRadio} value={1} className='currentStatusRadio'>Visit</Radio>
                                    <Radio onClick={onArrivalRadio} value={2} className='currentStatusRadio'>On Arrival</Radio>
                                    <Radio onClick={cancelledRadio} value={3} className='currentStatusRadio'>Cancelled</Radio>
                                    <Radio onClick={eidRadio} value={4} className='currentStatusRadio'>Emirates ID</Radio>
                                </Radio.Group>
                                </Form.Item>
                                
                                {visit ?
                                    <>
                                        <h5>Entry Date</h5>
                                        <Form.Item name='visit_visa_date'>

                                         <DatePicker format='DD-MM-YYYY' /> 
                                        </Form.Item>
                                        </>
                                    : ''}
                                
                                {onArrival ? <> <h5>Entry Date</h5>
                                    <Form.Item name='on_arrival_date'>

                                    <DatePicker format='DD-MM-YYYY' />  
                                    </Form.Item>
                                </>
                                    : ''}
                                

                                {cancelled ? <> <h5>Expiry Date</h5>
                                    <Form.Item name='exp_after_cancel'>

                                    <DatePicker format='DD-MM-YYYY' />
                                    </Form.Item>

                                </> : ''}
                                {eid ? <> <h5>Expiry Date</h5>
                                    <Form.Item name='eid_exp'>

                                    <DatePicker format='DD-MM-YYYY' />
                                    </Form.Item>
                                </> : ''}
                                
                            
                        </div>
                    </div>



                    {/* ======================================Row 3 ======================================= */}

                    <div className='employeeDetails'>
                        <div className="employeeModalInput">
                            <h5>Labour Card Number</h5>
                            <Form.Item name="labour_number" >
                                <Input
                                    className="employeeModalInput"
                                    type="number"
                                    placeholder="Labour Number"

                                />
                            </Form.Item>
                        </div>
                        <div className="employeeModalInput">
                            <h5>Labour Expiry</h5>
                            <Form.Item name="labour_expiry" >

                                <DatePicker format='DD-MM-YYYY'/>
                            </Form.Item>
                        </div>
                        <div className="employeeModalInput">
                            <h5>Profission</h5>
                            <Form.Item name="profission" >
                                <Input
                                    className="employeeModalInput"
                                    type="text"
                                    placeholder="Profission"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.toUpperCase()
                                    }}

                                />
                            </Form.Item>
                        </div>
                    </div>


                    {/* ======================================Row 4 ======================================= */}

                    <div className='employeeDetails'>
                        <div className="employeeModalInput">
                            <h5>EID Number</h5>
                            <Form.Item name="eid_number" rules={[
                                { min: 15 },
                                {max:15}
                            ]}>
                            <Input
                                    className="employeeModalInput"
                                    type="number"
                                    placeholder="EID Number"

                                />
                            </Form.Item>
                        </div>
                        <div className="employeeModalInput">
                            <h5>UID Number</h5>
                            <Form.Item name="uid_number" >
                            <Input
                                    className="employeeModalInput"
                                    type="number"
                                    placeholder="UID Number"

                                />
                            </Form.Item>
                        </div>
                        
                        <div className="employeeModalInput">
                            <h5>Have Superate Insurance ?</h5>
                            
                            <div className='insu_date'>
                            <Form.Item  >
                                <Radio.Group defaultValue={2}>

                                    <Radio onClick={handleInsuranceRadioAsNo}  value={2}>No</Radio>
                                    <Radio onClick={handleInsuranceRadioAsYes} onChange={(e)=>e.target.value} value={1}>Yes</Radio>
                                </Radio.Group>
                                
                                {/* {superateInsurance ?
                                    
                                    <DatePicker  format='DD-MM-YYYY' />
                                    : ""
                                } */}

                            </Form.Item>
                                <div>
                                {superateInsurance ?
                                
                                <Form.Item name='insurance_exp'><DatePicker format='DD-MM-YYYY'/></Form.Item>
                                :''
                            }
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='employeeModalInput'>
                    <h5>ILOE</h5>
                    <Form.Item name='iloe_exp'>
                        <DatePicker format='DD-MM-YYYY'/>
                    </Form.Item>
                    </div>

                    



                   
                </Form>
            </Modal>
        </>
    );
};
export default AddEmployee;