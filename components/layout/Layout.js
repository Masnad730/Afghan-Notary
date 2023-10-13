import { useState, useEffect } from 'react'
import Head from 'next/head'
import ScrollHeader from '../ScrollHeader'

const Layout = ({ children, title, canonical, pageDescription, jsonLD, page }) => {
  const [pageHeight, setPageHeight] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setPageHeight(window.pageYOffset > 50))
    }
  }, [])

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='UTF-8' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <link rel='canonical' href={canonical} />
        <meta name='description' content={pageDescription} />
        <meta
          name='keywords'
          content='Afghan notary, notarization of documents, notary of documents, notary of documents in Afghanistan, notary in Afghanistan, notary in Kabul, notary of documents in Kabul, notary of documents in Afghanistan, notary of passport copy, notary of certificate in Kabul, notary public in Parwan, notary public in Logar, notary public in Kandahar, notary public in Mazar, notary public in Nangarhar, notary public in Jalalabad, notary public in Laghman, certification of documents in Kabul, certification of documents in Afghanistan,, notarization Services, notarization Services in Afghanistan, notarization Services in Kabul,  notarization of affidavits, notarization of oaths in Afghanistan, notarization of Statutory Declarations in Afghanistan, notarization Passport Copies in Afghanistan, notarization of Documents Copies, notary of Written Statements, notary of Application Forms, notary of Mortgage Documents, notary of Property Purchase Contracts, notary of Powers of Attorney, notary of Consent Letters for Minor Child to Travel Internationally, notary of Adoption Documents, notary of Educational Documents in Afghanistan, notary of Statutory Declarations, notary of Certificates of Good Standing, notary of Certificates of Incorporation, notarization of Memorandum and Articles of Association, notarization of Written Statements, notary of Forms in Afghanistan, notary of Mortgage Documents, Drafting Services in Afghanistan, drafting legal documents, translation of legal documents, Top Law Firm in Afghanistan, leading law firm in Afghanistan, Band 1 Law Firm in Afghanistan, Lawyers, Lawyers in Afghanistan, Corporate, Employment and labor, Consultancy, Legal Advice, Legal Training, Law, Laws, Afghan Laws, Top notary Firm in Afghanistan, leading notary firm in Afghanistan, notary of Tazkira, notary of Taskera, notarization of tazkera in Afghanistan. notarization of declaration in Afghanistan.'
        />
        <meta name='robots' content='index, follow' />

        {/* Facebook Open Graph  */}
        <meta property='og:title' content='HG Afghan Notary Public' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://afghannotary.com/' />
        <meta
          property='og:image'
          content='https://afghannotary.com/images/afghan-notary-logo.png'
        />
        <meta property='og:site_name' content='HG Afghan Notary Public' />
        <meta
          property='og:description'
          content='HG Afghan Notary Public provides a comprehensive set of notarial services that include certifying and notarizing a wide range of documents for both individuals and businesses.'
        />
        <meta
          property='og:image:secure_url'
          content='https://afghannotary.com/images/afghan-notary-logo.png'
        />

        {/* Twitter */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='HG Afghan Notary Public' />
        <meta
          name='twitter:description'
          content='HG Afghan Notary Public provides a comprehensive set of notarial services that include certifying and notarizing a wide range of documents for both individuals and businesses.'
        />
        <meta
          name='twitter:image'
          content='https://afghannotary.com/images/afghan-notary-logo.png'
        />

        <title>{title}</title>
        <script type='application/ld+json'>{jsonLD}</script>
      </Head>
      <div>
        <div className={pageHeight ? 'block' : 'hidden'}>
          <ScrollHeader activePage={page} pageHeight={pageHeight} />
        </div>
        {children}
      </div>
    </>
  )
}

export default Layout
