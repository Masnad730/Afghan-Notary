import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ScrollHeader = ({ activePage, pageHeight }) => {
  const router = useRouter()

  return (
    <header
      className={
        pageHeight
          ? 'fixed top-0 w-full hidden lg:block bg-white text-accents_9 z-50 shadow-custom'
          : 'hidden lg:block'
      }
    >
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='flex items-center justify-between py-4'>
              <div className='mr-12'>
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
              <div className='flex-1'>
                <div className='flex items-center justify-end'>
                  <ul className='flex items-center'>
                    <li className='text-sm flex items-center justify-center text-accents_6 mr-8 last:mr-0'>
                      <i className='flaticon-mail text-primary'></i>
                      <span className='ml-2.5'>info@afghannotary.com</span>
                    </li>
                    <li className='text-sm flex items-center justify-center text-accents_6 mr-8 last:mr-0'>
                      <i className='flaticon-phone-call text-primary'></i>
                      <span className='ml-2.5'>+93 786 06 01 01</span>
                    </li>
                  </ul>
                </div>
                <div className='border-t border-accents_4 mt-4'></div>
                <div className='flex items-center justify-end'>
                  <nav>
                    <ul className='flex justify-center items-center'>
                      <li className='text-base font-bold capitalize mr-8 last:mr-0 py-4'>
                        <Link href='/' passHref>
                          <a
                            className={`${
                              activePage === 'home'
                                ? 'text-primary'
                                : 'text-accents_9 hover:text-primary_dark'
                            }`}
                          >
                            home
                          </a>
                        </Link>
                      </li>
                      <li className='text-base font-bold capitalize mr-8 last:mr-0 py-4'>
                        <Link href='/about' passHref>
                          <a
                            className={`${
                              activePage === 'about'
                                ? 'text-primary'
                                : 'text-accents_9 hover:text-primary_dark'
                            }`}
                          >
                            about
                          </a>
                        </Link>
                      </li>
                      <li className='text-base font-bold capitalize mr-8 last:mr-0 py-4 group'>
                        <Link href='#' passHref>
                          <a className='relative'>
                            <div
                              className={`${
                                activePage === 'services'
                                  ? 'text-primary'
                                  : 'text-accents_9 hover:text-primary_dark'
                              }`}
                            >
                              <span className='mr-1'>services</span>
                              <i className='fas fa-angle-down'></i>
                            </div>
                            <ul className='hidden opacity-0 absolute -left-2 top-0 z-50 py-8 pl-10 mt-8 w-60 bg-accents_0 shadow-2xl text-accents_9 group-hover:block group-hover:opacity-100'>
                              <li className='pb-4 last:pb-0'>
                                <Link href='/afghan-notary-services#notarization' passHref>
                                  <a
                                    className={`${
                                      router.asPath === '/afghan-notary-services#notarization'
                                        ? 'text-primary'
                                        : 'text-accents_9 hover:text-primary_dark'
                                    }`}
                                  >
                                    Notarization
                                  </a>
                                </Link>
                              </li>
                              <li className='pb-4 last:pb-0'>
                                <Link href='/afghan-notary-services#drafting' passHref>
                                  <a
                                    className={`${
                                      router.asPath === '/afghan-notary-services#drafting'
                                        ? 'text-primary'
                                        : 'text-accents_9 hover:text-primary_dark'
                                    }`}
                                  >
                                    Drafting
                                  </a>
                                </Link>
                              </li>
                              <li className='pb-4 last:pb-0'>
                                <Link href='/afghan-notary-services#legalization' passHref>
                                  <a
                                    className={`${
                                      router.asPath === '/afghan-notary-services#legalization'
                                        ? 'text-primary'
                                        : 'text-accents_9 hover:text-primary_dark'
                                    }`}
                                  >
                                    Legalization
                                  </a>
                                </Link>
                              </li>
                              <li className='pb-4 last:pb-0'>
                                <Link href='/afghan-notary-services#translation' passHref>
                                  <a
                                    className={`${
                                      router.asPath === '/afghan-notary-services#translation'
                                        ? 'text-primary'
                                        : 'text-accents_9 hover:text-primary_dark'
                                    }`}
                                  >
                                    Translation
                                  </a>
                                </Link>
                              </li>
                              <li className='pb-4 last:pb-0'>
                                <Link href='/afghan-notary-services#hague' passHref>
                                  <a
                                    className={`${
                                      router.asPath === '/afghan-notary-services#hague'
                                        ? 'text-primary'
                                        : 'text-accents_9 hover:text-primary_dark'
                                    }`}
                                  >
                                    Hague Apostille
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </a>
                        </Link>
                      </li>
                      <li className='text-base font-bold capitalize mr-8 last:mr-0 py-4'>
                        <Link href='/contact' passHref>
                          <a
                            className={`${
                              activePage === 'contact'
                                ? 'text-primary'
                                : 'text-accents_9 hover:text-primary_dark'
                            }`}
                          >
                            get in touch
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default ScrollHeader
