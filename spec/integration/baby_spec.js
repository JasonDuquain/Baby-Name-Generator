const request = require('request');
const server = require('../../src/server');
const base = 'http://localhost:3000';
const uinames = 'https://uinames.com/api/';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 9000;



describe('routes : baby', () => {

    describe('GET /baby', () => {

        it('should return status code 200', (done) => {
            request(`${base}`, (error, response) => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toContain('Baby Name Generator');
                done();
            });
        }); // it ("should return status code 200")

    }); // describe('GET /baby')
    
    describe('POST /baby', () => {

        it('should return status code 200', (done) => {
            request({
                method: 'POST',
                url: `${base}/baby`,
                form: {
                    gender: 'female',
                    region: 'england',
                    amount: 5
                }
            }, (error, response) => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toContain('You searched for')
                done();
            });
        }); // it ("should return status code 200")

    }); // describe('GET /baby')
    
    
    
    

}); // describe('routes : baby')
