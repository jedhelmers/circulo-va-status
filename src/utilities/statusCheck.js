export class StatusCheck {
  constructor(body, callBack) {
    this.headers = {
      Apikey: "WTL49eehXWUdgqGmDOgs2kErBNcm8c3f",
      'Content-Type': "application/json"
    }
    this.body = body
    this.callBack = callBack
    this.checkStatus()
  }

  clearUser() {
    this.body = {
      email: '',
      first_name: '',
      middle_name: '',
      last_name: '',
      gender: '',
      birth_date: '',
      ssn: '',
      veteran_confirmation_status: '',
      disability_rating: ''
    }
  }

  checkStatus() {
      return fetch("https://sandbox-api.va.gov/services/veteran_confirmation/v0/status", {
        headers: this.headers,
        body: JSON.stringify(this.body),
        method: "POST"
      })
      .then(res => res.json())
      .then((d) => {
        if (d.errors) {
          this.callBack({veteran_status: 'unconfirmed'})
        } else {
           this.callBack(d)
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
