const users = [
    {
        "id": "1",
        "email": "test@gmail.com",
        "firstName": "test",
        "lastName": "TEST",
    },
    {
        "id": "2",
        "email": "test@gmail.com",
        "firstName": "test",
        "lastName": "TEST",
    }
]

export default (req, res) => {
    console.log(req.body);
    console.log(req.query);
    console.log(req.cookies);
    console.log('test');

    res.status(200).json(users);
}