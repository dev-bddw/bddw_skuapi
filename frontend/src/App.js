import './App.css';

import Table from './components/Table'

function App() {
  return (
    <div className="App">
      <h2 className="py-10 text-3xl font-bold underline">ALL BDDW ITEMS</h2>
      <p className="py-10 text-base font-light leading-relaxed mt-0 mb-4 text-gray-800">
        This is a test of the BDDW SKU API. When it's done loading it should show all the product details.
      </p>
      <Table></Table>
    </div>
  );
}

export default App;