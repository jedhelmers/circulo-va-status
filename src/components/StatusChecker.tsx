import React, { useState, useEffect } from 'react'
import { StatusCheck } from '../utilities/statusCheck.js'
import { useForm } from "react-hook-form";

/*
    Sample user for faster development:

    const samplePerson: { [index: string]: string } = {
      email: 'va.api.user+idme.001@gmail.com',
      first_name: 'Tamara',
      middle_name: 'E',
      last_name: 'Ellis',
      gender: 'F',
      birth_date: '1967-06-19',
      ssn: '796130115',
      disability_rating: '40'
    }
*/

const clearedPerson: { [index: string]: string } = {
  email: '',
  first_name: '',
  middle_name: '',
  last_name: '',
  gender: '',
  birth_date: '',
  ssn: '',
  disability_rating: ''
}

const fields: { [index: string]: any } = [
  { key: 'first_name', label: 'First Name', type: 'string', required: true },
  { key: 'middle_name', label: 'Middle Name', type: 'string', required: true },
  { key: 'last_name', label: 'Last Name', type: 'string', required: true },
  { key: 'gender', label: 'Gender', type: 'string', required: true },
  { key: 'birth_date', label: 'Birth Date', type: 'string', required: true },
  { key: 'ssn', label: 'SSN', type: 'string', required: true },
]

export default() => {
  const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
  const [isLoading, loadHandler] = useState(false)
  const [status, setStatus] = useState<'unconfirmed' | 'confirmed' | null>(null)
  const [user, setUser] = useState<StatusCheck | null>(null)

  const onSubmit = (data: any) => {
    loadHandler(true)
    setUser(new StatusCheck(data, (e: any) => {
      setStatus(e.veteran_status)
      setTimeout(() => {
        loadHandler(false)
      }, 200);
    }))
  };

  return (
    <div className="o-status-checker">
      <div className="fc-fs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`border ${status && (status === 'confirmed' ? 'border-success' : 'border-error')} thickness-2 r-10 p-20`} style={{ background: 'var(--gray-10)' }}>
          <div className="g-1fr gap-12">
              {
                status && !isLoading && (
                  <div className="fr-fn">
                    <div className={`${status === 'confirmed' ? 'bg-success' : 'bg-error'} r-20 txt-white p-10`}>{status === 'confirmed' ? 'Confirmed' : 'Unconfirmed'}</div>
                  </div>
                )
              }
              {
                fields.map((field: any, i: number) => (
                  <div className="fc-ft" key={i}>
                    <label htmlFor={field.key}>{field.label}</label>
                    <input id={field.key} required={field.required} {...register(field.key)} />
                  </div>
                ))
              }
              <div className="fr-fn">
                <button className="mr-10 txt-error border border-error" onClick={() => reset({...clearedPerson})}>Clear</button>
                <input type="submit" value="Search Veteran" />
              </div>
          </div>
        </div>
        {errors.exampleRequired && <span>This field is required</span>}

        </form>
      </div>
      {isLoading && <div className="loading fc-c">Loading...</div>}
    </div>
  )
}
