import videoFile from '../assets/video/hero-video.mp4'
export default function HeroSection() {
  return (
    <section id='hero' className='w-full'>
      <div className='relative w-full h-screen overflow-hidden'>
        <video
          src={videoFile}
          poster='/hero-poster.webp'
          autoPlay
          loop
          muted
          preload='metadata'
          playsInline
          aria-hidden='true'
          tabIndex={-1}
          role='presentation'
          className='absolute inset-0 w-full h-full object-cover'
        ></video>
      </div>
    </section>
  )
}
