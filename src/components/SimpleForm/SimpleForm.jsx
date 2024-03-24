

const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log("form submitted");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value="Submit" />
                <br />
                <input type="password" name="password" id="" />
            </form>
        </div>
    );
};

export default SimpleForm;