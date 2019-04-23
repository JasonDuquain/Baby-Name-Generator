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
                expect(error).toBeNull();
                done();
            });
        }); // it ("should return status code 200")

    }); // describe('GET /baby')
    
    describe('POST /baby?gender=female&region=england&amount=5', () => {

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
                expect(error).toBeNull();
                done();
            });
        }); // it ("should return status code 200")

    }); 
    
    describe('GET /baby', () => {

        it('should dynamically return the region names', (done) => {
            request(base, (error, response) => {
                expect(response.body).toContain('Azerbaijan');
                expect(response.body).toContain('Vietnam');
                expect(error).toBeNull();
                done();
            });
        }); // it('should dynamically return the region names')
        
    }); // describe('GET /baby')
    
    
    
    

}); // describe('routes : baby')