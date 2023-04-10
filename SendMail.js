import React from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './Firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


function SendMail() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (formData) =>{
        console.log(formData)
        db.collection('emails').add({
          to: formData.to,
          subject: formData.subject,
          message: formData.message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        dispatch(closeSendMessage());
    }

   const dispatch = useDispatch();


  return (
    <div className='sendmail'>
        <div className='sendmail__header'>
        <h3>New Message</h3>
        <CloseIcon
        onClick = {()=> dispatch(closeSendMessage())}
         className='sendmail__close' />
        </div>


       <form onSubmit={handleSubmit(onSubmit)}>
        <input
         name='to' 
         placeholder='To' 
         type='email'
        {...register('to', {required: true})} />
        {errors.to && <p className='sendmail__error'>To is required</p>}


        <input name='subject'
         placeholder='Subject'
        type='text'
        {...register('subject', {required: true})} />
        {errors.subject && <p className='sendmail__error'>Subject is required</p>}

        <input name='message'
         className='sendmail__message' 
         placeholder='Message...' 
         type='text' {...register('message', {required: true})} />
        {errors.message && <p className='sendmail__error'>Message is required</p>}



        <div className='sendmail__options'>
            <Button className='sendmail__send'
            variant='contained'
            color='primary'
            type='submit'
            >
                Send</Button>
        </div>
        </form> 


    </div>
  )
}

export default SendMail