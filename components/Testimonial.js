import { Carousel } from 'react-responsive-carousel'

const Testimonial = () => {
  return (
    <div className='pb-8'>
      <h2 className='text-3xl text-center mb-10'>
        <span className='text-xl md:text-2xl lg:text-main-heading font-poppins text-primary_dark'>
          What People Say
        </span>
        <span className='text-primary'>.</span>
      </h2>
      <Carousel
        autoPlay={true}
        autoFocus={false}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        infiniteLoop={true}
        interval={4000}
      >
        <blockquote className='px-2 md:px-12 py-7 mx-1 md:mx-0 bg-white max-w-full'>
          <p className='bg-grey-light-2 px-8 py-4 h-auto md:h-32'>
            <span className='text-xl font-bold'>“</span> I am fully satisfied with your high-quality
            service offerings and excellent customer service. Best of luck with the job!
            <span className='text-xl font-bold'>”</span>
          </p>
          <footer className='py-6'>
            -<cite>&nbsp;Hashmatullah Hoshmand</cite>
          </footer>
        </blockquote>
        <blockquote className='px-2 md:px-12 py-7 mx-1 md:mx-0 bg-white max-w-full'>
          <p className='bg-grey-light-2 px-8 py-4 h-auto md:h-32'>
            <span className='text-xl font-bold'>“</span> GREAT JOB! Thanks for your help getting my
            docs notarized. I’m looking forward to working with you again. Your team was amazing and
            your customer service was outstanding.
            <span className='text-xl font-bold'>”</span>
          </p>
          <footer className='py-6'>
            -<cite>&nbsp;Elham Sadat</cite>
          </footer>
        </blockquote>
        <blockquote className='px-2 md:px-12 py-7 mx-1 md:mx-0 bg-white max-w-full'>
          <p className='bg-grey-light-2 px-8 py-4 h-auto md:h-32'>
            <span className='text-xl font-bold'>“</span> Hasibullah Ghaforzai Afghan Notary Public
            provided excellent service while notarizing some of my documents. All enquires were
            given fast and informative replies. I will definitely use this service again, and
            recommend it to anyone needed notary services. Very happy!
            <span className='text-xl font-bold'>”</span>
          </p>
          <footer className='py-6'>
            -<cite>&nbsp;Emal Nawabi</cite>
          </footer>
        </blockquote>
      </Carousel>
    </div>
  )
}

export default Testimonial
