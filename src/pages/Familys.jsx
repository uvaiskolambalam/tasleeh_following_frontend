import React, { useEffect, useState } from 'react';
import { Table, Divider } from 'antd';
import toast from "react-hot-toast";
import AddFamily from '../components/add-family/AddFamily'
import SERVER_URL from '../utils/axios';


const columns = [
  {
    title: 'Name',
    dataIndex: 'sponser_name',
  },
  {
    title: 'Emirates ID',
    dataIndex: 'sponser_id',
  },
  {
    title: 'Company Name',
    dataIndex: 'sponser_company',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];
const Familys = () => {
    const [sponsers,setSponsers]=useState([])
    const handleSponserData = async (values) => {
        const response = await SERVER_URL.post('/familys/familys', values)
        console.log(response.data,'response data');
        if (response.data.success) {
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        }
        // console.log(value,'spornces data');
        getFamilySponsers()
    }
    const getFamilySponsers=async() => {
        const response = await SERVER_URL.get('/familys/getSponsers')
        const allSponsers = response.data.sponsers
        setSponsers(allSponsers)
        console.log(allSponsers,'allsponsers');
    }
    useEffect(() => {
        getFamilySponsers()
      }, [])
    
    
    return(
    <>
        <Divider>FAMILY SPONSERS</Divider>
        <AddFamily
            handleSponserData={handleSponserData}
        />
        
        <Table columns={columns} dataSource={sponsers} size="middle" />
    
    </>
)};
export default Familys;