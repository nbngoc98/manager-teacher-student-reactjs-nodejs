//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
//console.log('server: ', server);
let should = chai.should();
chai.use(chaiHttp);

//Our parent block
describe('/api/employees', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });
    /*
     * Test the /GET route
     */
    describe('/GET api/employees', () => {
        it('it should GET all the employees', (done) => {
            chai.request(server)
                .get('/api/employees')
                .end(console.log('server: ', server),
                    (err, res) => {
                    console.log(res)
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });
        });
    });

    /*
     * Test the /DELETE/:id route
     */
        // it('it should DELETE a Employee given the id', (done) => {
        //     // TODO add a model to db then get that id to take this test
        //     let id = 45;
        //     chai.request(server)
        //         .delete('/api/employees/' + id)
        //         .end((err, res) => {
        //             res.should.have.status(200);
        //             res.body.should.be.a('object');
        //             res.body.should.have.property("message").eql('Tutorial was deleted successfully!');
        //             //res.body.should.have.property('result');
        //             //res.body.result.should.have.property('roweffected').eql(1);
        //             done();
        //         });
        // });

    /*
     * Test the /POST route
     */
        // it('it should POST a employee', (done) => {
        //     let employee = {
        //         name: "Bug",
        //         email: "detected",
        //         address:"aa"
        //     };
        //     chai.request(server)
        //         .post('/api/employees')
        //         .send(employee)
        //         .end((err, res) => {
        //             res.should.have.status(200);
        //             res.body.should.be.a('object');
        //             res.body.should.have.property('message').eql('OK');
                
        //             done();
        //         });
        // });
        // it('it should not POST a book without status field', (done) => {
        //     let pet = {
        //         name: "Bug"
        //     };
        //     chai.request(server)
        //         .post('/api/employees')
        //         .send(pet)
        //         .end((err, res) => {
        //             res.should.have.status(200);
        //             res.body.should.be.a('object');
        //             res.body.should.have.property('message').eql("Pet is invalid!");
        //             done();
        //         });
        // });

        // describe('/PUT/:id employees', () => {
        //     it('it should UPDATE a employee given the id', (done) => {
        //         // TODO add a model to db then get that id to take this test
        //         let id = 1;
        //         chai.request(server)
        //             .put('/api/employees/' + id)
        //             .send({
        //                 name: "Bug",
        //                 email: "fixed",
        //                 address:"update"
        //             })
        //             .end((err, res) => {    
        //                 res.should.have.status(200);
        //                 res.body.should.be.a('object');
        //                 res.body.should.have.property('message').eql("Tutorial was updated successfully.");
        //                 // res.body.employees.should.have.property('name').eql("Bug");
        //                 // res.body.employees.should.have.property('email').eql("fixed");
        //                 // res.body.employees.should.have.property('address').eql("update");
        //                 done();
        //             });
        //     });
        // });

});
