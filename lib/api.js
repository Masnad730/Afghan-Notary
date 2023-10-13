import axios from 'axios'

export async function submitContactForm(contactInfo, setContactInfo, setLoading, enqueueSnackbar) {
  const res = await axios
    .post('https://wpbackend.navisa.af/wp-json/jwt-auth/v1/token', {
      username: 'admin',
      password: 'I6FR%0^hD@Z[@',
    })
    .then(async (res) => {
      await axios
        .post(
          'https://wpbackend.navisa.af/wp-json/wp/v2/afnotary-enquiries',
          {
            title: 'User Enquiry - Afghan Notary Public',
            status: 'publish',
            fields: {
              name: contactInfo.name,
              email: contactInfo.email,
              subject: contactInfo.subject,
              message: contactInfo.message,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${res.data.token}`,
            },
          }
        )
        .then((res) => {
          setLoading(false)
          if (res.status === 201) {
            enqueueSnackbar('Your message has been submitted successfully.')
            setLoading(false)
          } else {
            enqueueSnackbar('There was an error trying to send your message, Please try again.')
            setLoading(false)
          }
          return res.data
        })
        .catch((err) => {
          console.log(err)
          setLoading(false)
          enqueueSnackbar(
            'There was an error trying to send your message, Please check your network connection and try again.'
          )
        })
    })
    .catch((err) => {
      console.log(err)
    })
  setContactInfo({
    name: '',
    email: '',
    caseSubject: '',
    message: '',
  })
  {
    /* await fetch('https://abr-backend.herokuapp.com/afghan-notary-enquiries', {
    method: 'POST',
    headers: {
      // update with your user-agent
      'User-Agent': '*',
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      name: contactInfo.name,
      email: contactInfo.email,
      subject: contactInfo.subject,
      message: contactInfo.message,
    }),
  })
    .then((res) => {
      setLoading(false)
      if (res.statusText === 'OK') {
        enqueueSnackbar('Your message has been submitted successfully.')
      } else {
        enqueueSnackbar('There was an error trying to send your message, Please try again.')
      }
    })
    .catch(() => {
      setLoading(false)
      enqueueSnackbar(
        'There was an error trying to send your message, Please check your network connection and try again.'
      )
    })
  setContactInfo({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
*/
  }
}
