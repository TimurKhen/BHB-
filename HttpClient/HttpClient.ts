import { inject } from '../Core/Injecter/injecter.js'
import { http } from '../Core/Http/http.js'


export class HttpClient {
    http = inject(http)

    masterUrl: string = 'https://jsonplaceholder.typicode.com/users'

    getAllData() {
        return this.http.get(`${this.masterUrl}`, {})
    }
}