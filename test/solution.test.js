// Write your tests here!
const findStudentScoreByName = require("../src/solution");
const expect = require("chai").expect;

describe("findStudentScore", () => {
    const students = [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },
      ];
    it("should return a student score if the name matches", () => {
        const expected = 7.4;
        const student = "Morgan Sutton";
        const actual = findStudentScoreByName(students, student);

        expect(actual).to.equal(expected);
    })

    it("should not return a student score if the name does not match", ()=> {
        const expected = null;
        const student = "Anne";
        const actual = findStudentScoreByName(students, student);

        expect(actual).to.equal(expected);
    })
})