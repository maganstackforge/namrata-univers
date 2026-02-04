import videoFile from '../assets/video/video.mp4'
export default function HeroSection() {
  return (
    <section id='hero' className='w-full'>
      <div className='w-full'>
        <video
          src={videoFile}
          autoPlay
          loop
          muted
          playsInline
          className='top-0 left-0 w-full h-full object-cover'
        ></video>
      </div>
    </section>
  )
}
