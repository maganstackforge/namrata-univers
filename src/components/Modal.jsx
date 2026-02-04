import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ isOpen, setIsOpen, children }) {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen, setIsOpen])

  useEffect(() => {
    if (isOpen) {
      setShowModal(true)
    } else {
      // Wait for animation to finish, then unmount
      const timer = setTimeout(() => setShowModal(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen && !showModal) return null

  return createPortal(
    <div
      onClick={() => setIsOpen(false)}
      className={'fixed inset-0 flex transform items-center justify-center bg-black/50 px-4 backdrop-blur-sm'}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`ease-in-out fixed top-23 right-0.5 max-w-72 grow rounded-lg bg-[#6FA4AF] shadow-lg
          transition-transform duration-300 ${isOpen ? '' : 'translate-x-full'}`}
      >
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  )
}
