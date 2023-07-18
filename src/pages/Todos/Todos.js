import { useState } from 'react';

import { addTodo, editTodo, deleteTodo } from '../actions';

import { useDispatch, useSelector } from 'react-redux';

const initialState = {
    title: '',
    location: '',
    description: ''
}

export default function Todos() {

    const dispatch = useDispatch()
    const [state, setState] = useState(initialState)
    const list_todos = useSelector(state => state.TodoReducer.todos)

    const handleChange = e => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    return (
        <>

            {/* /////////////////////////////////////////////////////////////////////////////// */}

            <div className="py-5">
                <div className="container">

                    <div className="row mb-4">
                        <div className="col-12">
                            <h4 className="fw-bold text-center">ADD TODOS</h4>
                        </div>
                    </div>

                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                        <div className="card p-3 shadow-lg border-0">
                            <div className="card-body">

                                <form>
                                    <div className="row">
                                        <div className="col-12 col-md-6 mb-3">
                                            <div className="input-group">
                                                <input type="text" name="title" className="form-control"
                                                    value={state?.title} placeholder="Title" aria-label="Recipient's username"
                                                    aria-describedby="button-addon2" onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 mb-3">
                                            <div className="input-group">
                                                <input type="text" name="location" className="form-control"
                                                    value={state?.location} placeholder="Location" aria-label="Recipient's username"
                                                    aria-describedby="button-addon2" onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="input-group">
                                                <textarea className="form-control" name="description" rows={4}
                                                    value={state?.description} placeholder="Description" aria-label="Recipient's username"
                                                    aria-describedby="button-addon2" onChange={handleChange}></textarea>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <div className="mt-3">
                                                <button className='btn btn-danger mt-2 w-50' onClick={e => { dispatch(addTodo(state)); e.preventDefault() }}>
                                                    Add Todo</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* /////////////////////////////////////////////////////////////////////////////// */}

            <div className="py-5">
                <div className="container">

                    <div className="row mb-4">
                        <div className="col">
                            <h4 className="fw-bold text-center">MY TODOS</h4>
                        </div>
                    </div>

                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                        <div className="card p-2 shadow-lg border-0">
                            <div className="card-body table-responsive">

                                <table className='table text-center'>
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            list_todos?.map((elem, i) => {
                                                return (
                                                    <tr key={elem.id}>
                                                        <td scope="col">{i + 1}</td>
                                                        <td scope="col">{elem?.title}</td>
                                                        <td scope="col">{elem?.location}</td>
                                                        <td scope="col">{elem?.description}</td>
                                                        <td scope="col"><button className='btn btn-info btn-sm me-1' data-bs-toggle="modal" data-bs-target="#editModel"
                                                            onClick={() => { setState(elem) }}>Edit</button><button className='btn btn-danger btn-sm me-1'
                                                                onClick={e => { dispatch(deleteTodo(elem.id)); e.preventDefault() }}>Delete</button></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* /////////////////////////////////////////////////////////////////////////////// */}

            <div className="modal fade" id="editModel">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Update Todo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <input type="text" className='form-control mb-3' name='title' value={state?.title}
                                            placeholder='Title' onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <input type="text" className='form-control mb-3' name='location' value={state?.location}
                                            placeholder='Location' onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <input type="text" className='form-control mb-1' name='description' value={state?.description}
                                            placeholder='Description' onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={e => {
                                dispatch(editTodo(state)); e.preventDefault()
                            }}> Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

