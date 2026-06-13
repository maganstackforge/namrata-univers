import { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../context/ModalContext'
import { createPortal } from 'react-dom'

export default function Modal({ isOpen, setIsOpen, children, positionClass }) {
  // Local state to track whether the modal should physically remain in the DOM
  const [showModal, setShowModal] = useState(false)
  const { clearModalContent } = useContext(ModalContext) // Saaf karne wala function nikalo
  // Effect 1: Responsive design safeguard. Auto-closes mobile elements if the screen stretches to desktop layout width.
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen, setIsOpen])

  // Effect 2: Synchronize unmounting phase with the 300ms CSS animation runtime duration.
  useEffect(() => {
    if (isOpen) {
      setShowModal(true)
    } else {
      // Delay unmounting until the exit animation finishes playing
      const timer = setTimeout(() => setShowModal(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Render guard clause: completely drop rendering if the lifecycle state is idle/closed
  if (!isOpen && !showModal) return null

  return createPortal(
    /* Outer Overlay: Manages background dimming, backdrop filters, and click-away close triggers */
    <div
      onClick={() => setIsOpen(false)}
      className={'fixed inset-0 flex transform items-center justify-center bg-black/50 px-4 backdrop-blur-sm'}
    >
      {/* Inner Structural Wrapper: Receives dynamic injection configurations to adjust positioning, size, and
      layout state  */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`ease-in-out fixed bg-[#F2F8FA] shadow-lg ${positionClass} transition-transform
          duration-300 ${isOpen ? '' : 'translate-x-full'}`}
      >
        {children}
      </div>
    </div>,
    // Projects layout cleanly past complex parent container boundaries up to root portal node
    document.getElementById('portal')
  )
}
