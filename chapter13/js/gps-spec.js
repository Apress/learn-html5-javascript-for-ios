describe('getCurrentPosition()', function() {
    it('test for invalid coordinates', function() {
        expect(validateGPS(0, 0)).toBeFalsy();
        expect(validateGPS(39, 83)).toBeFalsy();
        expect(validateGPS(39, -99)).toBeFalsy();
        expect(validateGPS(-100, 100)).toBeFalsy();
    });

    it('returns a set of VALID coordinates', function() {
        expect(validateGPS(39, -83)).toBeTruthy();
    });
});
