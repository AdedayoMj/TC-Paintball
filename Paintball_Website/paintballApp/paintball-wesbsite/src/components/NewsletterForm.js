import React from 'react'
import {Form, Input, Button} from 'antd'
import validator from 'validator'
import PropTypes from 'prop-types';


const NewsletterForm = ({email, handleOnchangeEmail, handleSendEmail}) => {
    return (
        <div className="Row">
        <div className="Column">
            <Form layout ='inline' className='neswletter-form newsletter-footer ' 
             method="POST">
             <div className="text-size">Newsletter</div>
            <Form.Item>
                <Input className="newsletter-text" onChange={({target})=>handleOnchangeEmail(target.value)} 
                placeholder="Submit Email to Subscribe" required value={email}></Input>
            </Form.Item>
            <Form.Item >
            <Button onClick={()=>handleSendEmail(email)} 
                htmlType='submit' type='primary button' disabled={!validator.isEmail(email)} >Send</Button>
            </Form.Item>
            </Form>
            </div>
        </div>
    );
}

NewsletterForm.protoTypes= {
    email: PropTypes.string.isRequired,
    handleSendEmail: PropTypes.func.isRequired,
    handleOnchangeEmail: PropTypes.func.isRequired
}

export default NewsletterForm;
