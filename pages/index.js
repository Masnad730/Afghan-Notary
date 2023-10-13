import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/layout/Layout'

export default function Home() {
  return (
    <>
      <section className='bg-hero'>
        <div className='h-[60vh] lg:h-[80vh] container'>
          <div className='row'>
            <div className='col'>
              <Header activePage='home' />
              <div className='xs:pt-[2.5rem] pt-[4.5rem] lg:pt-32'>
                <div className='text-accents_3'>
                  <h1 className='xs:text-2xl text-3xl md:text-4xl lg:text-6xl text-center font-bold tracking-wide leading-relaxed'>
                    Welcome to The Afghanistan’s Leading Notary Office
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-20 mb-8'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-lg-9'>
              <div className=''>
                <p className='tracking-wide font-light text-center px-2 lg:px-0'>
                  Today, individuals and business use notary services to meet their legal needs. We
                  here at Hasibullah Ghaforzai Afghan Notary Public (HG Afghan Notary Public)
                  provide timely and efficient notarization and translation services at affordable
                  costs. We strive to exceed our customers’ expectations and meet the individual
                  needs of each of them regardless of which business industry they operate in. By
                  serving their best interests, we intend to develop long-term relationships with
                  our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row justify-center border-b border-accents_4 pb-6 pt-12'>
            <div className='col'>
              <div className='flex flex-wrap items-center justify-between px-5 md:px-0'>
                <div className=''>
                  <div className='flex flex-col items-center justify-center mb-7 md:mb-0'>
                    <div className='border border-secondary p-8 rounded-circle mb-7'>
                      <img
                        src='./images/services-icons/notarization.png'
                        alt='Notarization'
                        className='w-11 lg:w-full'
                      />
                    </div>
                    <h3 className='text-base md:text-lg lg:text-xl font-bold'>Notarization</h3>
                  </div>
                </div>
                <div className=''>
                  <div className='flex flex-col items-center justify-center mb-7 md:mb-0'>
                    <div className='border border-secondary p-8 rounded-circle mb-7'>
                      <img
                        src='./images/services-icons/legalization.png'
                        alt='Legalization'
                        className='w-11 lg:w-full'
                      />
                    </div>
                    <h3 className='text-base md:text-lg lg:text-xl font-bold'>Legalization</h3>
                  </div>
                </div>
                <div className=''>
                  <div className='flex flex-col items-center justify-center mb-7 md:mb-0'>
                    <div className='border border-secondary p-8 rounded-circle mb-7'>
                      <img
                        src='./images/services-icons/translation.png'
                        alt='Translation'
                        className='w-11 lg:w-full'
                      />
                    </div>
                    <h3 className='text-base md:text-lg lg:text-xl font-bold'>Translation</h3>
                  </div>
                </div>
                <div className=''>
                  <div className='flex flex-col items-center justify-center mb-7 md:mb-0'>
                    <div className='border border-secondary p-8 rounded-circle mb-7'>
                      <img
                        src='./images/services-icons/drafting.png'
                        alt='Drafting'
                        className='w-11 lg:w-full'
                      />
                    </div>
                    <h3 className='text-base md:text-lg lg:text-xl font-bold'>Drafting</h3>
                  </div>
                </div>
                <div className=''>
                  <div className='flex flex-col items-center justify-center mb-7 md:mb-0'>
                    <div className='border border-secondary p-8 rounded-circle mb-7'>
                      <img
                        src='./images/services-icons/hague.png'
                        alt='Hague Apostille'
                        className='w-11 lg:w-full'
                      />
                    </div>
                    <h3 className='text-base md:text-lg lg:text-xl font-bold'>Hague Apostille</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full flex items-center justify-end mt-4 md:mt-14 mr-9'>
              <Link href='/afghan-notary-services' passHref>
                <a className='text-accents_6 flex items-center justify-center'>
                  <span>Read more</span>
                  <i className='flaticon-arrow-pointing-to-right ml-2'></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-24 md:pt-36 lg:pt-52 pb-16'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='relative z-0'>
                <div className='relative ml-7 left-0 img-bg-frame'>
                  <img src='/images/notary-img-2.jpg' alt='When Do I Need a Notary' />
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='lg:pl-10'>
                <div className='border-b border-accents_4 pb-5 mt-[4.5rem] lg:mt-0'>
                  <h2 className='text-xl md:text-2xl lg:text-main-heading font-poppins'>
                    When Do I Need a Notary?
                  </h2>
                </div>
                <div className='pt-6 pb-2'>
                  <p className='pb-4 last:pb-0'>
                    A notary service in Afghanistan is required to independently witness and
                    authenticate legal documents and transactions. That is especially the case when
                    specific documents need to be submitted to government or nongovernment
                    authorities outside Afghanistan.
                  </p>
                  <p className='pb-4 last:pb-0'>
                    Our Notary confirm the authenticity of signed documents, ensuring that they are
                    fully compliant with the requirements in the relevant jurisdiction out of
                    Afghanistan. The certification by HG Afghan Notary Public can also be needed to
                    confirm the authenticity of copied documents, such as passports, national ID
                    cards, birth certificates, educational documents, certificates and other vital
                    documents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-0 lg:pt-20 pb-8 mt-20 border-t border-grey-light-1 notary-hero'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-lg-9'>
              <div className='text-center'>
                <div className='uppercase font-light'>client benefits</div>
                <h2 className='text-xl md:text-2xl lg:text-main-heading font-poppins mb-6 mt-1'>
                  The Value We Offer Our Clients
                </h2>
                <p className=''>
                  As a leading and fast-growing Notary service in Afghanistan, we have years of
                  combined experience in notarization, legalization, attestation and translation of
                  legal documents and deeds.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='border-y border-accents_4 mt-12 pt-10 pb-16'>
                <div className='px-0 lg:px-12 py-6'>
                  <h3 className='font-bold text-base md:text-lg font-poppins mb-2'>
                    Professional, Approachable, Responsive
                  </h3>
                  <p>
                    With our years of experience, we at HG Afghan Notary Public are here to guide
                    you through any legal process and help you navigate through jurisdictions that
                    you are unfamiliar with in Afghanistan and abroad.
                  </p>
                </div>
                <div className='px-0 lg:px-12 py-6'>
                  <h3 className='font-bold text-base md:text-lg font-poppins mb-2'>Timeliness</h3>
                  <p>
                    We, at HG Afghan Notary Public always strive to be as quick and efficient as
                    possible in processing your notarial and documents translation requests, thereby
                    helping you save your invaluable time.
                  </p>
                </div>
                <div className='px-0 lg:px-12 py-6'>
                  <h3 className='font-bold text-base md:text-lg font-poppins mb-2'>
                    No Hidden Fees
                  </h3>
                  <p>
                    We provide advance quote in response to your business requests and we charge no
                    hidden fees. You will know ahead of time how much exactly you will pay for our
                    notarial and translation services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='flex items-center justify-center mt-8 mb-14'>
                <Link href='/contact' passHref>
                  <a className='text-accents_9 text-sm bg-secondary px-8 py-2 rounded-[50px] uppercase'>
                    talk to us today
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout
      page='home'
      title='HG Afghan Notary Public'
      canonical='https://afghannotary.com/'
      pageDescription='Afghanistan’s Leading Notary Office. HG Afghan Notary Public provides a comprehensive set of notarial services that include certifying and notarizing a wide range of documents for both individuals and businesses.'
    >
      <main>{page}</main>
      <Footer />
    </Layout>
  )
}
