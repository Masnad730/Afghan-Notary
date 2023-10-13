import Link from 'next/link'

const Footer = () => {
  return (
    <section className='bg-primary_dark text-accents_0 pb-20 pt-12'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-4 col-lg-5 mb-12 md:mb-0'>
            <div className='flex justify-center md:justify-start'>
              <Link href='/' passHref>
                <a>
                  <img
                    src='/images/afghan-notary-logo.png'
                    alt='HG Afghan Notary Public'
                    className='w-[8.5rem]'
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className='col-md-2 flex md:justify-end items-start mb-12 md:mb-0'>
            <div className=''>
              <h4 className='font-bold text-base font-poppins mb-4'>Company</h4>
              <nav>
                <ul className='text-accents_5'>
                  <li className='mb-2 last:mb-0'>
                    <Link href='/about' passHref>
                      <a>About</a>
                    </Link>
                  </li>
                  <li className='mb-2 last:mb-0'>
                    <Link href='/contact' passHref>
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className='col-md-2 flex md:justify-end items-start mb-12 md:mb-0'>
            <div>
              <h4 className='font-bold text-base font-poppins mb-4'>Services</h4>
              <nav>
                <ul className='text-accents_5'>
                  <li className='mb-2 last:mb-0'>
                    <Link href='/afghan-notary-services#notarization' passHref>
                      <a>Notarization</a>
                    </Link>
                  </li>
                  <li className='mb-2 last:mb-0'>
                    <Link href='/afghan-notary-services#drafting' passHref>
                      <a>Drafting</a>
                    </Link>
                  </li>
                  <li className='mb-2 last:mb-0'>
                    <Link href='/afghan-notary-services#legalization' passHref>
                      <a>Legalization</a>
                    </Link>
                  </li>
                  <li className='mb-2 last:mb-0'>
                    <Link href='/afghan-notary-services#translation' passHref>
                      <a>Translation</a>
                    </Link>
                  </li>
                  <li className='mb-2 last:mb-0'>
                    <Link href='/afghan-notary-services#hague' passHref>
                      <a>Hague Apostille</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className='col-md-4 col-lg-3 flex md:justify-end items-start mb-12 md:mb-0'>
            <div className=''>
              <h4 className='font-bold text-base font-poppins mb-4'>Contact Us</h4>
              <ul className='text-accents_5'>
                <li className='mb-3 last:mb-0'>
                  Street No. 8, Sherpur, <br />
                  Kabul, Afghanistan
                </li>
                <li className='mb-3 last:mb-0'>+93 786 06 01 01</li>
                <li className='mb-3 last:mb-0'>info@afghannotary.com</li>
                <li className='mb-3 last:mb-0'>
                  <table>
                    <tr>
                      <td className='align-middle pr-4 last:pr-0'>
                        <a href='https://www.facebook.com/Afghan-Notary-Public-103453105603563'>
                          <i className='flaticon-facebook'></i>
                        </a>
                      </td>
                      <td className='align-middle pr-4 last:pr-0'>
                        <a href='https://twitter.com/afghannotary'>
                          <i className='flaticon-twitter'></i>
                        </a>
                      </td>
                      <td className='align-middle pr-4 last:pr-0'>
                        <a href='https://www.linkedin.com/company/afghan-notary-public/'>
                          <i className='flaticon-linkedin'></i>
                        </a>
                      </td>
                    </tr>
                  </table>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row pt-6'>
          <div className='col border-t border-accents_4'>
            <div className='flex items-center justify-center pt-6 pb-4'>
              <div className='flex-1 flex items-start'>
                <div className='mr-6'>
                  <img
                    src='/images/ministry-of-justice-logo.png'
                    alt='Ministry of Justice (Afghanistan)'
                    className='w-20 h-auto max-w-full'
                  />
                </div>
                <div>
                  <p className='text-xs md:text-sm leading-relaxed text-accents_0'>
                    HG Afghan Notary Public is officially registered and accredited entity with the
                    Ministry of Justice of Afghanistan.
                  </p>
                </div>
              </div>
              <div className='hidden lg:block flex-1'></div>
            </div>
            <div className='text-accents_5 text-sm md:text-base mt-5'>
              {new Date().getFullYear()} © HG Afghan Notary Public. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
