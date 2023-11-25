import { assets } from '@/assets';
import React from 'react';


const paymentOptions = [
    {image: assets.bkash, title: '', href: ''},
    {image: assets.gpay, title: '', href: ''},
    {image: assets.nagad, title: '', href: ''},
    {image: assets.payoneer, title: '', href: ''},
    {image: assets.worldpay, title: '', href: ''},
    {image: assets.stripe, title: '', href: ''},
    {image: assets.paypal, title: '', href: ''},
    {image: assets.card, title: '', href: ''},
    {image: assets.visa, title: '', href: ''},
    {image: assets.cashOnDelivery, title: '', href: ''},
    
]

const PaymentMethod = () => {

    return (
        <div className='py-6'>
            <h1 className="text-[26px] font-mono antialiased font-medium tracking-wide ">
                Payment Method
            </h1>
            <div className="flex flex-wrap px-[15rem] gap-4 justify-center items-center">
                {paymentOptions.map((data, index) => (
                    <div key={index} className="w-[80px] h-[80px] flex justify-center items-start">
                        <img src={data.image} alt="images" className='w-full h-full' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaymentMethod;