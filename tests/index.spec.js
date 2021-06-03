const { expect, should } = require('chai');
const { getLunarAge } = require('../src/getLunarAge');

describe('The getFullYear function', () => {
    it('should return the correct age', () => {
        const myBirthday = getLunarAge(1995, 02, 15);
        expect(myBirthday).to.equal(`Your lunar age is 27 years old 🌖`);
    });
    it('should return the correct age if born on december 31', () => {
        const myBirthday = getLunarAge(1995, 12, 31);
        expect(myBirthday).to.equal(`Your lunar age is 28 years old 🌖`);
    });
})