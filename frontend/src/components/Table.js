import React, { useState, useEffect } from 'react';
import Row from './Row';
import Form from './Form';
import { getList, getSku } from '../services/list';

const Table = () => {

    const [sku, setSku] = useState('')
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let mounted = true;
        getList()
        .then(items => {
            if(mounted) {
                setList(items);
                setLoading(false);
            }
        })
        return () => mounted = false;
        }, [])



    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true)
        getSku(sku).then( items =>
            {
                setList([items])
                setLoading(false)

            }
        )

    };

    return (
        <div>
            <Form setSku={setSku} sku={sku} onSubmit={handleSubmit}></Form>
            {((loading === true) ?
                <div className="pb-10 flex justify-center items-center">
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                        <span className="visually-hidden">.</span>
                    </div>
                    </div> :
                        <div style={{height:'75px'}}>
                        </div>
            )}
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="py-3 px-6" scope="col">sku</th>
                            <th className="py-3 px-6" scope="col">category</th>
                            <th className="py-3 px-6" scope="col">series</th>
                            <th className="py-3 px-6" scope="col">item</th>
                            <th className="py-3 px-6" scope="col">creator</th>
                            <th className="py-3 px-6" scope="col">created on</th>

                        </tr>
                    </thead>
                    <tbody>
                    {
                        list.map(object => {
                        return(
                            <Row
                                key={object.sku}
                                sku={object.sku}
                                category={object.category}
                                series={object.series}
                                item={object.item}
                                created_by={object.created_by}
                                created_on={object.created_on}
                                scans={'This is where we are going to render all the location scans for the sku'}

                            />
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
)};

export default Table;
