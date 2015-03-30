var  expect = weknowhow.expect;

describe('just checking', function () {
    var app = new App();
    it('should equal message', function () {
        expect(app.getWelcomeMessage(), 'to equal', 'karma unexpected library adapter');
    });

    it('should return string', function () {
        expect(app.getWelcomeMessage(), 'to be a', 'string');
    });
});