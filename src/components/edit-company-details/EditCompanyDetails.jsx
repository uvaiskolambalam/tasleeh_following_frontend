import React, { useEffect, useState } from 'react';
import { Button, Modal,Form,Input ,DatePicker,Space} from 'antd';
import { EditOutlined } from '@mui/icons-material';
// import { DatePicker } from '@mui/lab';
import moment from 'moment'

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';


dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;


const customWeekStartEndFormat = (value) =>
  `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
    .endOf('week')
        .format(weekFormat)}`;
    



const EditCompanyDetails = ({ handleCompanyDatas, companyDetails }) => {
  const initialValue=moment(companyDetails)
  const [form] = Form.useForm()
  // const { getFieldDecorator } = form;

  // const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  
  const onFinish = (data) => {
    console.log(data,'detaaa');
    }
    const  onSelectDate=(date, dateString)=> {
        console.log(date, dateString,'finallllllssldjf');
        // setDate(dateString);
  }
  console.log(companyDetails,'company detralllll');
 
  return (
    <>
      
      <Button type="primary" onClick={() => setModal2Open(true)}>
      <EditOutlined/>
      </Button>
      <Modal
        
        title="EDIT COMPANY DETAILS"
        centered
        open={modal2Open}
        onOk={() => {
          form.validateFields()
            .then((values) => {
              if (values.daman_exp) {
                values.daman_exp = values.daman_exp.format('DD/MM/YYYY')
              }
              if (values.echannel_exp) {
                values.echannel_exp = values.echannel_exp.format('DD/MM/YYYY')
              }
              if (values.license_exp) {
                values.license_exp= values.license_exp.format('DD/MM/YYYY') 
              }
              if (values.mensha_exp) {
                values.mensha_exp=values.mensha_exp.format('DD/MM/YYYY')
              }
              form.resetFields()
              handleCompanyDatas(values)
              setModal2Open(false)
              
              // console.log(values,'final valll');
            })
          
        }} 
        onCancel={() => setModal2Open(false)}
      >
        <Form form={form}>
      
            <span>COMPANY NAME</span>
                  <Form.Item  name="company_name" >
                  
              <Input
              className="modalInput"
              type="company_name"
              placeholder="Text here..."
              defaultValue={companyDetails.company_name}
              
            />
            
            </Form.Item>
          {/* </div> */}
          
          <div className="expiryOne">
            <div>

            <span>LICENSE EXPIRY</span>
           <Form.Item name="license_exp" >
              <DatePicker defaultValue={initialValue.license_exp} />
            </Form.Item>
            </div>
            <div>

            <span>MENSHA EXPIRY</span>
            <Form.Item name="mensha_exp">
            <DatePicker format='DD-MM-YYYY'/>
            </Form.Item>
            </div>
          </div>
          <div className="expiryOne">
            <div>
            <span>DAMAN EXPIRY</span>
            <Form.Item name="daman_exp">
            <DatePicker format='DD-MM-YYYY'/>
            </Form.Item>
            </div>
            <div>
            <span>ECHANNEL EXPIRY</span>
            <Form.Item name="echannel_exp">
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
export default EditCompanyDetails;