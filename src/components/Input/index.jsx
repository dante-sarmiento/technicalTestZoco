import React, { useState } from 'react'
import CustomImage from '../CustomImage'

const Input = ({ value = "", handleChange, placeholder = "", type = "", field = "", section = null, isEditing, dataSelect }) => {
    const [openSelect, setOpenSelect] = useState(false)

    return (
        <div className='w-full relative flex flex-col' onClick={() => setOpenSelect(!openSelect)}>
            <div className='w-full border-b border-gray-200 px-2 h-[35px] flex justify-center items-center'>
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => handleChange(section, field, e.target.value)}
                    className="w-full outline-none text-xl bg-transparent text-white"
                    required
                    disabled={!isEditing}
                />
                {isEditing && dataSelect && (
                    <button >

                        <CustomImage
                            url='/img/arrowSelect.svg'
                            classImg='w-[15px] h-[15px]'
                            alt='arrow'
                        />
                    </button>
                )}
            </div>
            {dataSelect && openSelect && isEditing && (
                <div className='absolute top-8 w-full bg-gray_700 rounded-xl p-2 min-h-[40px] z-40 flex flex-col justify-center items-start'>
                    {dataSelect.map((d, index) => {
                        return (
                            <div key={index} className={d.value == value ? 'hidden' : 'cursor-pointer hover:bg-gray_800 w-full px-2 rounded-lg'}
                                onClick={() => {
                                    handleChange(section, "role", d.value);
                                    setOpenSelect(false);
                                }}>
                                <p className='text-white'>

                                    {d.value}
                                </p>
                            </div>
                        )
                    })}
                </div>
            )
            }
        </div >
    )
}

export default Input