import request from 'supertest';
import { expect } from 'chai';
import app from '../app';

describe('Default test Cohort Application', () => {
  describe('Default test', () => {
    describe('Get /', () => {
      it('should return "Welcome to Cohort API services..."', (done) => {
        request(app)
          .get('/')
          .expect(200)
          .end((error, response) => {
            if (error) throw error;
            expect(response.body).to.have.property('message');
            expect(response.status).to.equal(200);
            expect(response.body.message).to.equal('Welcome to Cohort API services...');
            done();
          });
      });// ends it
    });// Get / describe
  });// default test describe
});// Main describe
