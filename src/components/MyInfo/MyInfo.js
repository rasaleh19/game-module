import React from 'react';
import myImage from '../../images/Rakib.jpg';
import './MyInfo.css'

const MyInfo = () => {
  return (
    <div>
      <div className="flex mb-5">
        <img className="h-12 w-12 rounded-full" src={myImage} alt="" />
        <h2 className="text-black-700 ml-12 font-bold">Rakib Ahmed Saleh</h2>
      </div>
      <div className="bg-gray-100 rounded-lg flex justify-between p-4 mr-4">
        <div className="text-black-800 font-bold"> 78Kg</div>
        <div className="text-black-800 font-bold"> 5.9</div>
        <div className="text-black-800 font-bold"> 39yrs</div>
      </div>
      <div className="bg-gray-100 rounded-lg flex justify-between p-4 mr-4">
        <div className="text-black-800 "> Weight</div>
        <div className="text-black-800 "> Height</div>
        <div className="text-black-800 "> Age</div>
      </div>

    </div>
  );
};

export default MyInfo;