import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';


export const AddSponser = ({handleDomesticSponserData}) => {
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
      <div>
          <Button type="primary" onClick={showModal}>
        Add Sponser
          </Button>
          <Modal
                title="Family Sponser"
              open={isModalOpen}
              onOk={() => {
                form.validateFields()
                .then((values) => {
                  form.resetFields()
                  handleDomesticSponserData(values)
                  handleCancel()
                  
                  // console.log(values,'final valll');
                })
              }}
                onCancel={handleCancel}>
              <Form form={form}>
                  <span>Name</span>
                  <Form.Item name='domestic_sponser_name'>
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
                  <Form.Item name='domestic_sponser_eid'>
                  <Input
                className="modalInput"
                type="number"
                placeholder="Sponser Name..."
                         
                      />
                      
                  </Form.Item>
                  
                  <span>Nationality</span>
                  <Form.Item name='domestic_sponser_nationality'>
                  <Input
                className="modalInput"
                type="text"
                placeholder="Sponser Name..."
                onInput={(e) => {
                     e.target.value = e.target.value.toUpperCase()
                }}
              />
                  </Form.Item>
              </Form>
              
          </Modal>
    </div>
  )
}
