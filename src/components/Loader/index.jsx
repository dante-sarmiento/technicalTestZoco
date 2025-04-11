import React from 'react'

//Components
import Modal from '../Modal'

const Loader = () => {
  return (
    <Modal>
        <div className="flex justify-center items-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
        </div>
      </div>
    </Modal>
  )
}

export default Loader