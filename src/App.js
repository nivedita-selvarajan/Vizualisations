import './App.css';
import Sidebar from './components/sidebar';
import LineGraph from './components/lineGraph';
import DataTable from './components/dataTable';
import Histogram from './components/histogram';
import { useState } from 'react';

function App() {
  const [selectedMenu, setData] = useState({ title: 'Raw Table', type: 'rawTable' });
  const parentHandleChange = (e) => {
    setData(e);
  }
  let element;
  if (selectedMenu.type === 'rawTable') {
    element = <DataTable/>;
  } else if(selectedMenu.type === 'ageVsFare') {
    element = <LineGraph/>;
  } else if(selectedMenu.type === 'survivalsVsClass') {
    element = <Histogram/>;
  }

  return (
    <div className='main'>
      <Sidebar handleChange={parentHandleChange}/>
      <div className='container'>
        <h2>{selectedMenu.title}</h2>
        {element}
      </div>
    </div>
  );
}

export default App;
