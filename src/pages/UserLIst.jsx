import React, { useState } from 'react';
import { Table, Divider,Button,Form,Input } from 'antd';
import './UserList.css'
import { EditOutlined, UserAddOutlined } from '@mui/icons-material';
import AddCompanyDetails from '../components/addCompanyDetails/AddCompanyDetails'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Emirates ID',
    dataIndex: 'emiratesID',
  },
  {
    title: 'Labour NO',
    dataIndex: 'labourNO',
    },
  {
    title: 'Emirates ID Exp',
    dataIndex: 'emitatesIDExp'
  },
  {
      title: 'Labour Exp',
      dataIndex: 'labourExp'
    },
    {
        title: 'ILOE',
        dataIndex: 'iloe'
  }
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    emiratesID: 784199878458746,
    labourNO: 107874659,
    emitatesIDExp: '25/04/2025',
    labourExp: '12/08/2026',
    iloe:'10/09/2024'
    },
    
  
];
const UserList = () => {
    const [companyDetailsExp, setCompanyDetailsExp] = useState(false)
    const editCompanyDetails = () => {
        setCompanyDetailsExp(!companyDetailsExp)
    }
    const companyDatas=(value) => {
        console.log(value, 'company datas vau');
        setCompanyDetailsExp(!companyDetailsExp)
    }
        return(
    <>
        <div className="CompanyDetailContainer">
            <div className="companyDetails">
                <div className="companyDatailsEdit" >
                    <Button onClick={editCompanyDetails}><EditOutlined /></Button>
                </div>
                    {/* <p>Company Name: Baik bin hassan coal & enngj sole proprietorship llc </p> */}
                <div className="companyDetailsLeft">
                    <p>Company Name: Baik bin hassan coal & enngj sole proprietorship llc </p>
                    <p>Company Code: 25487965 </p>
                    <p>Mensha No: 25487965 </p>
                </div>
                <div className="companyDetailsCenter">
                    <p>Immigration Exp: 12/05/2025 </p>
                    <p>Labour Exp: 25/01/2024 </p>
                    <p>Daman Exp: 35/24/2563 </p>

                </div>
                <div className="companyDetailsRight">
                    <p>Lisence Exp:25/48/9658 </p>
                    <p>Company Name: </p>
                    <p>Company Name: </p>

                </div>
                    </div>
                    <AddCompanyDetails/>
                    {companyDetailsExp ?
            <Form onFinish={companyDatas}>
                <div className="editCompanyDetails">
                    <div className="companyDetailsEdit">
                        <div className="ExpiryDate">
                            <p>License Expiry Date</p>
                            <Form.Item name="license">
                                <Input
                                    className="modalInput"
                                    type="date"
                                    placeholder="Select Date..."
                                />
                            </Form.Item>
                        </div>
                        <div className="ExpiryDate">
                            <p>Echannel Expiry Date</p>
                            <Form.Item name="echannel">
                                <Input
                                    className="modalInput"
                                    type="date"
                                    placeholder="Select Date..."
                                />
                            </Form.Item>
                        </div>

                    </div>
                    <div className="companyDetailsEdit">
                        <div className="ExpiryDate">
                            <p>Mensha Expiry Date</p>
                            <Form.Item name="mensha">
                                <Input
                                    className="modalInput"
                                    type="date"
                                    placeholder="Select Date..."
                                />
                            </Form.Item>
                        </div>
                        <div className="ExpiryDate">
                            <p>Daman Expiry Date</p>
                            <Form.Item name="daman">
                                <Input
                                    className="modalInput"
                                    type="date"
                                    placeholder="Select Date..."
                                />
                            </Form.Item>
                        </div>
                        
                      
                    </div>
                    <div className="companyDetailsEdit">
                        <div className="ExpiryDate">
                            <p>Company NO</p>
                            <Form.Item name="companyNo">
                                <Input
                                    className="modalInput"
                                    type="number"
                                    placeholder="Select Date..."
                                />
                            </Form.Item>
                        </div>
                        <div className="ExpiryDate">
                            <p>Mensha NO</p>
                            <Form.Item name="menshaNo">
                                <Input
                                    className="modalInput"
                                    type="number"
                                    placeholder="Select Date..."
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <Form.Item>
                        <Button htmlType="submit" >SUBMIT</Button>   
                    </Form.Item>
                </div>
             </Form>
                        :""}
        </div>
                <Divider>Employees</Divider>
                <Button onClick={editCompanyDetails}>+</Button>
                
        <Table columns={columns} dataSource={data} size="middle" />
   
    </>
)};
export default UserList;