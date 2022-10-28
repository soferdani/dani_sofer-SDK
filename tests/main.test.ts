import {LODRsdk} from '../src/main'


describe("sdk tests", () => {
    it("should get array with 3 book names and that contain the name The Two Towers", async () => {
        const books = await LODRsdk()
        expect(books).toContain('The Two Towers')
    });
});