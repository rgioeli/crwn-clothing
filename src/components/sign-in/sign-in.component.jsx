import './sign-in.styles.scss'
import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = e => {
        e.preventDefault()
        this.setState({ email: '', password: ''})
    }

    handleChange = e => {
        const { value, name } = e.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form action="" onSubmit={ this.handleSubmit }>
                    <FormInput name="email" label='email' handleChange={ this.handleChange } type="email" value={ this.state.email } required/>
                    <FormInput handleChange={ this.handleChange } label='password' name="password" type="password" value={ this.state.password } required/>
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form">SIGN IN</CustomButton>
                        <CustomButton color={{bc: '#f54242', c: '#fff'}} onClick={ signInWithGoogle }>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn