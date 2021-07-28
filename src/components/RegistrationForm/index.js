import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    onFirstNameErr: false,
    onLastNameErr: false,
    submitStatus: false,
  }

  submitSuccess = event => {
    event.preventDefault()
    const {
      firstName,
      lastName,
      onFirstNameErr,
      onLastNameErr,
      submitStatus,
    } = this.state

    if (firstName === '') {
      this.setState({onFirstNameErr: true})
    } else {
      this.setState({onFirstNameErr: false})
    }
    if (lastName === '') {
      this.setState({onLastNameErr: true})
    } else {
      this.setState({onLastNameErr: false})
    }
    if (firstName === '' && lastName === '') {
      this.setState({onFirstNameErr: true, onLastNameErr: true})
    }
    if (firstName !== '' && lastName !== '') {
      this.setState({firstName: ''})
      this.setState({lastName: ''})
      this.setState({submitStatus: true})
    }
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName !== '') {
      this.setState({onFirstNameErr: false})
    } else {
      this.setState({onFirstNameErr: true})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state

    if (lastName !== '') {
      this.setState({onLastNameErr: false})
    } else {
      this.setState({onLastNameErr: true})
    }
  }

  onRegister = () => {
    this.setState({submitStatus: false})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderFirstName = () => {
    const {firstName, onFirstNameErr} = this.state
    const inputErrorClass = onFirstNameErr ? 'input-error' : 'input-element'
    return (
      <>
        <label className="label-element" htmlFor="firstname">
          FIRST NAME
        </label>
        <input
          className={inputErrorClass}
          placeholder="FIRSTNAME"
          type="text"
          id="firstname"
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </>
    )
  }

  renderLastName = () => {
    const {lastName, onLastNameErr} = this.state
    const inputErrorClass = onLastNameErr ? 'input-error' : 'input-element'
    return (
      <>
        <label className="label-element" htmlFor="lastname">
          LAST NAME
        </label>
        <input
          className={inputErrorClass}
          placeholder="LASTNAME"
          type="text"
          id="lastname"
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </>
    )
  }

  renderFormElement = () => {
    const {onFirstNameErr, onLastNameErr} = this.state
    return (
      <>
        <form className="form-container" onSubmit={this.submitSuccess}>
          <div className="input-container">
            {this.renderFirstName()}
            {onFirstNameErr && <p className="error-msg">Required</p>}
          </div>
          <div className="input-container">
            {this.renderLastName()}
            {onLastNameErr && <p className="error-msg">Required</p>}
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </>
    )
  }

  renderSubmitSuccessForm = () => (
    <>
      <img
        alt="success"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <p className="submit-success-heading">Submitted Successfully</p>
      <button
        className="submit-success-button"
        onClick={this.onRegister}
        type="button"
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {submitStatus} = this.state
    return (
      <div className="registration-container">
        <h1 className="heading">Registration</h1>
        <div className="registration-card">
          {submitStatus
            ? this.renderSubmitSuccessForm()
            : this.renderFormElement()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
