import axios from 'axios'
import {API_URL} from './utils'

export async function allBooks() {
    const booksData = await axios.get(API_URL + '/book')
    if (booksData.status !== 200) {
        return 'unable to bring books information'
    }
    const bookNames = booksData.data.docs.map((book: { name: string }) => book.name)    
    return bookNames
}

