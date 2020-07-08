const router = require('express').Router()
// Require in the Paynow class
const { Paynow } = require('paynow')

// paynow web payment
router.post('/payweb', async (req, res) => {
  try {
    // Create instance of Paynow class
    const paynow = new Paynow('10077', '01016f59-1718-4c57-b9cb-c5f62597091d')
    paynow.resultUrl = 'http://paynow.now.com'
    paynow.returnUrl = 'http://localhost:8080/'

    const payment = paynow.createPayment('Invoice 35')
    payment.add('Bananas', 2.5)
    payment.add('Apples', 3.4)

    // Send off the payment to Paynow
    const response = await paynow.send(payment)
    res.json({
      success: true,
      response: response
    })
  } catch (err) {
    res.json({
      success: false,
      message: err.message
    })
  }
})

// paynow mobile payment
router.post('/paymobile', async (req, res) => {
  try {
    const paynow = new Paynow('10077', '01016f59-1718-4c57-b9cb-c5f62597091d')
    paynow.resultUrl = 'http://paynow.now.com'
    paynow.returnUrl = 'http://localhost:8080/'

    const payment = paynow.createPayment('Invoice 35', 'mushyp1608@gmail.com')
    payment.add('Bananas', 2.5)
    payment.add('Apples', 3.4)
    paynow.sendMobile(

      // The payment to send to Paynow
      payment,

      // The phone number making payment
      '0772222222',

      // The mobile money method to use.
      'ecocash'

    ).then(function (response) {
      if (response.success) {
        // These are the instructions to show the user.
        // Instruction for how the user can make payment
        const instructions = response.instructions // Get Payment instructions for the selected mobile money method

        // Get poll url for the transaction. This is the url used to check the status of the transaction.
        // You might want to save this, we recommend you do it
        const pollUrl = response.pollUrl

        console.log(instructions)
      } else {
        console.log(response.error)
      }
    }).catch(ex => {
      // Ahhhhhhhhhhhhhhh
      // *freak out*
      console.log('Your application has broken an axle', ex)
    })
  } catch (err) {
    res.json({
      success: false,
      message: err.message
    })
  }
})

module.exports = router
