const request = require('request');
const server = require('../../src/server');
const base = 'http://localhost:3000';
const uinames = 'https://uinames.com/api/';



describe('routes : baby', () => {

    describe('GET /baby', () => {

        it('should return status code 200', (done) => {
            request(`${base}/baby`, (error, response) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        }); // it ("should return status code 200")

    }); // describe('GET /baby')
    
    describe('POST /baby', () => {

        it('should return status code 200', (done) => {
            request({
                method: 'POST',
                url: `${base}/baby`
            }, (error, response) => {
                expect(response.statusCode).toBe(200);
                
                done();
            });
        }); // it ("should return status code 200")

    }); // describe('GET /baby')
    
    
    
    

}); // describe('routes : baby')
