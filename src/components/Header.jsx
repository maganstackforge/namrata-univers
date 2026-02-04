import { lazy, Suspense } from 'react'
import { useModal } from '../context/ModalContext'
import useScaleOnScroll from '../hooks/useScaleOnScroll'

const Logo = lazy(() => import('./HeaderLogo'))
const DesktopNav = lazy(() => import('./HeaderDesktopNav'))
const MobileMenu = lazy(() => import('./HeaderMobileMenu'))

export default function Header() {
  const { openModal, closeModal } = useModal()
  const scale = useScaleOnScroll()
  const handleMobileMenu = () => {
    openModal(<MobileMenu closeModal={closeModal} />)
  }

  return (
    <header
      id='header'
      className={` sticky top-0 z-50 w-full bg-[#6FA4AF] backdrop-blur-md shadow-md transition-transform
        duration-300 ease-out`}
      style={{
        transform: `scaleY(${scale})`,
        transformOrigin: 'top', // **important: bottom shrinking effect**
      }}
    >
      <div className='flex justify-between items-center px-6'>
        {/* Logo */}
        <Suspense fallback={<div className='w-12 h-6 bg-gray-200'></div>}>
          <Logo />
        </Suspense>

        {/* Desktop Navigation */}
        <Suspense fallback={<div className='hidden md:block'>Loading...</div>}>
          <DesktopNav />
        </Suspense>

        {/* Mobile Menu button */}
        <button
          onClick={handleMobileMenu}
          className='cursor-pointer text-3xl rounded-md p-2 hover:bg-[#37778F] md:hidden text-white'
        >
          ☰
        </button>
      </div>
    </header>
  )
}
