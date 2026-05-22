import videoFile1 from '../assets/video/Compressed_video1.mp4'
export default function AboutHeroSection() {
  return (
    <section id='AboutHeroSection' className='bg-cover bg-right bg-no-repeat md:bg-contain'>
      <div className='w-full'>
        <video
          src={videoFile1}
          autoPlay
          loop
          muted
          playsInline
          preload='metadata'
          className='top-0 left-0 w-full h-full object-cover'
        ></video>
      </div>
    </section>
  )
}
