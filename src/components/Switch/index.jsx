import React from 'react'
import CustomImage from '../CustomImage'

const CustomSwitch = ({value}) => {
    console.log(value);
  return (
    <div className="w-[25px] h-[25px] rounded border border-gray_400 flex justify-center items-center cursor-pointer">
        <CustomImage 
          url={value ? "/img/check.png" : "/img/closeRed.png"}
          classImg='w-[17px] h-[17px]'
          alt='icon'/>
    </div>
  )
}

export default CustomSwitch