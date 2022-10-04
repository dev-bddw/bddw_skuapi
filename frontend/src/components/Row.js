
import React, { useState } from 'react';

import Modal from './Modal';

const Row = (props) => {
    const [showModal, setShowModal] = useState(false);

    return (

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td onClick={() => setShowModal(true)} className="py-2 px-6">{props.sku}</td>
            <td className="py-2 px-6">{props.category}</td>
            <td className="py-2 px-6">{props.series}</td>
            <td className="py-2 px-6">{props.item}</td>
            <td className="py-2 px-6">{props.created_by}</td>
            <td className="py-2 px-6">{props.created_on}</td>
            {showModal ? (
                <Modal sku={props.sku} setShowModal={setShowModal} scans={props.scans}></Modal>
            ) : null}
        </tr>

    )};


export default Row;
