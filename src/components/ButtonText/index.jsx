import React from 'react'
import CustomImage from '../CustomImage'

const ButtonText = ({text = "", handleClick, classButton = "", img = ""}) => {
    const stylesButton = `${classButton}  cursor-pointer`

  return (
    <div className={`${stylesButton}`} onClick={handleClick}>
        {text}
        {img ? 
          <CustomImage 
            url={img}
            classImg='w-[20px] h-[20px]'/>
          :
           null
           }
    </div>
  )
}

export default ButtonText