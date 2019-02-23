const assert   = require('assert');
const expect   = require('chai').expect;
const got      = require('got');

describe('checkbox.io', () => {
  describe('/api/design/survey', () => {
    it('should properly create survey question', async () => {
      const response = await got.post('http://localhost:3001/api/design/survey', {
        body: {
	"markdown": "{NumberQuestions:true}\n-----------\n### Multiple Choice Question (Check all that apply)\nA *description* for question.\nQuestions are created with headers (level 3) `### Multiple Choice Question (Check all that apply)`.\n* Choice A\n* Choice B\n* Choice C"
},
        json: true,
        timeout: 500
      });

      expect(response.body.preview).to.include('Multiple Choice Question');
    });
  });
});
