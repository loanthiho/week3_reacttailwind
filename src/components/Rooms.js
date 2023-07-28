import React from "react";

const Rooms=() =>{
    return(
        <div className="max-w-[1400px] h-[500px] bg-blue-300 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
            <div className="lg:top-20 relative lg:col-span-1 col-span-2">
                <h3 className="text-3xl font-bold">Fine Interior Rooms</h3>
                <p className="pt-4"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
                    rerum iusto excepturi similique minus?
                </p>
            </div>
            <div className="grid grid-cols-2 col-span-2 gap-2">
                <img className="object-cover w-full h-full" src="https://dulichkhatvongviet.com/wp-content/uploads/2019/08/Mimosa-hotel-sapa.jpg">

                </img>
                <img className="row-span-2 object-cover w-full h-full" src="https://kenhhomestay.com/wp-content/uploads/2018/12/nha-nghi-sapa-lao-cai-12.jpg">

                </img>
                <img className="object-cover w-full h-full" src="https://dichoisapa.com/wp-content/uploads/2018/10/nha-nghi-tai-trung-tam-sapa-1.jpg">

                </img>
            </div>
        </div>
    )

}
export default Rooms;