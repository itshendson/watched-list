function Account() {

    const getProfile = async () => {
        let response = await fetch('http://localhost:3080/');

        if (!response.ok) {
            throw new Error('Status: $(response.status');
        }

        return response;
    }

    return(
        <div>
            <p>account</p>
            <p>Hi {console.log(getProfile())}</p>
        </div>
    )
}

export default Account;