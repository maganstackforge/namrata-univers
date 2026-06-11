import { useState } from 'react'
import { navMenu } from '../data/navData'
export default function MobileMenu({ closeModal }) {
  const [openDropdown, setOpenDropdown] = useState(null)
  return (
    <nav className='flex flex-col text-sm md:text-xl w-60 sm:w-72 text-[#1F3D47] rounded-tl-4xl
      rounded-bl-4xl'>
      <a className='cursor-pointer text-xl font-bold flex justify-end items-center'>
        <span
          className='rounded-lg mr-10 sm:mr-2 mt-2 px-0 sm:px-2 py-1 hover:bg-gradient-to-r hover:bg-[#E3F0F4]
            active:bg-[#D7E9EE]'
          onClick={closeModal}
        >
          ⟶
        </span>
      </a>
      {navMenu.map((menu, i) => (
        <div
          key={i}
          className='relative group'
          onMouseEnter={() => setOpenDropdown(i)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {/* Main menu item */}
          <a href={menu.href} className='p-2 transition-colors duration-200 hover:bg-[#E3F0F4] block'>
            {menu.label}
          </a>

          {/* Dropdown menu (only if submenu exists) */}
          {menu.submenu && openDropdown === i && (
            <div
              className='absolute right-full -top-0 w-28 sm:w-48 bg-[#F2F8FA] shadow-lg z-50 group-hover:block
                rounded-tl-2xl rounded-bl-2xl'
            >
              {menu.submenu.map((sub, j) => (
                <a
                  key={j}
                  href={sub.href}
                  className='block px-4 py-1 hover:bg-[#E3F0F4] rounded-tl-2xl rounded-bl-2xl'
                >
                  {sub.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
