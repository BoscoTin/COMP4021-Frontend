export default (req, res) => {
    console.log(req);

    switch (method) {
        case 'GET':
            // Get data from database
            res.status(200).json({id, name: `User ${id}`})
            break
        case 'PUT':
            // Update or craete data in database
            res.status(200).json({id, name: name || `User ${id}`})
            break
        default: 
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break
    }

}