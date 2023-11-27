import React, {useRef, useState} from 'react';

const ModalContext = React.createContext()







const ModalProvider = ({children}) => {

const modalRef = useRef()
const [modalContent, setModalContent] = useState(null)
const [onModalClose, setOnModalClose] = useState(null)


const closeModal = () => {
    setModalContent(null); // clear the modal contents
    // if callback function is truthy, call the callback function  and reset it to null
    if (typeof onModalClose === 'function') {
        setOnModalClose(null)
        onModalClose()

    }
}


const contextValue = {
    modalRef, //reference to modal div
    modalContent, // react component to renfer inside modal 
    setModalContent, // function to set the react component to render inside the modal
    setOnModalClose, // function to set the call back function to be called when modal is closing 
    closeModal, // function to close the modal
}

return (
    <>
    <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>
    <div ref={modalRef}/>
    
    </>
)


}
export default ModalProvider