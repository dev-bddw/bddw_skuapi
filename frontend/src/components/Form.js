const Form = (props) => {
    return (
    <div className="container mx-auto">
        <form className="mb-10"onSubmit={props.onSubmit}>
            <label className="block">
                    <input
                        className="leading-tight shadow appearance-none border rounded focus:outline-none focus:shadow-outline "
                        id='sku'
                        name="sku"
                        value={props.sku}
                        onChange={event => props.setSku(event.target.value)}
                        type="text">
                    </input>
                    <button className="mx-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded" type="submit">Submit</button>
            </label>
        </form>
    </div>
    )
    };

export default Form;
