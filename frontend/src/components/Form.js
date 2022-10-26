const Form = (props) => {

    return (
    <div className="container mx-auto">
        <form onSubmit={event => event.preventDefault()} className="mb-10">
            <label className="block">
                <span className="font-thin">SKU</span>
                    <input
                        className="leading-tight shadow appearance-none border rounded focus:outline-none focus:shadow-outline "
                        id='sku'
                        name="sku"
                        value={props.sku}
                        onChange={event => props.setSku(event.target.value)}
                        type="text"
                    />
            </label>
        </form>
    </div>
    )
    };

export default Form;
