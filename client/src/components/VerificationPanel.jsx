import React from 'react'
import InputField from './InputField'
import SubmitButton from './SubmitButton'

const VerificationPanel = ({onSubmit, onChange}) => {
  return (
    <div>
      <InputField fieldName={'secret code : '} onChange={onChange}/>
      <SubmitButton  onClick={onSubmit}/>
    </div>
  )
}

export default VerificationPanel
