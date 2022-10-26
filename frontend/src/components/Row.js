import React, { useState } from "react";

import Modal from "./Modal";

const Row = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="py-2 px-6">
        <a href={props.data.links.bin}>BIN</a>
      </td>
      <td className="py-2 px-6">
        <span onClick={() => setShowModal(true)}>{props.data.id}</span>
      </td>
      <td className="py-2 px-6">{props.data.attributes.category}</td>
      <td className="py-2 px-6">{props.data.attributes.series}</td>
      <td className="py-2 px-6">{props.data.attributes.item}</td>
      <td className="py-2 px-6">{props.data.attributes.created_by}</td>
      <td className="py-2 px-6">{props.data.attributes.created_on}</td>
      {showModal ? (
        <Modal sku={props.data.id} setShowModal={setShowModal}></Modal>
      ) : null}
    </tr>
  );
};

export default Row;
