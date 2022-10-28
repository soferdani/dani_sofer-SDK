import { allBooks } from "./services/books";


export async function LODRsdk() {
    return await allBooks() 
}
