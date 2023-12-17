
import styles from './PublicRoutes.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Viewoneuser from '../../table/viewoneuser/viewoneuser.jsx'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function PublicRoutes() {
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
//to set model pf add record
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const itemsPerPage = 10;
    const tableData = [
        { id: 1, Route: 'view_perms', ChangeType: 'ChangeType' ,Delete:'Delete' ,Edit:'edit'},
        { id: 2, Route: 'view_perms', ChangeType: 'ChangeType' ,Delete:'Delete' ,Edit:'edit'},
        { id: 3, Route: 'view_perms', ChangeType: 'ChangeType' ,Delete:'Delete' ,Edit:'edit'},
        { id: 4, Route: 'view_perms', ChangeType: 'ChangeType' ,Delete:'Delete' ,Edit:'edit'},
        { id: 5, Route: 'view_perms', ChangeType: 'ChangeType' ,Delete:'Delete' ,Edit:'edit'},
        { id: 6, Route: 'view_perms', ChangeType: 'ChangeType' ,Delete:'Delete' ,Edit:'edit'},
        { id: 7, Route: 'view_perms', ChangeType: 'ChangeType' ,Delete:'Delete' ,Edit:'edit'},
        { id: 8, Route: 'view_perms', ChangeType: 'ChangeType' ,Delete:'Delete' ,Edit:'edit'},
        { id: 9, Route: 'view_perms', ChangeType: 'ChangeType' ,Delete:'Delete' ,Edit:'edit'},
        { id: 10, Route: 'view_perms', ChangeType: 'ChangeType' ,Delete:'Delete' ,Edit:'edit'},
        { id: 11, Route: 'view_perms', ChangeType: 'ChangeType' ,Delete:'Delete' ,Edit:'edit'},
        { id: 12, Route: 'view_perms', ChangeType: 'ChangeType' ,Delete:'Delete' ,Edit:'edit'},
        { id: 13, Route: 'view_perms', ChangeType: 'ChangeType' ,Delete:'Delete' ,Edit:'edit'},
        { id: 14, Route: 'view_perms', ChangeType: 'ChangeType' ,Delete:'Delete' ,Edit:'edit'},
        { id: 15, Route: 'view_perms', ChangeType: 'ChangeType' ,Delete:'Delete' ,Edit:'edit'},
        { id: 16, Route: 'view_perms', ChangeType: 'ChangeType' ,Delete:'Delete' ,Edit:'edit'},

    ];

    const filteredData = tableData.filter(
        (item) =>

            item.Route.toLowerCase().includes(filter.toLowerCase())


    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);



    return (
        <>
            <div className={`${styles.table}`} >

                <div>
                    <div className={`${styles.page_header}`} >
                        <h1>Public Routes</h1>
                        <small>Public Routes / Dashboard</small>
                    </div>
                    <div className={`${styles.page_content}`}  >



                        <div  className={` ${styles.records} ${styles.table_responsive}`}>

                            <div className={`${styles.record_header}`}  >

                            <div className={`${styles.add}`}>
                <span>Entries</span>
                <select name id>
                  <option value>ID</option>
                </select>
                <Button variant="primary" onClick={handleShow}>Add record</Button>
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Private  URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter URL"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
              </div>

                                <div className={`${styles.browse}`}  >

                                    <input type="search" placeholder="Search" className="record-search"
                                           value={filter}
                                           onChange={(e) => setFilter(e.target.value)}
                                    />
                                   
                                </div>
                            </div>
                            <div>
                                <table width="100%">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th><span className="las la-sort" /> Route</th>
                                        <th><span className="las la-sort" /> Change Type</th>
                                        <th><span className="las la-sort" />Delete</th>

                                        <th><span className="las la-sort" /> Edit </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {currentItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.Route}</td>
                                            <td>
                      <div style={{border: 'none', backgroundColor: '#fff'}}>
                      <i class="fa-solid fa-arrow-right-arrow-left ms-4" style={{fontSize:'18px'}}></i>
                      </div>
                  </td>
                                            <td>
                      <div style={{border: 'none', backgroundColor: '#fff'}}>
                      <i class="fa-solid fa-trash ms-2" style={{color:" #e9291c ",fontSize:'18px'}}></i>
                      </div>
                  </td>
                                            
                                            <td>
                      <div style={{border: 'none', backgroundColor: '#fff'}}>
                      <i class="fa-solid fa-pen-to-square" style={{color:'#1a67b1'}}></i>
                      </div>
                  </td>
                                            

                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <div className='mt-5'>
                                    <nav aria-label="...">
                                        <ul className="pagination">
                                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                <button className="page-link" onClick={() => paginate(currentPage - 1)}>
                                                    Previous
                                                </button>
                                            </li>
                                            {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map(
                                                (page, index) => (
                                                    <li
                                                        key={index + 1}
                                                        className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                                                    >
                                                        <button className="page-link" onClick={() => paginate(index + 1)}>
                                                            {index + 1}
                                                        </button>
                                                    </li>
                                                )
                                            )}
                                            <li
                                                className={`page-item ${currentPage === Math.ceil(filteredData.length / itemsPerPage) ? 'disabled' : ''}`}
                                            >
                                                <button className="page-link" onClick={() => paginate(currentPage + 1)}>
                                                    Next
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PublicRoutes;