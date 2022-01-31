import { Container} from '@mui/material';
import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Form.css';


const Form = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://gentle-tor-92239.herokuapp.com/customers', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('User added successfully');
                    reset();
                }
            })
    }

    return (
        <Container>
            <div className="service-form">
                <h2 className="text-4xl font-bold text-danger">Add A New User</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("username", { required: true, maxLength: 50 })} placeholder="username" />
                    <br />
                    <input {...register("mobile", { required: true })} placeholder="Mobile Number" />
                    <br />
                    <input {...register("email", { required: true })} placeholder="Email" />
                    <br />
                    <input {...register("address", { required: true })} placeholder="Address" />
                    <br />
                    <input className="submit-btn" style={{ width: "40%" }} type="submit" />
                </form>
            </div>
        </Container>
    );
};

export default Form;