module.exports = {


  bind: (app) => {


    let data


    // Landing page
    app.route('/')
      .get((req, res) => {
        data = {
          pageTitle : 'Make a plea for an offence'
        }
        return res.render('index', data)
      })
      .post((req, res) => {
        let sent_notice = req.session.sentNotice = req.body.sentNotice
        if (sent_notice === 'The police') {
          return res.redirect('https://www.makeaplea.service.gov.uk/plea/enter_urn')
        } else if (sent_notice === 'Transport for London') {
          return res.redirect('/find-your-case')
        }
      })


    // Find your case
    app.route('/find-your-case')
      .get((req, res) => {
        let backURL=req.header('Referer') || '/'
        data = {
          pageTitle: 'Find your case',
          backURL: backURL
        }
        return res.render('find-your-case', data)
      })
      .post((req, res) => {
        return res.redirect('/your-details')
      })


    // Your details
    app.route('/your-details')
      .get((req, res) => {
        let backURL=req.header('Referer') || '/'
        data = {
          pageTitle: 'Your details',
          backURL: backURL
        }
        return res.render('your-details', data)
      })
      .post((req, res) => {
        return res.redirect('/your-plea')
      })


    // Your plea
    app.route('/your-plea')
      .get((req, res) => {
        let backURL=req.header('Referer') || '/'
        data = {
          pageTitle: 'Your plea',
          backURL: backURL
        }
        return res.render('your-plea', data)
      })
      .post((req, res) => {
        let how_do_you_plead = req.session.howDoYouPlead = req.body.howDoYouPlead
        if (how_do_you_plead === 'Guilty') {
          return res.redirect('/guilty')
        } else if (how_do_you_plead === 'Not guilty') {
          return res.redirect('/not-guilty')
        }
      })


    // Guilty plea
    app.route('/guilty')
      .get((req, res) => {
        let backURL=req.header('Referer') || '/'
        data = {
          pageTitle: 'Guilty plea',
          backURL: backURL
        }
        return res.render('guilty', data)
      })
      .post((req, res) => {
        let guilty_plea = req.session.guiltyPlea = req.body.guiltyPlea
        if (guilty_plea === 'Online') {
          return res.redirect('/your-finances')
        } else if (guilty_plea === 'In court') {
          return res.redirect('/your-court-hearing')
        }
      })


    // Not guilty plea
    app.route('/not-guilty')
      .get((req, res) => {
        let backURL=req.header('Referer') || '/'
        data = {
          pageTitle: 'Not guilty plea',
          backURL: backURL
        }
        return res.render('not-guilty', data)
      })
      .post((req, res) => {
        return res.redirect('/your-finances')
      })


    // Your court hearing
    app.route('/your-court-hearing')
      .get((req, res) => {
        let backURL=req.header('Referer') || '/'
        data = {
          pageTitle: 'Your court hearing',
          backURL: backURL
        }
        return res.render('your-court-hearing', data)
      })
      .post((req, res) => {
        return res.redirect('/your-finances')
      })


    // Your finances
    app.route('/your-finances')
      .get((req, res) => {
        let backURL=req.header('Referer') || '/'
        data = {
          pageTitle: 'Your finances',
          backURL: backURL
        }
        return res.render('your-finances', data)
      })
      .post((req, res) => {
        return res.redirect('/your-income')
      })


    // Your income
    app.route('/your-income')
      .get((req, res) => {
        let backURL=req.header('Referer') || '/'
        data = {
          pageTitle : 'Your income',
          backURL: backURL
        }
        return res.render('your-income', data)
      })
      .post((req, res) => {

        let employment_status = req.session.employmentStatus = req.body.employmentStatus
        let claiming_benefits = req.session.claimingBenefits = req.body.claimingBenefits

        if (employment_status === 'Employed') {

          return res.redirect('/your-employer')

        } else {

          if (claiming_benefits === 'Yes') {
            return res.redirect('/your-benefits')
          } else {
            return res.redirect('/your-outgoings')
          }

        }

      })



    app.route('/your-employer')
      .get((req, res) => {
        let backURL=req.header('Referer') || '/'
        data = {
          pageTitle: 'Your employer',
          backURL: backURL
        }
        return res.render('your-employer', data)
      })
      .post((req, res) => {

        let claiming_benefits = req.session.claimingBenefits

        if (claiming_benefits === 'Yes') {
          return res.redirect('/your-benefits')
        } else {
          return res.redirect('/your-outgoings')
        }

      })



    app.route('/your-benefits')
      .get((req, res) => {
        let backURL=req.header('Referer') || '/'
        data = {
          pageTitle: 'Your benefits',
          backURL: backURL
        }
        return res.render('your-benefits', data)
      })
      .post((req, res) => {
        return res.redirect('/your-outgoings')
      })



    // Your outgoings
    app.route('/your-outgoings')
      .get((req, res) => {
        let backURL=req.header('Referer') || '/'
        data = {
          pageTitle : 'Your outgoings',
          backURL: backURL
        }
        return res.render('your-outgoings', data)
      })
      .post((req, res) => {
        return res.redirect('/check-your-answers')
      })



    // Check your answers
    app.route('/check-your-answers')
      .get((req, res) => {
        let backURL=req.header('Referer') || '/'
        data = {
          pageTitle: 'Check your answers',
          backURL: backURL
        }
        return res.render('check-your-answers', data)
      })
      .post((req, res) => {
        return res.redirect('/declaration')
      })


    // Declaration
    app.route('/declaration')
      .get((req, res) => {
        let backURL=req.header('Referer') || '/'
        data = {
          pageTitle: 'Declaration',
          backURL: backURL
        }
        return res.render('declaration', data)
      })
      .post((req, res) => {
        return res.redirect('/your-plea-has-been-submitted')
      })


    // Your plea has been submitted
    app.route('/your-plea-has-been-submitted')
      .get((req, res) => {
        let backURL=req.header('Referer') || '/'
        data = {
          pageTitle: 'Your plea has been submitted',
          backURL: backURL
        }
        return res.render('your-plea-has-been-submitted', data)
      })
      .post((req, res) => {
        return res.redirect('/give-feedback')
      })


    // Give feedback
    app.route('/give-feedback')
      .get((req, res) => {
        data = {
          pageTitle: 'Give feedback'
        }
        return res.render('give-feedback', data)
      })
      .post((req, res) => {
        return res.redirect('/feedback-has-been-submitted')
      })


    // Feedback has been submitted
    app.route('/feedback-has-been-submitted')
      .get((req, res) => {
        data = {
          pageTitle: 'Your feedback has been submitted'
        }
        return res.render('feedback-has-been-submitted', data)
      })
      .post((req, res) => {
        return res.redirect('/')
      })


    // Help and advice
    app.route('/help-and-advice')
      .get((req, res) => {
        data = {
          pageTitle: 'Help and advice'
        }
        return res.render('help-and-advice', data)
      })


    // About
    app.route('/about')
      .get((req, res) => {
        data = {
          pageTitle: 'About'
        }
        return res.render('about', data)
      })


    // Terms and conditions
    app.route('/terms-and-conditions')
      .get((req, res) => {
        data = {
          pageTitle: 'Terms and conditions'
        }
        return res.render('terms-and-conditions', data)
      })


    // Privacy policy
    app.route('/privacy-policy')
      .get((req, res) => {
        data = {
          pageTitle: 'Privacy policy'
        }
        return res.render('privacy-policy', data)
      })


    // Cookies
    app.route('/cookies')
      .get((req, res) => {
        data = {
          pageTitle: 'Cookies'
        }
        return res.render('cookies', data)
      })


  }


}
