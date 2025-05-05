import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const OTP = () => {
    const [otp, setOtp] = useState("");

    const handleOTP = () => {
        const random = Math.floor(10000 + Math.random() * 90000);
        setOtp(random);
    };

    useEffect(() => {
        setTimeout(() => setOtp(""), 10000);
    }, [handleOTP]);

    return (
        <>
            <div className='bg-black text-white min-h-screen p-12 flex justify-center items-center '>
                <h1>Your OTP: {otp}</h1>
                <button
                    onClick={handleOTP}
                    className='bg-blue-500 text-white font-bold ml-3 p-2 rounded-md'
                >Send OTP</button>
                <button
                    className='bg-blue-500 text-white font-bold ml-3 p-2 rounded-md'
                    onClick={handleOTP}
                >Resend</button>
            </div>
        </>
    );
};

export default OTP