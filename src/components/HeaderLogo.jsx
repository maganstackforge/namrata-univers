import LogoImg from '../assets/images/logo.png'

export default function Logo() {
  return (
    <a href='#'>
      <img className='w-40 md:w-48 h-20 py-4' src={LogoImg} alt='company logo' loading='lazy' />
    </a>
  )
}
