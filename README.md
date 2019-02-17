# Pagination
Pagination :boom: :boom: :rocket:


// Code phân trang bên Server

// pagination


exports.findAll = (req, res) => {

    const page = parseInt(req.query.page) || 1; // tên page, nếu không có default query = 1
    const perPage = 4; // số lượng phần tử muốn hiển thị
    const start = (page - 1) * perPage;
    const end = page * perPage;
    
    Product.find().then(products => {
        const dataPage = products.slice(start, end);
        const response = { status: true, data: dataPage, pageCount: Math.ceil(products.length/perPage) };
        res.status(200).send(response);
    }).catch(err => {
        res.status(500).send({ message: err.message });
    })
};

