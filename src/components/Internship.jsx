import React from 'react'
import { Helmet } from 'react-helmet-async'
import InternshipAdviceAndSupport from '../assets/images/Internship/InternshipAdviceAndSupport.webp'
import InternshipCertificate from '../assets/images/Internship/InternshipCertificate-1.webp'
import InternshipCompleteCourse from '../assets/images/Internship/InternshipCompleteCourse.webp'
import InternshipContinueEducation from '../assets/images/Internship/InternshipContinueEducation.webp'
import InternshipCourse from '../assets/images/Internship/InternshipCourse.webp'
import InternshipDevelopment from '../assets/images/Internship/InternshipDevelopment.webp'
import InternshipPayment from '../assets/images/Internship/InternshipPayment.webp'
import InternshipSignup from '../assets/images/Internship/InternshipSignup.webp'
import InternshipStudentsClass from '../assets/images/Internship/InternshipStudentsClass.webp'
import InternshipTrainingAndConsultancy from '../assets/images/Internship/InternshipTrainingAndConsultancy.webp'
import { Link } from 'react-router-dom'
export default function Internship() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Internship Program | Namrata Universal</title>
        <meta
          name='description'
          content='Join Namrata Universal Internship Program and gain real-world experience in Web Development, Digital Marketing, and UI/UX Design. Build industry-ready skills with live projects.'
        />
        <meta
          name='keywords'
          content='Namrata Universal Internship, Web Development Internship, React Internship, Digital Marketing Internship, UI UX Internship, IT Internship India'
        />
        <meta name='author' content='Namrata Universal' />

        {/* Robots */}
        <meta name='robots' content='index, follow' />

        {/* Open Graph (Facebook / LinkedIn) */}
        <meta property='og:title' content='Internship Program | Namrata Universal' />
        <meta
          property='og:description'
          content='Join Namrata Universal Internship Program and work on real-world projects in Web Development, React, and Digital Marketing.'
        />
        <meta property='og:type' content='website' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Internship Program | Namrata Universal' />
        <meta
          name='twitter:description'
          content='Apply for Namrata Universal Internship and gain hands-on industry experience in development and marketing.'
        />

        {/* Canonical URL */}
        <link rel='canonical' href='https://your-domain.com/internship' />
      </Helmet>
      <div className='w-full'>
        <div className='w-10/11 mx-auto mt-4'>
          {/* Breadcrumb */}
          <div className='breadcrumb mb-3'>
            <span>
              <i className='fa fa-home fa-lg'></i>{' '}
            </span>

            <span>
              <Link to='/ModernTechnology'>
                <span className='text-blue-600'>Technologies »</span>
              </Link>{' '}
            </span>

            <span>
              <i className='fa fa-home fa-lg'></i>{' '}
            </span>

            <span>
              <Link to='/Internship'>
                <span className='text-blue-600'>Internship-Training-Program » </span>
              </Link>
            </span>

            <span className='text-blue-600'>Full Stack Developer</span>
          </div>

          {/* Page Heading */}
          <div className='heading text-center mb-4'>
            <h1 className='panel-title1 text-2xl font-bold'>Namrata Universal Internship Program</h1>
          </div>

          {/* Collapse Body */}

          <div className='panel-body mt-2'>
            <h2 className='text-2xl font-[500]'>
              <span>Best Internship Training Company in Noida.</span>
            </h2>

            <p>
              We provide certified training programs and are considered the best internship provider in Noida
              for Engineering students, Computer Science students, IT students, MCA, BCA, B.Tech, BE, and B.SC
              students. Taking this course improves your chances of getting a job.
            </p>

            <div className='flex flex-col md:flex-row justify-center items-center gap-8 p-6'>
              <div className='col-md-4'>
                <img src={InternshipStudentsClass} alt={InternshipStudentsClass} className='w-full h-40' />
              </div>

              <div className='w-full' id='somet'>
                <p>
                  Namrata Universal provides the best internship program for students wanting to build a
                  career in IT. Our program covers digital marketing, software development, web designing,
                  mobile app development, SEO, and more. After completing the internship, you will be able to
                  apply for jobs in top IT companies.
                </p>
              </div>
            </div>
          </div>

          {/* Collapse Section */}

          {/* Eligibility */}
          <div className='panel-heading mt-4'>
            <h4 className='text-2xl font-[500]'>Eligibility to be an Intern at Namrata Universal</h4>
          </div>

          <div className='panel-body'>
            <p>
              Students skilled in Engineering, CS, CSE, MIS, MCA, BCA, B.Tech, BE, B.SC are welcome at Namrata
              Universal.
            </p>
            <p>Pass-out students can also enhance their skills through this training program.</p>
          </div>

          {/* Duration Section */}
          <div className='panel-heading mt-4'>
            <h4 className='panel-title'>Internship Duration</h4>
          </div>

          <div className='panel-body'>
            Namrata Universal offers internship/vocational programs for:
            <br />
            • 3 Months <br />
            • 6 Months <br />
            <br />
            <a className='text-danger' href='https://forms.gle/Dyers8wAipEzb7jr5'>
              Apply Now
            </a>
          </div>
          <div className='text-center p-8'>
            <div className='w-full'>
              <h1 className='text-2xl'>How IT Works</h1>
              <p className='text-lg'>
                1,000+ Learning Hours | 120+ Computer Science, Management Courses | 24/7 Access
              </p>
            </div>
            <div
              className='grid gap-8 justify-items-center py-8
                [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]'
            >
              {[
                { img: InternshipSignup, name: 'Signup Online' },
                { img: InternshipCourse, name: 'Choose the Course' },
                { img: InternshipPayment, name: 'Make Payment' },
                { img: InternshipCompleteCourse, name: 'Complete Course' },
                { img: InternshipCertificate, name: 'Evaluation & Certification' },
              ].map((item, i) => (
                <div key={i} className='flex flex-col items-center'>
                  <img src={item.img} alt={item.name} className='h-28 w-28 object-contain' />
                  <h3 className='text-lg text-center mt-3'>{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center w-full p-8 my-4 bg-[#A2C3DC]'>
          <span className='text-center text-2xl'>
            Take one step ahead in your career with a certification from <strong>NAMRATA UNIVERSAL</strong> at
            <strong> NOIDA</strong>
          </span>
        </div>
        <div
          className='grid gap-8 justify-items-center py-8
            [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]'
        >
          {[
            {
              img: InternshipDevelopment,
              name: 'Faculty Development Program. For more details kindly visit Namrata universal',
            },
            {
              img: InternshipContinueEducation,
              name: 'Continuing education programme for faculties / students / working professionals',
            },

            {
              img: InternshipTrainingAndConsultancy,
              name: 'Training and consultancy services for the industry',
            },
            {
              img: InternshipAdviceAndSupport,
              name: 'Providing advice and support for technical incubation and entrepreneurial activities',
            },
          ].map((item, i) => (
            <div key={i} className='text-center flex flex-col justify-center items-center'>
              <img src={item.img} alt={InternshipSignup} className='w-32' />
              <h3 className='text-lg h-24 w-60 py-2'>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
