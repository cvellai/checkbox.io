const assert   = require('assert');
const expect   = require('chai').expect;
const got      = require('got');

describe('checkbox.io', () => {
  describe('/api/design/survey', () => {
    it('should return expected output', async () => {
      const response = await got.post('http://localhost:3001/api/design/survey', {
        body: {
          markdown: '{NumberQuestions:true}\n----------------------\n# Test'
        },
        json: true,
        timeout: 500
      });

      expect(response.body).to.have.property('preview');
      expect(response.body.preview).to.equal('<p><div data-page="0"></p>\n<h1 id="test">Test</h1>\n<p></div></p>\n');
    });
  });
});
