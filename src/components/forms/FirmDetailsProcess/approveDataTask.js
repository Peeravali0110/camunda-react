import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'semantic-ui-react'
import { InputField, CheckboxField, TextAreaField } from 'react-semantic-redux-form'
import * as Validation from '../../../constants/ValidationOptions'
import { Link } from 'react-router-dom'

let SimpleForm = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit}>
      <legend>Approve Form</legend>
      <Field name='Firm Name' component={InputField} label='Firm Name' placeholder='Firm Name'
        validate={[ Validation.required, Validation.maxLength15, Validation.minLength2 ]}/>
      <Field name='Person to Contact' component={InputField} label='Person to Contact' placeholder='Person to Contact'
        validate={[ Validation.required, Validation.maxLength15, Validation.minLength2 ]} />
      <Field name='email' component={InputField} label='E-Mail' placeholder='E-Mail'
        validate={[ Validation.required, Validation.minLength2, Validation.email ]}/>
      <Form.Group>
        <Field name='approved' component={CheckboxField} label='Approve'/>
      </Form.Group>

      <Link><Form.Field control={Button} primary type='submit'>Complete</Form.Field></Link>
    </Form>
  )
}

SimpleForm = reduxForm({
  form: 'simpleForm',
  enableReinitialize: true
})(SimpleForm)
SimpleForm = connect(
  state => ({
    initialValues: state.entities.taskVariables ? state.entities.taskVariables.variables : {}
  })
)(SimpleForm)
export default SimpleForm