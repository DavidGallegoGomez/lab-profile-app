import React from 'react';

const EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASS_PATTERN  = /^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])))/;

const validators ={
  email: v => EMAIL_PATTERN.test(v),
  password: v => PASS_PATTERN.test(v)
}

class Login extends React.Component {
  state = {
    user: {
      email: '',
      password: ''
    },
    errors: {
      email: true,
      password: true
    },
    touch: {
      email: false,
      password: false
    }
    
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const isValid = validators[name](value)


    this.setState({
      user: {
        ...this.state.user,
        [name]: value    
      },
      errors: {
        ...this.state.errors,
        [name]: !isValid
      }
    })
  }

  handleBlur = (e) => {
    const { name } = e.target

    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  getValidationClassName = (attr) => {
    const { errors, touch } = this.state

    if (!touch[attr]){return ""}
    else if (errors[attr]) {return "is-invalid"}
    else {return "is-valid"}
  }

  render() {
    const { user } = this.state

    return(
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group mt-3">
            <label className="">Email</label>
            <input className={`form-control ${this.getValidationClassName("email")}`} type="text" name="email" value={user.email} onChange={this.handleChange} onBlur={this.handleBlur}></input>
          </div>
          <div className="form-group mt-3">
            <label className="">Password</label>
            <input className={`form-control ${this.getValidationClassName("password")}`} type="password" name="password" value={user.password} onChange={this.handleChange} onBlur={this.handleBlur}></input>
          </div>
          <button className="btn btn-primary" type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;