
import styles from './Users.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Viewoneuser from './viewoneuser/viewoneuser.jsx'
function Users() {
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUserType, setSelectedUserType] = useState('');

  const itemsPerPage = 10;
  const tableData = [
    { id: 1, FullName: 'Marwa', UserType: 'admin' ,ActivationStatus:'Activated',DateJoined:'2023-10-23T20:08:32.946Z' ,Edit:'edit'},
    { id: 2, FullName: 'Daila', UserType: 'user' ,ActivationStatus:'Activated',DateJoined:'2023-10-23T20:08:32.946Z' ,Edit:'edit'},
    { id: 3, FullName: 'Nor', UserType: 'admin' ,ActivationStatus:'deActivated',DateJoined:'2023-10-23T20:08:32.946Z' ,Edit:'edit'},
    { id: 4, FullName: 'Mai', UserType: 'user' ,ActivationStatus:'Activated',DateJoined:'2023-10-23T20:08:32.946Z' ,Edit:'edit'},
    { id: 5, FullName: 'Eman', UserType: 'user' ,ActivationStatus:'deActivated',DateJoined:'2023-10-23T20:08:32.946Z' ,Edit:'edit'},
    { id: 6, FullName: 'yomna', UserType: 'admin' ,ActivationStatus:'deActivated',DateJoined:'2023-10-23T20:08:32.946Z' ,Edit:'edit'},
    { id: 7, FullName: 'Marwa', UserType: 'admin' ,ActivationStatus:'Activated',DateJoined:'2023-10-23T20:08:32.946Z' ,Edit:'edit'},
    { id: 8, FullName: 'Daila', UserType: 'user' ,ActivationStatus:'Activated',DateJoined:'2023-10-23T20:08:32.946Z' ,Edit:'edit'},
    { id: 9, FullName: 'Nor', UserType: 'admin' ,ActivationStatus:'deActivated',DateJoined:'2023-10-23T20:08:32.946Z' ,Edit:'edit'},
    { id: 10, FullName: 'Mai', UserType: 'user' ,ActivationStatus:'Activated',DateJoined:'2023-10-23T20:08:32.946Z' ,Edit:'edit'},
    { id: 11, FullName: 'Eman', UserType: 'user' ,ActivationStatus:'deActivated',DateJoined:'2023-10-23T20:08:32.946Z' ,Edit:'edit'},
    { id: 12, FullName: 'yomna', UserType: 'admin' ,ActivationStatus:'deActivated',DateJoined:'2023-10-23T20:08:32.946Z' ,Edit:'edit'},
  ];

  const filteredData = tableData.filter(
    (item) =>
      (selectedUserType === '' || item.UserType.toLowerCase() === selectedUserType) &&
      (item.FullName.toLowerCase().includes(filter.toLowerCase()) ||
      item.UserType.toLowerCase().includes(filter.toLowerCase()) ||
      item.ActivationStatus.toLowerCase().includes(filter.toLowerCase()) ||
      item.DateJoined.toLowerCase().includes(filter.toLowerCase()) ||
      item.Edit.toLowerCase().includes(filter.toLowerCase())
      )
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
          <h1>Users</h1>
          <small>Users / Dashboard</small>
        </div>
        <div className={`${styles.page_content}`}  >



          <div  className={` ${styles.records} ${styles.table_responsive}`}>
              <div className={`${styles.record_header}`}  >

                  <div className={`${styles.browse}`}  >

                <input type="search" placeholder="Search" className="record-search"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                 />
               <select
              name="userTypeFilter"
              id="userTypeFilter"
              value={selectedUserType}
              onChange={(e) => setSelectedUserType(e.target.value)}
            
            >
              
              <option value="">All User Type</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
              </div>
            </div>
            <div>
              <table width="100%">
                <thead>
                  <tr>
                    <th>#</th>
                    <th><span className="las la-sort" /> Full Name</th>
                    <th><span className="las la-sort" /> User Type</th>
                    <th><span className="las la-sort" />Activation Status	 </th>
                    <th><span className="las la-sort" /> Date Joined</th>
                    <th><span className="las la-sort" /> Edit </th>
                  </tr>
                </thead>
                <tbody>
          {currentItems.map((item) => (
              <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.FullName}</td>
                  <td>{item.UserType}</td>
                  <td>{item.ActivationStatus}</td>
                  <td>{item.DateJoined}</td>
                  <td>
                      <div style={{border: 'none', backgroundColor: '#fff'}}>
                          <Link to={`/profile/${item.id}`}>
                              <i className='fa fa-edit'></i>
                          </Link>
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

export default Users;