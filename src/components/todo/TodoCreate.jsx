import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Todo.css';

import UserService from '../../services/UserService.js'

import schema from './todoValidationSchema.js'

const TodoCreate = () => {
    const [responseMessage, setResponseMessage] = useState();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    })

    // doCreate is the one called by the forms handleSubmit
    const doCreate = async (formData) => {

        try {
            const response = await UserService.addTodoForUser(formData);
            // Show message and wait 3 second before going back
            setResponseMessage(response.data.message)

            setTimeout(() => {
                navigate("/todos");
            }, 3000)


        } catch (error) {
            // Show  message and wait 3 second before going back
            // In error response we have the response from the server, in error.message we get what axios thinks happened, lastly we try to just stringify the error
            const errortext = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            setResponseMessage(errortext)

            setTimeout(() => {
                // Go back
                navigate(-1);
            }, 3000)
        }
    }

    // We use the name handleCancel, IF the handler requires a chain we would add that as a callback 
    // with a doXyz name, ie the real doer so to speak! 
    // But do seldom see that need in own code, mostly when using validating or some other middleware code in between.
    const handleCancel = (e) => {
        e.preventDefault();
        // Go back
        navigate(-1);
    }

    return (
        <>
         <div className="container">
            <div className="row">
                <div className="col-md-7 col-12">
                    <div className="card rounded border border-dark  ">
                        <div className="card-body">
                        <h1 className='text-center'> Make a new todo</h1>
                            <form onSubmit={handleSubmit(doCreate)} className='fw-bold'>
                                
                                    <label htmlFor="task" className="form-label">Task</label>
                                    <input type="text" {...register("task")} className="form-control bg-light border border-dark" />
                                    {errors?.task && <label className="error-feedback">{errors.task.message}</label>}
                                
                                
                                    <label htmlFor="body" className="form-label">Body</label>
                                    <input type="text" {...register("body")} className="form-control bg-light border border-dark" />
                                    {errors?.body && <label className="error-feedback" >{errors.body.message}</label>}
                                
                               
                                    <label htmlFor="estimated_time" className="form-label">Estimated_time</label>
                                    <input type="number" {...register("estimated_time")} className="form-control bg-light border border-dark" />
                                    {errors?.estimated_time && <label className="error-feedback">{errors.estimated_time.message}</label>}
                                
                                <p></p>
                                <div className="form-group d-flex justify-content-between">
                                    <button onClick={handleCancel} className="btn btn-dark border border-2 border-dark button-8 btn-block">
                                        Cancel
                                    </button>
                                    <button className="btn btn-dark border border-2 border-dark button-7 btn-block" >
                                        Create
                                    </button>
                                </div>
                            </form>
                            <p></p>
                            {responseMessage && (
                                <div className="alert alert-success" >
                                    {responseMessage}
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            </div>

                           
                   
                 
              
               
            
        </>
    )
}

export default TodoCreate;