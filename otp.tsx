'use client';
import React, { useRef } from 'react';
import BasicHeader from '../../components/common/basic-header';
import { Form, InputNumber } from 'antd';

const Page: React.FC = () => {
    const [form] = Form.useForm();
    const inputRefs = useRef<(React.RefObject<HTMLInputElement> | null)[]>(Array(6).fill(null).map(() => React.createRef())); 

    const onFinish = (values) => {
        const otpValue = `${values.number1}${values.number2}${values.number3}${values.number4}${values.number5}${values.number6}`;
        console.log('OTP Value:', otpValue);
    };

    const handleChange = (index, value) => {
        if (value !== null && value.toString().length === 1 && index < 5) {
            const nextInputRef = inputRefs.current[index + 1];
            if (nextInputRef && nextInputRef.current) {
                nextInputRef.current.focus();
            }
        }
    };

    return (
        <div>
            <BasicHeader heading='OTP' subHeading='Home' />
            <div className='px-8 lg:px-0 mt-4 max-w-[1320px] mx-auto'>
                <div className='bg-[#FF4E25] mx-auto max-w-[868px] px-5 md:px-[150px] lg:px-[250px] py-10 md:py-[100px] lg:py-[150px] rounded bg-opacity-10'>
                    <h2 className='auth-heading font-montserrat'>Verify Code</h2>
                    <p className='description mt-3'>please check <span className='text-primary'>support@12gmail.com</span></p>
                    <Form className='mt-6 md:mt-12 lg:mt-[104px]' onFinish={onFinish} form={form}>
                        <div className='flex justify-center space-x-2'>
                            {[0, 1, 2, 3, 4, 5].map((_, index) => (
                                <Form.Item
                                    key={index}
                                    name={`number${index + 1}`}
                                    noStyle 
                                >
                                    <InputNumber
                                        ref={inputRefs.current[index]} 
                                        className="border border-[#D9D9D9] w-full py-2 px-2 font-poppins font-bold text-xl rounded bg-[#FF4E2508]"
                                        controls={false}
                                        onChange={value => handleChange(index, value)}
                                        maxLength={1}
                                        type='number'
                                    />
                                </Form.Item>
                            ))}
                        </div>
                        <button type='submit' className='font-poppins auth-button py-4'>Verify</button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Page;
