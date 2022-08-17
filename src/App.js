import './App.css';
import Sidebar from './components/sidebar';
import LineGraph from './components/lineGraph';
import DataTable from './components/dataTable';
import Histogram from './components/histogram';
import { useState } from 'react';

function App() {
  const [selectedMenu, setData] = useState('');
  const parentHandleChange = (e) => {
    setData(e);
  }
  let element;
  if (selectedMenu === 'rawTable') {
    element = <DataTable />;
  } else if(selectedMenu === 'ageVsFare') {
    element = <LineGraph/>;
  } else if(selectedMenu === 'survivalsVsClass') {
    element = <Histogram/>;
  }

  return (
    <div className="main">
      <Sidebar handleChange={parentHandleChange}/>
      <div className='container'>
        {element}
      </div>
    </div>
  );
}

export default App;
