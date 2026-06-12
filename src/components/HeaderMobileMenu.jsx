import { useState } from 'react'
import { Link } from 'react-router-dom' // Agar Next.js hai to: import Link from 'next/link'
import { navMenu } from '../data/navData'

export default function MobileMenu({ closeModal }) {
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <nav
      className='flex flex-col text-sm md:text-xl w-60 sm:w-72 text-[#1F3D47] rounded-tl-4xl rounded-bl-4xl
        z-30'
    >
      {/* 1. Close Button: Isko Link ki zaroorat nahi hai kyunki ye sirf modal close karta hai, isliye ise <button> bana diya */}
      <div className='flex justify-end items-center'>
        <button
          className='cursor-pointer text-xl font-bold rounded-lg mr-10 sm:mr-2 mt-2 px-0 sm:px-2 py-1
            hover:bg-[#E3F0F4] active:bg-[#D7E9EE] border-none bg-transparent'
          onClick={closeModal}
        >
          ⟶
        </button>
      </div>

      {navMenu.map((menu, i) => (
        <div
          key={i}
          className='relative group'
          onMouseEnter={() => setOpenDropdown(i)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {/* 2. Main menu item: href ko `to` se badla */}
          <Link
            to={menu.href}
            onClick={(e) => {
              if (menu.submenu) {
                e.preventDefault()

                setOpenDropdown(openDropdown === i ? null : i)
              } else {
                closeModal()
              }
            }}
            className='p-2 transition-colors duration-200 hover:bg-[#E3F0F4] block'
          >
            {menu.label}
          </Link>

          {/* Dropdown menu (only if submenu exists) */}
          {menu.submenu && openDropdown === i && (
            <div
              className='absolute right-full -top-0 w-32 sm:w-48 bg-[#F2F8FA] shadow-lg z-50 group-hover:block
                rounded-tl-2xl rounded-bl-2xl'
            >
              {menu.submenu.map((sub, j) => (
                /* 3. Submenu item: href ko `to` se badla */
                <Link
                  key={j}
                  to={sub.href}
                  onClick={closeModal}
                  className='block px-4 py-1 hover:bg-[#E3F0F4] rounded-tl-2xl rounded-bl-2xl'
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
