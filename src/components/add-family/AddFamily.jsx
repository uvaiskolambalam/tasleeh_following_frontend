import React, { useState } from 'react';
import { Button, Modal,Form,Input } from 'antd';

const AddFamily = ({ handleSponserData}) => {
    const [form] = Form.useForm()
    const [isModalOpen, setIsModalOpen] = useState(false);
    
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Fmaily
      </Button>
          <Modal
              title="Family Sponser"
              open={isModalOpen}
              onOk={() => {
                form.validateFields()
                .then((values) => {
                  form.resetFields()
                  handleSponserData(values)
                  handleCancel()
                  
                  // console.log(values,'final valll');
                })
              }}
              onCancel={handleCancel}>
              <Form form={form}>
                      <span>Name</span>
                  <Form.Item name="sponser_name" >
              
              <Input
                className="modalInput"
                type="text"
                placeholder="Sponser Name..."
                onInput={(e) => {
                     e.target.value = e.target.value.toUpperCase()
                }}
              />
                  </Form.Item>
                      <span>Emirates ID</span>
                  <Form.Item name="sponser_id" rules={[
                      { min: 14, max: 14, message: 'Emirates Id Must have 14 Numbers' },
                      
                  ]}>
              
              <Input
                className="modalInput"
                type="number"
                placeholder="Emirates ID"
              />
                  </Form.Item>
                      <span>Company Name</span>
                  <Form.Item name="sponser_company">
              
              <Input
                className="modalInput"
                type="text"
                placeholder="Company Name"
                onInput={(e) => {
                     e.target.value = e.target.value.toUpperCase()
                 }}
              />
              </Form.Item>
              </Form>
       
      </Modal>
    </>
  );
};
export default AddFamily;