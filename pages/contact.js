import { useState } from 'react'
import { useSnackbar } from 'notistack'
import ClipLoader from 'react-spinners/ClipLoader'

import { submitContactForm } from '../lib/api'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/layout/Layout'

export default function Contact() {
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setLoading] = useState(false)
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setContactInfo({ ...contactInfo, [name]: value })
  }
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    await submitContactForm(contactInfo, setContactInfo, setLoading, enqueueSnackbar)
  }
  return (
    <>
      <section className=''>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div>
                <Header activePage='contact' />
                <div className='mt-16 text-center'>
                  <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold tracking-wide leading-normal mb-4'>
                    Contact Us
                  </h1>
                  <p className='lg:text-2xl xl:text-3xl font-light tracking-wider leading-relaxed'>
                    Let us know how we can help
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-20'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='p-5 bg-grey-light-2 shadow-xl h-60 max-h-full mb-8 md:mb-0'>
                <div className='text-secondary text-3xl'>
                  <i className='fas fa-envelope'></i>
                </div>
                <div className='my-8 text-lg'>
                  <p>We’ll respond within 24 hours.</p>
                </div>
                <div className='mb-10'>
                  <a className='text-base lg:text-xl' href='mailto:info@afghannotary.com'>
                    Email
                    <span className='text-accents_7 font-normal block lg:inline-block ml-0 lg:ml-2.5'>
                      info@afghannotary.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='p-5 bg-grey-light-2 shadow-xl h-60 max-h-full mb-8 md:mb-0'>
                <div className='text-secondary text-3xl'>
                  <i className='fas fa-phone-alt'></i>
                </div>
                <div className='my-8 text-lg'>
                  <p>Talk directly with a team member.</p>
                </div>
                <div className='mb-8'>
                  <a className='text-base lg:text-xl' href='tel:+93 730 830 830'>
                    Call{' '}
                    <span className='text-accents_7 block lg:inline-block'>+93 786 06 01 01</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='p-5 bg-grey-light-2 shadow-xl h-60 max-h-full mb-8 md:mb-0'>
                <div className='text-secondary text-3xl'>
                  <i className='fas fa-map-marked-alt'></i>
                </div>
                <div className='my-8 text-lg'>
                  <p>Street No. 8, Sherpur, Kabul, Afghanistan</p>
                </div>
                <div className='mb-8'>
                  <a className='text-xl' href='https://goo.gl/maps/tG13K3HFvKcY3b8k8'>
                    Get directions ▸
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='row pt-12'>
            <div className='col'>
              <div className='bg-grey-light-2 pt-12 pb-8 px-4 md:px-8'>
                <h3 className='text-xl font-bold'>Drop us a message if you have any questions</h3>
                <div className='mt-16'>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor=''>Your Name</label>
                      <input
                        name='name'
                        value={contactInfo.name}
                        onChange={handleChange}
                        type='text'
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor=''>Your Email</label>
                      <input
                        name='email'
                        value={contactInfo.email}
                        onChange={handleChange}
                        type='email'
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor=''>Subject</label>
                      <input
                        name='subject'
                        value={contactInfo.subject}
                        onChange={handleChange}
                        type='text'
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor=''>Your Message</label>
                      <textarea
                        name='message'
                        value={contactInfo.message}
                        onChange={handleChange}
                        id=''
                        cols='30'
                        rows='10'
                        required
                      ></textarea>
                    </div>
                    <div>
                      <button className='bg-primary_dark text-accents_0 flex items-center justify-center w-full'>
                        {!loading ? (
                          'Send Message'
                        ) : (
                          <ClipLoader color={'#fff'} loading={loading} size={30} />
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-14'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='pt-12 pb-8'>
                <h3 className='text-xl md:text-2xl lg:text-3xl text-center mb-10'>
                  You’ll find us on the Map in…
                </h3>

                <iframe
                  className='outline-none focus:outline-none rounded-lg'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5604.840913270856!2d69.16404148318253!3d34.533912578793284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16ea4c1a90225%3A0xd23076f1989907e9!2sSherpur%2C%20Kabul%2C%20Afghanistan!5e0!3m2!1sen!2s!4v1645699115149!5m2!1sen!2s'
                  width='100%'
                  height='480'
                  allowFullScreen
                  loading='lazy'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Contact Us - HG Afghan Notary Public'
      canonical='https://afghannotary.com/contact/'
      pageDescription='Contact Us.Street No. 8, Sherpur, Kabul, Afghanistan . +93 786 06 01 01. info@afghannotary.com'
      page='contact'
    >
      <main>{page}</main>
      <Footer />
    </Layout>
  )
}
