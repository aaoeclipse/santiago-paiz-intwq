const {getRootNode, Node} = require("../interview");


describe("interview questions", () => {
    test("it should return the root node", () => {
        const result = new Node(1,[new Node(5, [new Node(4, []), new Node(3, []), new Node(2, [])])]);
        expect(getRootNode([[4,5],[5,3],[1,5],[2,5]])).toEqual(result);
    });

    test("it should return the root node", () => {
        const result = new Node(1,[new Node(5, [new Node(4, []), new Node(3, [])]), new Node(2, [])]);
        expect(getRootNode([[4,5],[5,3],[1,5],[2,1]])).toEqual(result);
    });
  });