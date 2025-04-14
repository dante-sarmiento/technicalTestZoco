import React from 'react'

const CustomImage = ({url = "", classImg = "", alt = ""}) => {
    return (
        <img
            className={classImg}
            src={url}
            alt={alt} />
    )
}

export default CustomImage