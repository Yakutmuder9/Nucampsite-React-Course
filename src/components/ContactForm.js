import { Button, Label, Col, FormGroup } from'reactstrap';
import { Formik, Field, Form } from 'formik'

const ContactForm = () => {
  return (
    <Formik
    initialValues={{
        firstName: '',
        lastName: '',
        phoneNum: '',
        email: '',
        agree: false,
        contactType: 'By Phone',
        feedback: ''
    }}>
        <Form>
                <FormGroup row>
                    <Label htmlFor='firstName' md='2'>
                        First Name
                    </Label>
                    <Col md='10'>
                    <Field className='form-control' name='firstName'  placeholder ='First Name'/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='lastName' md='2'>
                        Last Name
                    </Label>
                    <Col md='10'>
                    <Field className='form-control' name='lastName'  placeholder ='Last Name'/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='phoneNum' md='2'>
                        Phone
                    </Label>
                    <Col md='10'>
                    <Field className='form-control' name='phoneNum'  placeholder ='Phone'/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email
                    </Label>
                    <Col md='10'>
                    <Field className='form-control' name='email'  placeholder ='Email'/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                <Label check md={{ size: 4, offset: 2 }}>
                        <Field
                            name='agree'
                            type='checkbox'
                            className='form-check-input'
                        />{' '}
                        May we contact you?
                    </Label>
                    <Col md='4'>
                    <Field className='form-control' name='contactType' and as='select'>
                    <option>By Phone</option>
                            <option>By Email</option>
                    </Field>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='feedback' md='2'>
                        Your Feedback
                    </Label>
                    <Col md='10'>
                    <Field className='form-control' name='feedback' as='textarea' rows='12'/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                </FormGroup>
            </Form>
        
    </Formik>
  )
}

export default ContactForm