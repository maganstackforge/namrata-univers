/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from 'react'
import Modal from '../components/Modal'

// Instantiate the core structural Context engine
const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const [positionClass, setPositionClass] = useState('')

  /**
   * Triggers the global modal engine with custom injected layout states.
   * @param {React.ReactNode} content - The functional JSX element structure to display.
   * @param {string} customClasses - The specific utility positioning Tailwind classes.
   */

  const openModal = (content, customClasses = '') => {
    setModalContent(content)
    setPositionClass(customClasses)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setModalContent(null)
  }

  const clearModalContent = () => {
    setModalContent(null)
  }
  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, clearModalContent }}>
      {/* Renders the child application components tree underneath the wrapper context scope */}
      {children}

      {/* Single instantiation engine for my entire system infrastructure */}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} positionClass={positionClass}>
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  )
}
// Custom abstraction hook for rapid deployment within structural page nodes
export const useModal = () => useContext(ModalContext)
export { ModalContext }
