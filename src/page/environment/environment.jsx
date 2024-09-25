import React from 'react';
import Header from '../../components/header/header';
import './environment.scss';
import koi from '../../img/background.jpg';
import hoca from '../../img/hoca.jpg';
import { Select, Form, Input, Row, Col,Button } from "antd";
import Footer from '../../components/footer/footer';

function Environment() {
  return (
    <div className='EnvironmentPage'>
        <Header/>
        <div className='Environment__img'>
            <img src={koi} alt="" />
        </div>

        <div className='Environment__body'>
            <h1>Environment Monitor</h1>
            <div className='Environment__infor'>
                <div className='Environment__left'>
                    <img src={hoca} alt="" />
                    
                    <Form className='Environment__form1'>
                        <Row gutter={16}>
                            <Col xs={24} sm={12}>
                                <Form.Item labelCol={{ span: 24 }} label="Name:" name="name">
                                    <Input />
                                </Form.Item>

                                <Form.Item labelCol={{ span: 24 }} label="Drain Count:" name="drainCount">
                                    <Input />
                                </Form.Item>

                                <Form.Item labelCol={{ span: 24 }} label="Skimmer Count:" name="skimmerCount">
                                    <Input />
                                </Form.Item>

                                <Form.Item labelCol={{ span: 24 }} label="Other Pond:" name="otherPond">
                                    <Select>
                                        <Select.Option value="Pond__1">Pond 1</Select.Option>
                                        <Select.Option value="Pond__2">Pond 2</Select.Option>
                                        <Select.Option value="Pond__3">Pond 3</Select.Option>
                                        <Select.Option value="Pond__4">Pond 4</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            
                            <Col xs={24} sm={12}>
                                <Form.Item labelCol={{ span: 24 }} label="Volume:" name="volume">
                                    <Input />
                                </Form.Item>

                                <Form.Item labelCol={{ span: 24 }} label="Depth:" name="depth">
                                    <Input />
                                </Form.Item>
                          
                                <Form.Item labelCol={{ span: 24 }} label="Pumping Capacity:" name="pumpingCapacity">
                                    <Input />
                                </Form.Item>                                

                                <Form.Item labelCol={{ span: 24 }} label="Additional Info:" name="additionalInfo">
                                    <Input />
                                </Form.Item>
                            </Col>  
                        </Row>
                        <Button className='Environment__but1' type="secondary" htmlType="submit">Save</Button>
                    </Form>
                </div>

                <div className='divider'></div>

                <div className='Environment__right'>
                    
                <Form className='Environment__form2'>
                        <p>Water Parameters</p>
                        <Row gutter={16}>
                            <Col xs={24} sm={12}>
                                <Form.Item labelCol={{ span: 24 }} label="Name:" name="name">
                                    <Input />
                                </Form.Item>

                                <Form.Item labelCol={{ span: 24 }} label="Nitrite (NO2):" name="drainCount">
                                    <Input />
                                </Form.Item>

                                <Form.Item labelCol={{ span: 24 }} label="Nitrate (NO3):" name="skimmerCount">
                                    <Input />
                                </Form.Item>

                                <Form.Item labelCol={{ span: 24 }} label="Phosphate (PO4):" name="otherPond">
                                    <Input />
                                </Form.Item>
                            </Col>
                            
                            <Col xs={24} sm={12}>
                                <Form.Item labelCol={{ span: 24 }} label="Date & Time:" name="">
                                    <Input />
                                </Form.Item>

                                <Form.Item labelCol={{ span: 24 }} label="Oxygen (O2):" name="">
                                    <Input />
                                </Form.Item>
                          
                                <Form.Item labelCol={{ span: 24 }} label="Temperature:" name="">
                                    <Input />
                                </Form.Item>                                

                                <Form.Item labelCol={{ span: 24 }} label="pH-Value:" name="">
                                    <Input />
                                </Form.Item >                               
                            </Col>  
                        </Row>
                            <Form.Item labelCol={{ span: 24 }} label="Note:" name="">
                                <Input.TextArea rows={5} className='textarea'></Input.TextArea>
                            </Form.Item>
                        <Button className='Environment__but1' type="secondary" htmlType="submit">Save</Button>
                    </Form>

                </div>
            </div>
        </div>
        <br />
        <br />
        <Footer/>
    </div>
  )
}

export default Environment;
