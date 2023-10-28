import React, { useEffect, useState } from 'react';
import { Table, Divider, Button, Form, Input } from 'antd';
import toast from "react-hot-toast";
import './UserList.css'
import {SearchOutlined} from '@ant-design/icons'
import { useParams } from 'react-router-dom';
import { EditOutlined } from '@mui/icons-material';
import AddCompanyDetails from '../components/addCompanyDetails/AddCompanyDetails'
import EditCompanyDetails from '../components/edit-company-details/EditCompanyDetails';
import SERVER_URL from '../utils/axios';
import AddEmployee from '../components/add-employee/AddEmployee';

const columns = [
    
  {
    title: 'Name',
    dataIndex: 'name',
        filterDropdown: ({setSelectedKeys, selectedKeys,confirm,clearFilters}) => {
            return(
            <>
                    <Input
                        className='userSearchIput'
             
                autoFocus
                placeholder='Type text here...'
                value={selectedKeys[0]}
                        onChange={(e) => {
                            console.log(e.target.value,'eeeee');
                    setSelectedKeys(e.target.value?[e.target.value]:[])
                    confirm({closeDropdown:false})
                }}
                onPressEnter={() => {
                    confirm()
                 }}
                onBlur={() => {
                    confirm()
                }}
            />
                <Button onClick={() => {
                    confirm()
                }} type='primary' >Search</Button>
            <Button onClick={()=>{
                    clearFilters()
                }} type='primary' danger >Reset</Button>
                </>
                )
    },
        filterIcon: () =>{
        return <SearchOutlined/>
        },
        onFilter: (value, record) => {
            console.log(value, record,'value,record');
            return record.name.toLowerCase().includes(value.toLowerCase())
        }
  },
  {
    title: 'Emirates ID',
      dataIndex: 'emirates_id',
      filterDropdown: ({setSelectedKeys, selectedKeys,confirm,clearFilters}) => {
        return(
        <>
                <Input
                    // className='userSearchIput'
         
                    autoFocus
                    type='number'
            placeholder='Type text here...'
            value={selectedKeys[0]}
                    onChange={(e) => {
                        // e.preventDefault()
                console.log(e.target.value,'emirates id');
                setSelectedKeys(e.target.value?[e.target.value]:[])
                confirm({closeDropdown:false})
            }}
            onPressEnter={() => {
                confirm()
             }}
            onBlur={() => {
                confirm()
            }}
        />
            <Button onClick={() => {
                confirm()
            }} type='primary' >Search</Button>
        <Button onClick={()=>{
                clearFilters()
            }} type='primary' danger >Reset</Button>
            </>
            )
},
    filterIcon: () =>{
    return <SearchOutlined/>
    },
    onFilter: (value, record) => {
        return record.emirates_id === value 
    }
  },
  {
    title: 'Labour NO',
    dataIndex: 'labour_number',
    filterDropdown: ({setSelectedKeys, selectedKeys,confirm,clearFilters}) => {
        return(
        <>
                <Input
                    // className='userSearchIput'
         
            autoFocus
            placeholder='Type text here...'
            value={selectedKeys[0]}
            onChange={(e) => {
                setSelectedKeys(e.target.value?[e.target.value]:[])
                confirm({closeDropdown:false})
            }}
            onPressEnter={() => {
                confirm()
             }}
            onBlur={() => {
                confirm()
            }}
        />
            <Button onClick={() => {
                confirm()
            }} type='primary' >Search</Button>
        <Button onClick={()=>{
                clearFilters()
            }} type='primary' danger >Reset</Button>
            </>
            )
},
    filterIcon: () =>{
    return <SearchOutlined/>
    },
      onFilter: async(value, record) => {
          console.log(value, record,'value,record');
        return await record.labour_number === value
    }
    },
  {
    title: 'Emirates ID Exp',
    dataIndex: 'emitates_id_exp'
  },
  {
      title: 'Labour Exp',
      dataIndex: 'labour_exp'
    },
];
const data = [
  {
    key: '1',
    name: 'nahu',
    emirates_id: 784199878458746,
    labour_number:107874659,
    emitates_id_exp: '25/04/2025',
    labour_exp: '12/08/2026',
    
    },
    {
        key: '2',
        name: 'uvvu',
        emirates_id: 33,
        labour_number: 107874659,
        emitates_id_exp: '25/04/2025',
        labour_exp: '12/08/2026',
        
    },
    {
        key: '3',
        name: 'arshi',
        emirates_id: 78419987845745,
        labour_number: 107874659,
        emitates_id_exp: '25/04/2025',
        labour_exp: '12/08/2026',
        
    },
    {
        key: '4',
        name: 'sanu',
        emirates_id: 784199876746,
        labour_number: 10,
        emitates_id_exp: '25/04/2025',
        labour_exp: '12/08/2026',
        
        },
    
    
    
  
];
const UserList = ({ rowId }) => {
    const [companyDetails,setCompanyDetails ]=useState({})
    const { companyId } = useParams()
    // console.log(companyId,'comapny id');
    
    // const handleCompanyDatas = async(values) => {
    //     const companyDatas = {
            
    //     }
    //     console.log(values,'final comapny data');
    // }
    console.log(rowId,'row id');

    const [companyDetailsExp, setCompanyDetailsExp] = useState(false)
    const editCompanyDetails = () => {
        setCompanyDetailsExp(!companyDetailsExp)
    }
    const handleCompanyDatas=async(value) => {
        console.log(value, 'company datas vau');
        const response = await SERVER_URL.patch(`/companies/editCompanyDetails/${companyId}`, value) 
        console.log(response.data.sucess,'response data messate');
        if (response.data.success===false) {
            
            toast.error("Comany Data Not Updated")
        }
        else {
            toast.success(response.data.message)
            getOwnCompanyDetails()
        }
        // setCompanyDetailsExp(!companyDetailsExp)
    }
    const getOwnCompanyDetails = async() => {
        const response = await SERVER_URL.get(`/companies/getOwnCompanyDetails/${companyId}`)
       
        setCompanyDetails(response.data)
        // console.log(response.data.company_name,'own company');
    }
    const handleEmployeeData = async(values) => {
        const response = await SERVER_URL.post(`/users/employeeDetails/${companyId}`,values)
        console.log(values)
    }
    useEffect(() => {
        getOwnCompanyDetails()
    },[])
        return(
    <>
        <div className="CompanyDetailContainer">
            <div className="companyDetails">
                        <div className="companyDatailsEdit" >
                            <EditCompanyDetails handleCompanyDatas={handleCompanyDatas} companyDetails={companyDetails} />
                            
                            {/* <AddCompanyDetails/> */}
                           {/*      handleCompanyDatas={handleCompanyDatas}
                            /> */}
                    {/* <Button onClick={editCompanyDetails}>f<EditOutlined /></Button> */}
                </div>
                    {/* <p>Company Name: Baik bin hassan coal & enngj sole proprietorship llc </p> */}
                <div className="companyDetailsLeft">
                            <h5>COMPANY NAME: <span>{ companyDetails.company_name}</span> </h5>
                    <h5>LICENSE NUMBER: <span>{ companyDetails.lisence_number}</span>  </h5>
                    <h5>COMPANY CODE: <span>{ companyDetails.company_code} </span> </h5>
                    <h5>MENSHA NUMBER: <span>{ companyDetails.mensha_no}</span>  </h5>
                </div>
                <div className="companyDetailsCenter">
                    <h5>ECHANNEL EXPIRY: <span>{companyDetails.echannel_exp}</span>   </h5>
                    <h5>LICENSE EXPIRY: <span>{ companyDetails.license_exp}</span></h5>
                    <h5>DAMAN EXPIRY: <span>{companyDetails.daman_exp}</span> </h5>

                </div>
                
                    </div>
                   
                 
        </div>
                <Divider>Employees</Divider>
                {/* <Button onClick={editCompanyDetails}>+</Button> */}
                
                <AddEmployee handleEmployeeData={ handleEmployeeData} />
                
                
        <Table columns={columns} dataSource={data} size="middle" />
   
    </>
)};
export default UserList;