import React from 'react';

import './FormErrors.css';

const FormErrors = (props) => {
    return (
        <div>
            <ul className="validation-list">
                {
                    // eslint-disable-next-line
                    props.formRules.map((rule) => {
                        if(rule.field === 'username' ){
                            if(props.formType === 'Register' ){
                                return <li className="error" key={rule.id}>{rule.name}</li>
                            }
                        } else {
                            return <li className="error" key={rule.id}>{rule.name}</li>
                        }
                    })
                    
                }
            </ul>
        </div>
    )
}

export default FormErrors;