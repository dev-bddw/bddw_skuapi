import React, { useState, useEffect } from 'react';
import Row from './Row';
import Form from './Form';

import {getSku, getList} from '../services/production/Get'


const Table = () => {

    const [sku, setSku] = useState('')
    const [list, setList] = useState(null)
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let mounted = true;
        getList()
        .then(items => {
            if(mounted) {
                setList(items.data)
                setLoading(false);
            }
        })
        return () => mounted = false;
        }, [])


    function renderTableBody() {

        if (list) {
            return(
                list.map(object=> {
                    return(
                        <Row
                        key={object.id}
                        sku={object.id}
                        bin_link={object.links.bin}
                        category={object.attributes.category}
                        series={object.attributes.series}
                        item={object.attributes.item}
                        created_by={object.attributes.created_by}
                        created_on={object.attributes.created_on}
                    />
                    )

            }))
        } else if (item) {
            return (
                <Row
                key={item.id}
                sku={item.id}
                bin_link={item.links.bin}
                category={item.attributes.category}
                series={item.attributes.series}
                item={item.attributes.item}
                created_by={item.attributes.created_by}
                created_on={item.attributes.created_on}
                />
            )
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        setLoading(true)

        getSku(sku).then( response =>
            {
                console.log(response)
                setList(null)
                setItem(response.data)
                setLoading(false)

            }
        )
    };

    return (
        <div>
            <Form
                setSku={setSku}
                sku={sku}
                onSubmit={handleSubmit}>
            </Form>

            {((loading === true) ?

            <div className="pb-10 flex justify-center items-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">.</span>
                </div>
            </div>

            :

            <div style={{height:'75px'}}>
            </div>

            )}

            <div className="overflow-x-auto relative">
                <table style={{'textTransform': 'uppercase'}} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="py-3 px-6" scope="col">BIN</th>
                            <th className="py-3 px-6" scope="col">sku</th>
                            <th className="py-3 px-6" scope="col">category</th>
                            <th className="py-3 px-6" scope="col">series</th>
                            <th className="py-3 px-6" scope="col">item</th>
                            <th className="py-3 px-6" scope="col">creator</th>
                            <th className="py-3 px-6" scope="col">created on</th>

                        </tr>
                    </thead>
                    <tbody>
                    { renderTableBody() }
                    </tbody>
                </table>
            </div>
        </div>
)};

export default Table;
