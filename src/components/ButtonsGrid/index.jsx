import React from 'react'

const ButtonsGrid = ({ data, dataSelected, handleData }) => {
  return (
    <div className='w-auto flex justify-center items-center gap-2'>
        {data.map((d, index) => {
            return (
                <button 
                  key={index} 
                  onClick={() => handleData(d)}
                  className={`${dataSelected.value == d.value ? "bg-[#1F2A37]" : ""} cursor-pointer font-semibold text-sm px-2 py-1 rounded-xl border border-gray-400 text-white`}>
                    {d.label}
                </button>
            )
        })}
    </div>
  )
}

export default ButtonsGrid