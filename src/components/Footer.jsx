import { Link, useNavigate } from 'react-router-dom' // 1. useNavigate ko import kiya

export default function Footer() {
  const navigate = useNavigate() // 2. Navigate function ko initialize kiya

  return (
    <footer className='p-10 bg-[#2F5560] text-[#FFF5E4]'>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 p-8 justify-center'>
        {/* ABOUT US */}
        <div>
          <h3
            className='text-lg font-semibold mb-3 border-b border-white hover:border-blue-900 inline-block
              pb-1'
          >
            ABOUT US
          </h3>
          <ul className='space-y-0 mt-3'>
            {[
              { linkName: 'Home', link: '/' },
              { linkName: 'About us', link: '/About' },
              { linkName: 'Contact Us', link: '/Contact' },
              { linkName: 'Client', link: '/Client' },
              { linkName: 'Portfolio', link: '/Portfolio' },
              { linkName: 'Pricing', link: '/Pricing' },
              { linkName: 'Service', link: '/Service' },
              { linkName: 'Team', link: '/MeetOurTeam' },
              { linkName: 'Skill', link: '/Skill' },
            ].map((item, i) => (
              <li key={i} className='flex items-center gap-1 cursor-pointer'>
                <span className='text-lg'>›</span>{' '}
                <Link
                  to={item.link}
                  className='hover:underline hover:underline-offset-4 decoration-2 decoration-[#FFF5E4]'
                >
                  {item.linkName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h3
            className='text-lg font-semibold mb-3 border-b border-white inline-block pb-1
              hover:border-blue-900'
          >
            USEFUL LINKS
          </h3>
          <ul className='space-y-2 mt-3'>
            {[
              { linkName: 'Technology', link: '/ModernTechnology' },
              { linkName: 'Digital Marketing', link: '/DigitalMarketing' },
              { linkName: 'Seo', link: '/Seo' },
              { linkName: 'Privacy Policy', link: '/PrivacyPolicy' },
              { linkName: 'Terms & Conditions', link: '/TermConditions' },
              { linkName: 'Refund Policy', link: '/RefundPolicy' },
            ].map((item, i) => (
              <li key={i} className='flex items-center gap-2 cursor-pointer'>
                <span className='text-lg font-bold'>›</span>
                <Link
                  to={item.link}
                  className='hover:underline hover:underline-offset-4 decoration-2 decoration-[#FFF5E4]'
                >
                  {item.linkName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT US */}
        <div>
          <h3
            className='text-lg font-semibold mb-3 border-b border-white inline-block pb-1
              hover:border-blue-900'
          >
            CONTACT US
          </h3>
          <div className='space-y-3 mt-3'>
            <p>
              <span className='font-semibold'>Head Office :</span>
              <br />
              3C, A1 Sector 10, Noida
              <br />
              Uttar Pradesh, India
            </p>

            <p>
              <span className='font-semibold'>New Branch Office :</span>
              <br />
              2nd floor plot no.-64 Block-F, Sector-8 Noida
              <br />
              Uttar Pradesh, India
            </p>

            <p>
              <span className='font-semibold'>Branch Office :</span>
              <br />
              Plot No-827 1st Floor Shalimar Garden
              <br />
              Extension-1 Ghaziabad, UP
            </p>

            <p>
              <span className='font-semibold'>Phone:</span> +918506922777, +918506944777
            </p>
          </div>
        </div>

        {/* SUBSCRIPTION */}
        <div>
          <h3
            className='text-lg font-semibold mb-3 border-b border-white inline-block pb-1
              hover:border-blue-900'
          >
            SUBSCRIPTION
          </h3>
          <p className='text-sm mt-3 font-semibold'>Join Our Newsletter</p>
          <div className='mt-3 space-y-2'>
            <p>
              Email:{' '}
              <a href='mailto:info@namratauniversal.com' className='hover:underline'>
                info@namratauniversal.com
              </a>
            </p>
            <p>
              Email:{' '}
              <a href='mailto:namratauniversal@gmail.com' className='hover:underline'>
                namratauniversal@gmail.com
              </a>
            </p>
          </div>

          {/* 3. Button par onClick listener lagaya */}
          <button
            onClick={() => navigate('/Payment')}
            className='mt-4 bg-[#3d7a62] cursor-pointer hover:bg-[#2d5c4a] px-5 py-2 rounded-md text-white
              font-medium'
          >
            PAY NOW !
          </button>
        </div>
      </div>

      {/* Scroll to top arrow */}
      <div className='fixed bottom-5 right-5'>
        <a href='#' className='bg-[#3d7a62] hover:bg-[#2d5c4a] p-3 rounded-full inline-block'>
          <span className='text-white text-2xl font-bold'>↑</span>
        </a>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center md:justify-between h-24'>
        <p>Copyright © 2025 Namrata Univers All Rights Reserved.</p>
        <p>Design by Magan Singh.</p>
      </div>
    </footer>
  )
}
