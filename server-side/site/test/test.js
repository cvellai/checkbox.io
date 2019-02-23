const assert   = require('assert');
const expect   = require('chai').expect;
const got      = require('got');

describe('checkbox.io', () => {
  describe('/api/design/survey', () => {
    it('should return expected output', async () => {
      const response = await got.post('http://localhost:3001/api/design/survey', {

      });

    });
  });
});
