import {useRef, useState} from "react";

export default function FormValidation() {
    const name = useRef()
    const email = useRef()
    const message = useRef()
    const acceptAllConditions = useRef()
    const [errors, setErrors] = useState({})

    const [isFormSent, setIsFormSent] = useState(false)
    const [isFormValid, setIsFormValid] = useState(false)
    const [messageLength, setMessageLength] = useState(0);

    const validateRequiredElement = (ref) => {
        if (ref.current.value.trim() === '') {
            setErrors(prevState => {
                    return {...prevState, ...{[ref.current.id]: 'field required'}}
                }
            )
            setIsFormValid(false)
        }
    }
    const validateForm = () => {
        const emailValue = email.current.value
        const acceptAllConditionsValue = acceptAllConditions.current.checked
        let isFormValid = true


        setErrors([])

        validateRequiredElement(name)
        validateRequiredElement(email)

        if (!emailValue.match(/^\S+@\S+\.\S+$/)) {
            setErrors(prevState => {
                return {
                    ...prevState,
                    ...{email: 'The email must be in this format (xxxxxx@gmail.com)'}
                }
            })
            isFormValid = false
        }
        const currentMessageLength = message.current.value.length;
        const minMessageLength = 200;
        setMessageLength(currentMessageLength); // Mettez à jour la longueur du message.
    
        if (currentMessageLength < minMessageLength) {
          setErrors((prevState) => ({
            ...prevState,
            message: `Message should be greater than ${minMessageLength} (${currentMessageLength}/${minMessageLength})`,
          }));
          isFormValid = false;
        }
       
  
        if (!acceptAllConditionsValue) {
            setErrors(prevState => {
                return {...prevState, ...{[acceptAllConditions.current.id]: `the checkbox must be checked`}}
            })
            isFormValid = false
        }

        setIsFormValid(isFormValid)
           return isFormValid
         }

    const resetForm = () => {
        name.current.value = ''
        email.current.value = ''
        message.current.value = ''
        acceptAllConditions.current.checked = false
        setMessageLength(0);
    }
  
    const handleChange = () => {
        validateForm()
   
    const submitForm = (e) => {
        e.preventDefault()
     
         setIsFormSent(false)
        if (validateForm()) {
            setIsFormSent(true)
            resetForm()
        }
    }
    const getError = (fieldName) => {
        return errors[fieldName]
    }
    const hasError = (fieldName) => {
        return getError(fieldName) !== undefined
    }
    const displayError = (ref) => {
        if (ref.current !== undefined) {
            const fieldName = ref.current.id
            if (hasError(fieldName)) {
                ref.current.style.border = '1px solid red'
               
                return <div className={'text-danger'}>{getError(fieldName)}</div>
            }
            ref.current.style.border = '1.5px solid green'
            ref.current.style.backgroundColor = 'rgba(0,255,0,0.1)'
        }
    }
   const displayErrors = () => {
        return Object.entries(errors).map((error, key) => {
            const [ field,message] = error
            return <li key={key}> {field}:{message}</li>
        })
    }
    return <div className={'container-fluid mx-auto my-5'} id="div1">
        {isFormSent ?
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">Message sent successfully !!</h1>
                    <p className="lead">Thank you for your message</p>
                    <hr className="my-2"/>
                    <p>More info</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="" role="button">Return to contact page</a>
                    </p>
                </div>
            </div>
            : <form onSubmit={submitForm}  onChange={validateForm}>
            {Object.keys(errors).length > 0 ?
                    <div className="alert alert-danger" role="alert">
                        <strong>Errors</strong>
                        <ul>
                            {displayErrors()}
                        </ul>
                    </div>
                    : ''
                }
                <h1>Contact form</h1>
                <hr/>
              
                <div className="form-outline mb-5">
                    
                    <input type="text" id="name" placeholder="enter your name" className="form-control" ref={name}/>
                    {displayError(name)}
                </div>

             
                <div className="form-outline mb-5">
                   
                    <input type="text" id="email" placeholder="enter your email" className="form-control" ref={email} />
                    {displayError(email)}
                </div>

               
                <div className="form-outline mb-5">
                   
                    <textarea
                     className="form-control"
                       id="message"
                       placeholder=" write your informations "
                         rows="4"
                     ref={message}
                   
                   
                
></textarea>
<p>
              
            </p>
                    {displayError(message)}
                </div>

                <div className="form-check mb-5">
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" id="acceptAllConditions"
                               ref={acceptAllConditions}/>
                        <label className="form-check-label" htmlFor="acceptAllConditions">
                            Accept all conditions
                        </label>
                    </div>

                    {displayError(acceptAllConditions)}
                </div>

              
                <button  type="submit" className="btn btn-success w-100 mb-4">Submit</button>
            </form>
        }


    </div>
}}
