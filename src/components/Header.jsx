import { useModal } from '../context/ModalContext'
import useScaleOnScroll from '../hooks/useScaleOnScroll'
import LogoImg from '../assets/images/logo.webp'
import DesktopNav from './HeaderDesktopNav'
import MobileMenu from './HeaderMobileMenu'
import { Link } from 'react-router-dom'

export default function Header() {
  const { openModal, closeModal } = useModal()
  const scale = useScaleOnScroll()
  const handleMobileMenu = () => {
    openModal(<MobileMenu closeModal={closeModal} />)
  }

  return (
    <header
      id='header'
      className={` sticky top-0 z-50 w-full text-[#2F5560] bg-[#F2F8FA] backdrop-blur-md shadow-md
        transition-transform duration-300 ease-out`}
      style={{
        transform: `scaleY(${scale})`,
        transformOrigin: 'top', // **important: bottom shrinking effect**
      }}
    >
      <div className='flex justify-between items-center px-6'>
        {/* Logo */}
        <Link to='/'>
          <img
            src={LogoImg}
            alt='Namrata Univers company logo'
            width={192}
            height={45}
            fetchPriority='high'
            className='w-40 md:w-48 h-auto py-4'
          />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />
        {/* Mobile Menu button */}
        <button
          onClick={handleMobileMenu}
          className='cursor-pointer text-3xl rounded-md p-2 bg-[#2F5560] hover:bg-[#4F7C8A] md:hidden
            text-[#F2F8FA]'
        >
          ☰
        </button>
      </div>
    </header>
  )
}
