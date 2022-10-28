import {LODRsdk} from '../src/main'
import { allBooks } from '../src/services/books';


describe("sdk tests", () => {
    it("should get array with 3 book names", async () => {
        const books = await allBooks()
        expect(books).toContain('The Two Towers')
    });
});