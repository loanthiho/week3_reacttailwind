import React from "react";

const Plan=() =>{
    return(
        <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
            <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
                <img className="row-span-3 object-cover w-full h-full p-2" src="https://ik.imagekit.io/tvlk/blog/2022/01/dia-diem-du-lich-sapa-27.jpg"></img>
                <img className="row-span-2 object-cover w-full h-full p-2" src="https://viettrekking.vn/wp-content/uploads/2020/01/cat-cat-sapa-viet-nam-2-600x524-1.jpg"></img>
                <img className="row-span-2 object-cover w-full h-full p-2" src="https://viettrekking.vn/wp-content/uploads/2020/01/30097580257_5b7be918f6_c-1.jpg"></img>
                <img className="row-span-3 object-cover w-full h-full p-2" src="https://scontent.iocvnpt.com/resources/portal/Images/LCI/phanphuong/SA%20PA/diem-du-lich-sa-pa%20(1)_366361422.jpg"></img>
                <img className="row-span-2 object-cover w-full h-full p-2" src="https://sakos.vn/wp-content/uploads/2023/05/du-lich-sapa-tet-duong-lich-2020.jpg"></img>
            </div>
            <div className="flex flex-col h-full justify-center">
                <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
                <p className="text-2xl py-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,nam?</p>
                <p className="pb-6">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    voluptates nostrum dolorum reprehenderit error! Doloribus est illo
                    eius saepe? Molestias sapiente perspiciatis doloribus consectetur
                    nihil facilis aliquid eaque vel quisquam.</p>
            <div>
                <button className="border-black mr-4 hover:shadow-xl"> Learn More</button>
                <button className="bg-black text-white border-black mr-4 hover:shadow-xl">Book Your Trip</button>
            </div>
            </div>
        </div>
    )

}
export default Plan;