import Link from 'next/link'
import { useRouter } from 'next/router'

import ResponsiveHeader from './ResponsiveHeader'

const Header = ({ activePage }) => {
  const router = useRouter()

  return (
    <div>
      <div className='block lg:hidden'>
        <ResponsiveHeader activePage={activePage} />
      </div>
      <header className='hidden lg:flex items-center justify-between py-4'>
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
            <ul
              className={`flex items-center ${
                activePage === 'home' ? 'text-accents_3' : 'text-accents_7'
              }`}
            >
              <li className='text-sm flex items-center justify-center mr-8 last:mr-0'>
                <i className='flaticon-mail text-primary'></i>
                <span className='ml-2.5'>info@afghannotary.com</span>
              </li>
              <li className='text-sm flex items-center justify-center mr-8 last:mr-0'>
                <i className='flaticon-phone-call text-primary'></i>
                <span className='ml-2.5'>+93 786 06 01 01</span>
              </li>
            </ul>
          </div>
          <div className='border-t border-accents_4 mt-4'></div>
          <div className='flex items-center justify-end'>
            <nav>
              <ul className='flex justify-center items-center'>
                <li className='text-base font-semibold capitalize mr-8 last:mr-0 py-4'>
                  <Link href='/' passHref>
                    <a
                      className={
                        activePage === 'home'
                          ? 'text-primary'
                          : activePage !== 'home'
                          ? 'text-accents_9 hover:text-primary'
                          : 'text-accents_0 hover:text-primary'
                      }
                    >
                      home
                    </a>
                  </Link>
                </li>
                <li className='text-base font-semibold capitalize mr-8 last:mr-0 py-4'>
                  <Link href='/about' passHref>
                    <a
                      className={
                        activePage === 'about'
                          ? 'text-primary'
                          : activePage !== 'home'
                          ? 'text-accents_9 hover:text-primary'
                          : 'text-accents_0 hover:text-primary'
                      }
                    >
                      about
                    </a>
                  </Link>
                </li>
                <li className='text-base font-semibold capitalize mr-8 last:mr-0 py-4 group'>
                  <Link href='#' passHref>
                    <a className='relative'>
                      <div
                        className={
                          activePage === 'services'
                            ? 'text-primary'
                            : activePage !== 'home'
                            ? 'text-accents_9 hover:text-primary'
                            : 'text-accents_0 hover:text-primary'
                        }
                      >
                        <span className='mr-1'>services</span>
                        <i className='fas fa-angle-down'></i>
                      </div>
                      <ul className='hidden opacity-0 absolute -left-2 top-0 z-50 py-8 pl-10 mt-8 w-60 bg-accents_0 shadow-2xl text-accents_9 group-hover:block group-hover:opacity-100'>
                        <li className='pb-4 last:pb-0'>
                          <Link href='/afghan-notary-services#notarization' passHref>
                            <a
                              className={
                                router.asPath === '/afghan-notary-services#notarization'
                                  ? 'text-primary'
                                  : 'text-accents_9 hover:text-primary'
                              }
                            >
                              Notarization
                            </a>
                          </Link>
                        </li>
                        <li className='pb-4 last:pb-0'>
                          <Link href='/afghan-notary-services#drafting' passHref>
                            <a
                              className={
                                router.asPath === '/afghan-notary-services#drafting'
                                  ? 'text-primary'
                                  : 'text-accents_9 hover:text-primary'
                              }
                            >
                              Drafting
                            </a>
                          </Link>
                        </li>
                        <li className='pb-4 last:pb-0'>
                          <Link href='/afghan-notary-services#legalization' passHref>
                            <a
                              className={
                                router.asPath === '/afghan-notary-services#legalization'
                                  ? 'text-primary'
                                  : 'text-accents_9 hover:text-primary'
                              }
                            >
                              Legalization
                            </a>
                          </Link>
                        </li>
                        <li className='pb-4 last:pb-0'>
                          <Link href='/afghan-notary-services#translation' passHref>
                            <a
                              className={
                                router.asPath === '/afghan-notary-services#translation'
                                  ? 'text-primary'
                                  : 'text-accents_9 hover:text-primary'
                              }
                            >
                              Translation
                            </a>
                          </Link>
                        </li>
                        <li className='pb-4 last:pb-0'>
                          <Link href='/afghan-notary-services#hague' passHref>
                            <a
                              className={
                                router.asPath === '/afghan-notary-services#hague'
                                  ? 'text-primary'
                                  : 'text-accents_9 hover:text-primary'
                              }
                            >
                              Hague Apostille
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </a>
                  </Link>
                </li>
                <li className='text-base font-semibold capitalize mr-8 last:mr-0 py-4'>
                  <Link href='/contact' passHref>
                    <a
                      className={
                        activePage === 'contact'
                          ? 'text-primary'
                          : activePage !== 'home'
                          ? 'text-accents_9 hover:text-primary'
                          : 'text-accents_0 hover:text-primary'
                      }
                    >
                      get in touch
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
