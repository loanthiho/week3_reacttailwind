import React from "react";

const Hero=() =>{
    return(
        <div className="w-full h-screen">
           <img className="top-0 left-0 w-full h-screen object-cover" src="https://owa.bestprice.vn/images/articles/uploads/top-15-dia-diem-nen-di-o-sapa-duoc-yeu-thich-nhat-5f1e51098fe6a.jpg"></img>
           <div className="bg-black/30 top-0 left-0 w-full h-screen" />
           <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
                <div className="md:left-[10%] max-w-[1400px] m-auto absolute p-4">
                    <p>All Inclusive</p>
                    <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Private Beaches & Getaways</h1>
                    <p className="max-w-[300px] drop-shadow-2xl py-2 text-xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
                        est, id consequuntur sequi ipsum vitae sit non exercitationem.
                    </p>
                    <button className='bg-white text-black '>Reserve Now</button>
                </div>
           </div>
        </div>
    )

}
export default Hero;