
import styles from './Roles.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function Roles() {
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
//to set model pf add record
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

//to handel Toggle 
const [Toggle,setToggle]=useState(1)
function updateToggle(id){
    setToggle(id)
}

    const itemsPerPage = 10;
    const tableData = [
        { id: 1, URL: 'view_perms',Delete:'Delete' },
        { id: 2,  URL: 'view_perms',Delete:'Delete'},
        { id: 3,  URL: 'view_perms',Delete:'Delete'},
        { id: 4,  URL: 'view_perms',Delete:'Delete'},
        { id: 5,  URL: 'view_perms',Delete:'Delete'},
        { id: 6,  URL: 'view_perms',Delete:'Delete'},
        { id: 7,  URL: 'view_perms',Delete:'Delete'},
        { id: 8,  URL: 'view_perms',Delete:'Delete'},
        { id: 9,  URL: 'view_perms',Delete:'Delete'},
        { id: 10,  URL: 'view_perms',Delete:'Delete'},
        { id: 11,  URL: 'view_perms',Delete:'Delete'},
        { id: 12,  URL: 'view_perms',Delete:'Delete'},
        { id: 13,  URL: 'view_perms',Delete:'Delete'},
        { id: 14,  URL: 'view_perms',Delete:'Delete'},
        { id: 15,  URL: 'view_perms',Delete:'Delete'},
        { id: 16, URL: 'view_perms',Delete:'Delete'}


    ];

    const filteredData = tableData.filter(
        (item) =>

            item.URL.toLowerCase().includes(filter.toLowerCase())


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
                        <h1>Admin Allowed URLs</h1>
                        <small>Admin Allowed URLs / Dashboard</small>
                    </div>
                    <div className={`${styles.tab}`}>
                        <ul  className={`${styles.ul} d-flex`}>
                            <li className={`${styles.li} flex-fill`} onClick={()=>updateToggle(1)}>admin</li>
                            <li className={`${styles.li} flex-fill`} onClick={()=>updateToggle(2)}>usre</li>
                            <li className={`${styles.li} flex-fill`} onClick={()=>updateToggle(3)}>seller</li>
                        </ul>
                    </div>
                    <div className={Toggle===1? 'd-block' :'d-none'}>
                    <div className={`${styles.page_content}`}  >



                        <div  className={` ${styles.records} ${styles.table_responsive}`}>

                            <div className={`${styles.record_header}`}  >

                            <div className={`${styles.add}`}>
                            <span>admin</span>
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
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">URL</th>
      <th scope="col">ADD</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <icon className='fa fa-add'></icon>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td> <icon className='fa fa-add'></icon> </td>
      
    </tr>
    
  </tbody>
</table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
              </div>
              <div className={`${styles.add}`}>

            
              </div>

                                <div className={`${styles.browse}`}  >

                                    <input type="search" placeholder="Search" className="record-search"
                                           value={filter}
                                           onChange={(e) => setFilter(e.target.value)}
                                    />
                                    <Button variant="success"  style={{backgroundColor:'#198754'}}>Apply</Button>
                                   
                                </div>
                                
                            </div>
                            <div>
                                <table width="100%">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th><span className="las la-sort" /> URL</th>
                                       
                                        <th><span className="las la-sort" />Delete</th>

                                       
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {currentItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.URL}</td>
                     
                                            <td>
                      <div style={{border: 'none', backgroundColor: '#fff'}}>
                      <i class="fa-solid fa-trash ms-2" style={{color:" #e9291c ",fontSize:'18px'}}></i>
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

                    <div className={Toggle===2? 'd-block' :'d-none'}>
                    <div className={`${styles.page_content}`}  >



                        <div  className={` ${styles.records} ${styles.table_responsive}`}>

                            <div className={`${styles.record_header}`}  >

                            <div className={`${styles.add}`}>
                            <span>user</span>
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
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">URL</th>
      <th scope="col">ADD</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <icon className='fa fa-add'></icon>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td> <icon className='fa fa-add'></icon> </td>
      
    </tr>
    
  </tbody>
</table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
              </div>
              <div className={`${styles.add}`}>

            
              </div>

                                <div className={`${styles.browse}`}  >

                                    <input type="search" placeholder="Search" className="record-search"
                                           value={filter}
                                           onChange={(e) => setFilter(e.target.value)}
                                    />
                                    <Button variant="success"  style={{backgroundColor:'#198754'}}>Apply</Button>
                                   
                                </div>
                                
                            </div>
                            <div>
                                <table width="100%">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th><span className="las la-sort" /> URL</th>
                                       
                                        <th><span className="las la-sort" />Delete</th>

                                       
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {currentItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.URL}</td>
                     
                                            <td>
                      <div style={{border: 'none', backgroundColor: '#fff'}}>
                      <i class="fa-solid fa-trash ms-2" style={{color:" #e9291c ",fontSize:'18px'}}></i>
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

                    <div className={Toggle===3? 'd-block' :'d-none'}>
                    <div className={`${styles.page_content}`}  >



                        <div  className={` ${styles.records} ${styles.table_responsive}`}>

                            <div className={`${styles.record_header}`}  >

                            <div className={`${styles.add}`}>
                            <span>seller</span>
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
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">URL</th>
      <th scope="col">ADD</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <icon className='fa fa-add'></icon>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td> <icon className='fa fa-add'></icon> </td>
      
    </tr>
    
  </tbody>
</table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
              </div>
              <div className={`${styles.add}`}>

            
              </div>

                                <div className={`${styles.browse}`}  >

                                    <input type="search" placeholder="Search" className="record-search"
                                           value={filter}
                                           onChange={(e) => setFilter(e.target.value)}
                                    />
                                    <Button variant="success"  style={{backgroundColor:'#198754'}}>Apply</Button>
                                   
                                </div>
                                
                            </div>
                            <div>
                                <table width="100%">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th><span className="las la-sort" /> URL</th>
                                       
                                        <th><span className="las la-sort" />Delete</th>

                                       
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {currentItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.URL}</td>
                     
                                            <td>
                      <div style={{border: 'none', backgroundColor: '#fff'}}>
                      <i class="fa-solid fa-trash ms-2" style={{color:" #e9291c ",fontSize:'18px'}}></i>
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
            </div>
        </>
    );
}

export default Roles;