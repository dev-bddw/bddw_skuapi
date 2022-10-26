import Row from './Row';

const Table = (props) => {

    function renderRows() {

        const array_of_obj = Array.isArray(props.data) === true ;
        const single_obj = (Array.isArray(props.data) === false && props.data != null);

        if ( array_of_obj ) {
            return(
                props.data.map(object=> {
                    return(
                        <Row data={object} />
                    )
                }))
        } else if (single_obj){ 
            return (
                <Row data={props.data}/>
            )
        } else {
            return (null)
        }
    }

    return (
        <>
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
                    
                    { renderRows() }
                    </tbody>
                </table>
            </div>
        </>
)};

export default Table;
