import React from 'react'

const Modal = ({children}) => {
    return (
        <>
            <div
                className="fixed w-full h-full z-[100] top-0 left-0 bg-gray_700"
                style={{
                    opacity: 0.95,
                    width: '100vw',
                    height: '100vh',
                }}
            />
            <div className="fixed flex flex-col justify-center items-center z-[1000] w-full h-full top-0 left-0">
                {children}
            </div>
        </>
    )
}

export default Modal