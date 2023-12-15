import React, { useState } from 'react';

const Table = () => {
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const tableData = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    // Add more data as needed
  ];

  const filteredData = tableData.filter(
    (item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.age.toString().includes(filter)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name or age"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map(
          (page, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Table;
