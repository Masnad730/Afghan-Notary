import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/layout/Layout'
import Testimonial from '../components/Testimonial'

export default function About() {
  return (
    <>
      <section className=''>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div>
                <Header activePage='about' />
                <div className='mt-16 text-center border-b border-accents_4'>
                  <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold tracking-wide leading-normal mb-4'>
                    Our Company
                  </h1>
                  <p className='lg:text-2xl xl:text-3xl font-light tracking-wider leading-relaxed'>
                    As a leading and fast-growing Notary service provider in Afghanistan, we have
                    years of combined experience in notarization, legalization, attestation and
                    translation of legal documents and deeds.
                  </p>
                  <div className='flex flex-col md:flex-row items-center justify-center pt-10 pb-20'>
                    <div className='border border-accents_4 w-64 rounded-[50px] py-2 md:w-max md:px-8 md:mr-2 md:last:mr-0 mb-6 last:mb-0 md:mb-0'>
                      <Link href='/contact' passHref>
                        <a className='text-base md:text-lg lg:text-xl'>Talk to us now</a>
                      </Link>
                    </div>
                    <div className='border border-accents_4 w-64 rounded-[50px] py-2 md:w-max md:px-8 md:mr-2 md:last:mr-0 mb-6 last:mb-0 md:mb-0 bg-secondary'>
                      <Link href='/afghan-notary-services' passHref>
                        <a className='text-base md:text-lg lg:text-xl'>Explore our services</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-[4.5rem] lg:pt-36 pb-20'>
        <div className='container'>
          <div className='row border-b border-accents_4 pb-20'>
            <div className='col-lg-6'>
              <div className='relative z-0'>
                <div className='relative ml-7 left-0 img-bg-frame'>
                  <img src='/images/notary-img-3.jpg' alt='about HG Afghan Notary Public' />
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='lg:pl-10'>
                <div className='pb-5 mt-[4.5rem] lg:mt-0'>
                  <h2 className='mb-5'>
                    <span className='inline-block text-sm md:text-base uppercase mb-6'>
                      This is HG Afghan Notary Public
                    </span>
                    <br />
                    <span className='inline-block text-xl md:text-2xl lg:text-main-heading font-poppins'>
                      We Are Building Trust Globally
                    </span>
                  </h2>
                </div>
                <div>
                  <p className='pb-5 last:pb-0'>
                    Today, individuals and business use notary services to meet their legal needs.
                    We here at Hasibullah Ghaforzai Afghan Notary Public (HG Afghan Notary Public)
                    provide timely and efficient notarization and translation services at affordable
                    costs. We strive to exceed our customers’ expectations and meet the individual
                    needs of each of them regardless of which business industry they operate in. By
                    serving their best interests, we intend to develop long-term relationships with
                    our customers.
                  </p>
                  <p className='pb-5 last:pb-0'>
                    As a leading and fast-growing Notary service in Afghanistan, we have years of
                    combined experience in notarization, legalization, attestation and translation
                    of legal documents and deeds. We have notarized or translated a wide range of
                    documents with different types of contents and subject.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-20 pb-8 bg-primary_light'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Testimonial />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout
      page='about'
      title='About Us - HG Afghan Notary Public'
      canonical='https://afghannotary.com/about/'
      pageDescription='Hasibullah Ghaforzai Afghan Notary Public provides timely and efficient notarization and translation services at affordable costs. As a leading Notary service in Afghanistan, we have years of combined experience in notarization, legalization, attestation, and translation of legal documents and deeds.'
    >
      <main>{page}</main>
      <Footer />
    </Layout>
  )
}
