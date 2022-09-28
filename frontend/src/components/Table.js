import React, { useState } from 'react';
import Row from './Row';
import Form from './Form';

const Table = () => {

    const [sku, setSku] = useState('enter sku here')
    const [responses, setResponses] = useState([])


    function handleSubmit(event) {

        event.preventDefault();

        fetch(`https://bddwskuapi.bddwapps.com/api/${sku}/`)
            .then(response => {
                return response.json();
        }).then(data => {
            addResponseHandler(data);
        })
        }

    function addResponseHandler(response) {
        setResponses((prevResponses) => {
            return [response, ...prevResponses];
        })
    }


    return (
        <div>
            <Form setSku={setSku} sku={sku} onSubmit={handleSubmit}/>
            <div>
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
                            responses.map(response => {
                            return(
                                <Row
                                    sku={response.sku}
                                    category={response.category}
                                    series={response.series}
                                    item={response.item}
                                    created_by={response.created_by}
                                    created_on={response.created_on}
                                />
                                )
                            })
                        };
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default Table;
