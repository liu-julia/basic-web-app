import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });
    test('should return andrewID', () => {
        const query = "andrewid";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "julialiu"
          ));
    });
    test('should return name', () => {
        const query = "what is your name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "julia"
          ));
    });
    test('should add ', () => {
        const query = "What is 43 plus 12";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "55"
        ));
    });
    test('should find max', () => {
        const query = "Which of the following numbers is the largest: 12, 5, 197"
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "197"
        ));
    });
});