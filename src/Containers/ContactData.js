import React, {Component} from 'react';
import Input from '../Components/Forms/Fields';
import {Link} from 'react-router-dom'

class ContactData extends Component {
    state = {
        form: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                }
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your email'
                }
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Choose password'
                }
            },
            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your address'
                }
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Phone number'
                }
            },
            interests: {
                elementType: 'textarea',
                elementConfig: {
                    type: '',
                    placeholder: 'Choose your interests'
                }
            }

        }
    };

    userSignUpHandler(e) {
        e.preventDefault();
        //post to some service
    }
    inputChangedHandler(){
        //do something like validation when change triggers
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.form) {
            formElementsArray.push({
                id: key,
                config: this.state.form[key]
            });
        }

        let form = (
            <form className="form--signUp" onSubmit={this.userSignUpHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        type={formElement.config.elementConfig.type}
                        elementConfig={formElement.config.elementConfig}
                        placeholder={formElement.config.elementConfig.placeholder}

                        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                ))}
                <button className="submitButton" type="submit">Sign Up</button>
            </form>
        );
        return (
            <div className="ContactData">
                <h2>Sign up by filling up the form</h2>
                <h5>By submitting you agree to our <Link to="/">terms and conditions</Link> </h5>
                {form}
            </div>
        );
    }
}

export default ContactData;
