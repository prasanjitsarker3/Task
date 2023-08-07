import React from 'react';

const Pant = () => {
    const backgroundImageUrl = "https://img.freepik.com/premium-vector/abstract-blue-background-with-waves_266838-25.jpg?w=740"
    return (
        <div>
            <div style={{ backgroundImage: `url(${backgroundImageUrl})` }} className=' w-full mx-auto px-12 py-12 '>
                <div className='w-full md:flex  gap-12'>
                    <div className='mx-auto md:w-1/2 space-y-5'>
                        <p className='textColor text-2xl'>Jeans <span className='textYellow '> Pants</span></p>
                        <h1 className='bgColor paddingDes text-white p-3 inline-block '>পুরুষ এবং মহিলাদের জন্য ডেনিম জিন্স</h1>
                        <h1 className='textColor text-3xl font-bold'>স্টাইলিশ ন্যারো ফিটিং সেমি স্টিচড ডেনিম জিন্স প্যান্ট.</h1>
                        <p className='textColor text-lg'>সর্বমোট মূল্য:</p>
                        <p className='textColor text-xl'>৳ 750.00 <span className='textYellow'>৳ 550.00</span></p>
                        <button className='paddingDes bgColors p-3 px-5'>অর্ডার করুন </button>
                        <p className='textColor text-xl'>ঢাকার বাহিরে থেকে অর্ডার করতে চাইলে ১৫০ টাকা অগ্রিম ডেলিভারি পরিশোধ করুন</p>
                    </div>
                    <div className='mx-auto text-center'>
                        <img src="https://i.ibb.co/BNFtMyv/Screenshot-2023-08-05-235922-removebg-preview-1.png" alt="" />

                        <p className='paddingDes bgColors p-3 px-8 inline-block text-center textColor font-bold text-xl'>01894844452</p>
                        <br />
                        <p className='paddingDes bgColor text-white p-3 px-10 inline-block'>সরাসরি কিনতে ফোন করুন</p>
                    </div>

                </div>
            </div>
            <div className='px-12'>
                <div>
                    <p className='text-left text-lg textColor py-10'>আমাদের এই ডেনিম ফেব্রিক ১০০% কটন টুইল বা স্টেচ টুইল দিয়ে তৈরি হয়।
                        এই ফেব্রিক দিয়ে তৈরি হয় শার্ট, জিন্স, ব্যাগ, জ্যাকেটসহ আরও অনেক কিছু।  নিয়মিত ব্যবহারের জন্য জিন্স প্যান্টের কোনো তুলনা হয় না। জিন্স তৈরিতে ব্যবহার করা হয় ডেনিম কটন যা সম্পূর্ণ সুতি। ছেলেদের জিন্স প্যান্টের দাম ও ডিজাইন দেখে কিনুন বাংলাদেশের অন্যতম সেরা অনলাইন শপ অফুরন্ত থেকে।</p>
                </div>
                <div className='pb-12'>
                    <div className='grid md:grid-cols-2 gap-5 '>
                        <img src="https://img.freepik.com/premium-photo/blue-jeans-pants-clothes-pile-background-detail-nice-blue-jeans_58460-9515.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais" alt="" srcset="" className='mx-auto h-[330px] w-[280px] rounded-3xl' />
                        <div>
                            <h1 className='textColor text-xl'>আমাদের ডেনিম জিন্স প্যান্ট প্রোডাক্টের বিবরণ</h1>
                            <div className='grid grid-cols-2 gap-2 text-lg textColor'>
                                <p>Men's Denim Pant.</p>
                                <p>Style- Narrow Slim Fit</p>
                                <p>Size- 30/32/34/36</p>
                                <p>Very Comfortable to Wear.</p>
                                <p>Spandax- 2%</p>
                                <p>Nice Stylish Narrow Slim Fit.</p>
                                <p>Fabrics- Denim</p>
                            </div>
                            <p className='text-2xl font-bold textYellow'>ডেনিম ফেব্রিক জিন্স সাইজ</p>
                            <div className=' space-x-5'>
                                <p className='textColor font-bold bg-emerald-600 inline-block rounded-full p-2'>30</p>
                                <p className='textColor font-bold bg-emerald-600 inline-block rounded-full p-2'>32</p>
                                <p className='textColor font-bold bg-emerald-600 inline-block rounded-full p-2'>34</p>
                                <p className='textColor font-bold bg-emerald-600 inline-block rounded-full p-2'>36</p>

                            </div>
                        </div>
                    </div>
                    <div className='relative  '>
                        <img className='w-full md:h-[500px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 21)]' src="https://img.freepik.com/free-photo/sale-from-jean-texture_1323-267.jpg?w=740&t=st=1691263616~exp=1691264216~hmac=3575980827b9057645f41fa58cc716499760a6baa2889bdce146317b822ce9ef" alt="" srcset="" />
                        <div className='absolute bottom-12 left-1/2 transform -translate-x-1/2 '>
                            <p className='text-white  font-bold text-2xl md:px-16'>সবচেয়ে চেয়ে কম দামে আমাদের থেকে কিনুন।</p>
                            <p className='paddingDes bgColors p-3 md:px-16 inline-block text-center textColor font-bold text-xl'>01894844452</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pant;