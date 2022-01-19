let server = require("../src/server");
let chai = require("chai");
let chaiHttp = require("chai-http");

// Assertion 
chai.should();
chai.use(chaiHttp); 

describe('Task APIs', () => {

    describe("Test GET route /", () => {
        it("should return boilerplate", (done) => {
            chai.request(server)
                .get("/")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.text.should.be.eq('Hello');
                    //response.body.length.should.not.be.eq(0);
                done();
                });
        });
    });

    /**
     * Test the GET route with slide parameter
     */
    describe("GET with slide parameter", () => {
        it("should GET a slide", (done) => {
            const slideId = 1;
            chai.request(server)                
                .get("/" + slideId)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('title');
                done();
                });
        });

    });

});