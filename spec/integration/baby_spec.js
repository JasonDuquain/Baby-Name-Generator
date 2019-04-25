const request = require('request');
const server = require('../../src/server');
const base = 'http://localhost:3000';
const uinames = 'https://uinames.com/api/';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 9000;

beforeAll(function(done) {
  window.addEventListener
});

describe('routes : baby', () => {

    describe('GET /baby', () => {

        it('should return status code 200', (done) => {
            request(`${base}`, (error, response) => {
                console.log(response.body)
                expect(response.statusCode).toBe(200);
                expect(response.body).toContain('Baby Name Generator');
                expect(error).toBeNull();
                done();
            });
        }); // it("should return status code 200")

    }); // describe('GET /baby')
    
    describe('POST /baby?gender=female&region=england&amount=5', () => {

        it('should return baby name(s) based on default search criteria', (done) => {
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
        }); // it('should return baby name(s) based on default search criteria')

    }); // describe('POST /baby?gender=female&region=england&amount=5') 
    
    describe('GET /baby', () => {

        it('should dynamically return the region names', (done) => {
            request(base, (error, response) => {
                expect(response.body).toContain('Albania');
                expect(response.body).toContain('Vietnam');
                expect(error).toBeNull();
                done();
            });
        }); // it('should dynamically return the region names')
        
    }); // describe('GET /baby')
    
    describe('GET /baby?gender=female&region=england&amount=5&ext', () => {

        it('should return an email address if user chooses the option to return an email address', (done) => {
            request({
                method: 'POST',
                url: `${base}/baby`,
                form: {
                    gender: 'female',
                    region: 'england',
                    amount: 5,
                    ext: 'yes'
                }
            }, (error, response) => {
                expect(response.body).toContain('@');
                expect(error).toBeNull();
                done();
            });
        }); // it('should return an email address if user chooses the option to return an email address')
        
    }); // describe('GET /baby?gender=female&region=england&amount=5&ext')
    
    describe('GET /baby', () => {

        // The button with the text 'Find Names' is the last element to animate in
        it('should have the text "Find names"', (done) => {
            request(base, (error, response) => {
                expect(response.body).toContain('Find Names');
                expect(error).toBeNull();
                done();
            });
        }); // it('should have the text "find names"')
        
    }); // describe('GET /baby')


}); // describe('routes : baby')
