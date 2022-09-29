const Row = (props) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="py-2 px-6">{props.sku}</td>
            <td className="py-2 px-6">{props.category}</td>
            <td className="py-2 px-6">{props.series}</td>
            <td className="py-2 px-6">{props.item}</td>
            <td className="py-2 px-6">{props.created_by}</td>
            <td className="py-2 px-6">{props.created_on}</td>
    </tr>
    )
    };


export default Row;
