const fs = require("node:fs")

let file_data =
    `
        import {inject} from '../Core/Injecter/injecter.js'
        import {http} from '../Core/Http/http.js'
        
        export class HttpClient {
            http = inject(http)
        
            masterUrl = 'https://jsonplaceholder.typicode.com/users'
        
            getAllData() {
                return this.http.get(\`${this.masterUrl}\`, {})
            }
        }
    `

function generate() {
    fs.appendFile('HttpClient.js', file_data, (err) => {
        if (err) throw err
        console.log('✅ File "HttpClient.js" has been created')
    })
}

generate()