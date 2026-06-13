import videoFile1 from '../assets/video/about-video.mp4'

export default function AboutHeroSection() {
  return (
    <section
      id='AboutHeroSection'
      className='relative bg-cover bg-right bg-no-repeat md:bg-contain min-h-[500px]'
    >
      {/* ☝️ Section par 'relative' lagaya taaki absolute video iske andar fit rahe */}

      <div className='w-full h-full'>
        <video
          src={videoFile1}
          autoPlay
          loop
          muted
          playsInline
          preload='none'
          inert
          className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none'
        ></video>
      </div>
    </section>
  )
}
