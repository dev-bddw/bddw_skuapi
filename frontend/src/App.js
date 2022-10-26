import './App.css';

import Table from './components/Table'
import Form from './components/Form'
import Heading from './components/Heading'
import Spinner from './components/Spinner'

import { useEffect, useState } from 'react';
import { getSku, getList } from './services/production/Get';

function App() {

  const [sku, setSku] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    let mounted = true;

    if (sku === '' ) {
      getList()
      .then(items => {
          if(mounted) {
              setData(items.data)
              setLoading(false);
          }
      })
      } else {
        getSku(sku)
        .then(items => {
            if(mounted) {
                setData(items.data)
                console.log(items.data)
                setLoading(false);
            }
        })

        }
        return () => mounted = false;

        }, [sku])

  return (
    <div className="App">
      <Heading/>
      <Form
        setSku={setSku}
        sku={sku}
        />
      { ((loading === true) ? <Spinner/> : <Table data={data}/> )}
    
    </div>
  );
}

export default App;
