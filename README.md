# Pagination
Pagination :boom: :boom: :rocket:	Pagination :boom: :boom: :rocket:

 // Code phân trang bên Server

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


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
