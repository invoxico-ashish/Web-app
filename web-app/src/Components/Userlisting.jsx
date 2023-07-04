import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';
import { Link } from 'react-router-dom';
;

// import { Container } from './styles';

function Userlisting() {

    const [Userdata, setUserdata] = useState([]);
    const ComponentPDF = useRef();
    const generatePDF = useReactToPrint({
        content: () => ComponentPDF.current,
        documentTitle: "user data",
        onAfterPrint: () => alert("Data is saved")
    })

    useEffect(() => {
        const userRegisterdata = async () => {
            axios.get("http://localhost:7000/api/registeruserdata")
                .then(res => setUserdata(res.data))
                .catch(err => console.log(err));
        }
        userRegisterdata();
    }, [])

    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='mt-2'>
                            <h5>User List </h5>
                            <div className='d-grid d-md-flex justify-content-md-end mb-3'>
                                <Link to="RegistrationForm" className='btn btn-success '> ADD New User</Link>
                            </div>
                            <div ref={ComponentPDF} style={{ width: '100%' }}>
                                <table className='table table-bordered'>
                                    <thead className='bg-warning'>
                                        <tr>
                                            <th>Sr. No</th>
                                            <th>Name</th>
                                            <th>User Name</th>
                                            <th>Email</th>
                                            <th>Phone no</th>
                                            <th>Gender</th>
                                            <th>Country</th>
                                            <th>State</th>
                                            <th>Address</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Userdata.map((uData, index) => (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{uData.name}</td>
                                                    <td>{uData.username}</td>
                                                    <td>{uData.email}</td>
                                                    <td>{uData.phonenum}</td>
                                                    <td>{uData.gender}</td>
                                                    <td>{uData.countryname}</td>
                                                    <td>{uData.state_name}</td>
                                                    <td>{uData.Address}</td>
                                                    <td>
                                                        {/* <Link to="/userEdit" className='btn btn-success mx-2 btn-sm' >Edit</Link>
                                                    <Link to="/userDelete" className='btn btn-danger btn-sm'>Delete</Link> */}
                                                    </td>
                                                </tr>
                                            ))
                                        }


                                    </tbody>
                                </table>
                            </div>
                            <div className='d-grid d-md-flex justify-content-md-end mb-3'>
                                <button className='btn btn-success' onClick={generatePDF}> Download</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </ React.Fragment>
    )
}

export default Userlisting;