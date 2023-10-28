import React, { useState } from 'react';
import { Button, Modal,Form,Input,DatePicker } from 'antd';
import { EditOutlined } from '@mui/icons-material';
import './AddCompanyDetail.css'
// import { DatePicker } from '@mui/lab';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';


dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const AddCompanyDetails = ({handleCompanyDatas}) => {
  const [form] = Form.useForm()
  // const { getFieldDecorator } = form;

  // const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  
  const onFinish = (data, dateString) => {
    
     
      
    
  }
  const  onSelectDate=(date, dateString)=> {
    console.log(date, dateString,'finallllllssldjf');
    // setDate(dateString);
  }
  return (
    <>
      
      <Button type="primary" onClick={() => setModal2Open(true)}>
        NEW COMPANY
      {/* <EditOutlined/> */}
      </Button>
      <Modal
        
        title="COMPANY DETAILS"
        centered
        open={modal2Open}
        onOk={() => {
          form.validateFields()
          .then((values) => {
            // console.log(json.stringify(values),'dateString')\
            if (values.license_exp) {
              
              values.license_exp = values.license_exp.format('DD/MM/YYYY')
            }
            if (values.mensha_exp) {
              
              values.mensha_exp= values.mensha_exp.format('DD/MM/YYYY')
            }
            if (values.daman_exp) {
              
              values.daman_exp = values.daman_exp.format('DD/MM/YYYY')
            }
            if (values.echannel_exp) {
              
              values.echannel_exp = values.echannel_exp.format('DD/MM/YYYY')
            }
            // values["license_exp"] = moment(values.license_exp).format("DD-MM-YYYY")
            // values.licenseEexp=values['license_exp'].format('DD/MM/YY')
      // console.log(dateString,'dateString');
            
            form.resetFields()
            handleCompanyDatas(values)
            setModal2Open(false)
             
            // console.log(values,'final valll');
            console.log(values,'detaaa');
          })
          
        }} 
        onCancel={() => setModal2Open(false)}
      >
        <Form form={form}>
          <span>Company Name</span>
            <Form.Item  name="company_name" rules={[
              {required:true},
              {min: 8}

              ]}>
              
            <Input
              className="modalInput"
              type="text"
              placeholder="Text here..."
              onInput={(e) => {
                e.target.value = e.target.value.toUpperCase()
           }}
            />
          </Form.Item>
          <span>Lisence Number</span>
          <Form.Item name="lisence_number"
            rules={[
              {required:true}]}>
              
            <Input
              className="modalInput"
              type="text"
              placeholder="Lisence Number..."
            />
          </Form.Item>
          {/* <span>Company Email</span>
            <Form.Item  name="email">
              <Input
              className="modalInput"
              type="email"
              placeholder="Text here..."
            />
            
            </Form.Item> */}
          {/* </div> */}
          <div className="expiryOne">
            <div className='exp'>
            <span>Company Code</span>
            <Form.Item  name="company_code" className='exp'>
              
              <Input
                className="modalInput"
                type="number"
                placeholder="Company Code"
              />
              </Form.Item>
           </div>
            <div className='exp'>
            <span>Mensha No</span>
            <Form.Item  name="mensha_no" className='exp'>
              <Input
              className="modalInput"
              type="number"
              placeholder="Mensha Number"
            />
            </Form.Item>
            </div>
          </div>
          <div className="expiryOne">
            <div className='exp'>
              <span>License Exp</span>
            <Form.Item  name="license_exp" className='exp'rules={[
              {required:true}]}>
           <DatePicker format='DD-MM-YYYY' />
            </Form.Item>
            </div>
            <div>
              <span>Mensha Exp</span>
            <Form.Item name="mensha_exp" className='exp'>
              <DatePicker format='DD-MM-YYYY'/>
            </Form.Item>
            </div>

           
          </div>
          <div className="expiryOne">
            <div>
              <span>Daman Exp</span>
            <Form.Item name="daman_exp" className='exp'>
              <DatePicker format='DD-MM-YYYY' />
            </Form.Item>
           </div>
            <div className='exp'>
              <span>Echannel Exp</span>
              <Form.Item name="echannel_exp" className='exp'>
                {/* <input type="date" /> */}
              <DatePicker format='DD-MM-YYYY'/>
            </Form.Item>
            </div>
          </div>
        

          {/* </Form> */}
          {/* <Button htmlType='submit'>submit</Button> */}
          </Form>
      </Modal>
    </>
  );
};
export default AddCompanyDetails;