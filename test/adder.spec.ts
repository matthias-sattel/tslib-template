// test/adder.spec.ts

import { sum } from "../src/adder";

describe("sum", () => {
    it("add two numbers", () => {
        expect(sum(1, 2)).toEqual(3);
    });
});