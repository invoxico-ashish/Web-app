import React from 'react';

// import { Container } from './styles';

function Pagination() {

    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h5 className='mt-2'>Pagination </h5>
                        <table className='table table-bordered'>
                            <thead className='bg-light'>
                                <tr>
                                    <th>Sr. No</th>
                                    <th>Post title</th>
                                    <th>Body s</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>test</td>
                                    <td>data</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> 
                </div>

            </div>

        </ React.Fragment>
    )
}

export default Pagination;