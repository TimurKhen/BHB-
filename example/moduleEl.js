import {HttpClient} from '../HttpClient/HttpClient.js'
import {inject} from '../Core/Injecter/injecter.js'

let client = inject(HttpClient)

client.getAllData().then((data) => {
    document.querySelector('#preTest').textContent = String(data)
})