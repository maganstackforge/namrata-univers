import 'aos/dist/aos.css'
import { FaCheck, FaTimes } from 'react-icons/fa'
import pricingData from '../data/pricingData'

export default function OurPricing() {
  return (
    <section
      id='ourPricing'
      className='section-container flex items-center justify-center flex-col px-6 pt-6'
    >
      <div className='w-full'>
        {/* Header */}
        <div
          className='section-header aos-init px-8 flex flex-col justify-center items-center'
          data-aos='flip-right'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold my-5'>Our Pricing</h2>
          <p className='text-2xl text-center'>For demo please contact Namrata Universal.</p>
          <span className='bg-gray-100 rounded-b-2xl w-24 h-2'></span>
        </div>

        {/* Pricing Cards */}
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 sm:p-6'>
          {pricingData.map((item, i) => (
            <div key={i} className='shadow-xl rounded-2xl bg-white overflow-hidden'>
              {/* Image + Price */}
              <div className='rounded-2xl overflow-hidden'>
                <img className='h-60 w-full object-cover' src={item.imgSrc} alt={item.title} />
                <p className='text-center text-2xl font-bold bg-[#558EAC] text-white p-4'>
                  ₹{item.price}.00 / -
                </p>
              </div>

              {/* Features */}
              <div
                className='p-4 sm:p-6 flex flex-col justify-center rounded-tl-2xl rounded-br gap-2
                  service-detail aos-init'
                data-aos='flip-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='2000'
              >
                <h3 className='text-xl font-semibold mb-2 text-center'>{item.title}</h3>
                <ul className='space-y-1'>
                  {item.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-center gap-2 ${
                        feature.available ? 'text-gray-800' : 'text-gray-400 line-through'
                      }`}
                    >
                      {feature.available ? (
                        <FaCheck className='text-green-500' />
                      ) : (
                        <FaTimes className='text-red-500' />
                      )}
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
