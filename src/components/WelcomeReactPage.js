import React, { useState } from 'react';
import TopBar from './TopBar';

const WelcomeReactPage = () => {
  const [file, setFile] = useState(null);

  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  const handleCheckReactClick = () => {
    // Implement logic to check if the uploaded file is a valid React file
    // (e.g., check file extension or perform basic syntax validation)
    console.log('Checking uploaded file:', file.name);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
      padding: '40px',
    }}>
      <TopBar />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '20px',
      }}>
        <h1>Welcome Ron</h1>
        {/* Added classroom rows */}
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <ClassroomRow title="Introduction to React" code="ABC123" teacher="sariga miss" />
          <ClassroomRow title="Advanced React Concepts" code="DEF456" teacher="shelby sir"/>
          <ClassroomRow title="Web Development with React" code="GHI789" teacher="santhoah sir" />
          <ClassroomRow title="React for Beginners" code="JKL012" teacher="daleesha mam" />
        </div>
      </div>
      {/* Right section for file upload */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
      }}>
        <h2>Upload/drag and drop a React file</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          height: '50%',
          border: '1px dashed #ccc',
          borderRadius: '5px',
          padding: '20px',
          cursor: 'pointer',
        }}
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
        >
          {file ? (
            <p>Selected file: {file.name}</p>
          ) : (
            <p>Drag & drop or click to select a file</p>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <input
            type="file"
            accept=".js,.jsx"
            onChange={handleFileInputChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="fileInput" style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#428bca',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '10px',
            marginRight:'30px'
          }}>
            Select a file
          </label>
          <button
            onClick={handleCheckReactClick}
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#428bca',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '10px',
            }}
            disabled={!file}
          >
            Check File
          </button>
        </div>
      </div>
    </div>
  );
};

const ClassroomRow = ({ title, code, teacher }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensures even spacing
    padding: '10px 15px',
    marginBottom: '5px',
    backgroundColor: '#eee',
    borderRadius: '5px',
    cursor: 'pointer', // Simulate clickable classroom row (optional)
  }}>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p style={{ fontWeight: 'bold' }}>{title}</p>
      <p style={{ fontSize: '12px', color: '#888' }}>Class code: {code}</p>
    </div>
    <p style={{ fontSize: '12px', color: '#888' }}>Teacher: {teacher}</p>
  </div>
);

export default WelcomeReactPage;