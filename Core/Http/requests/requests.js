export async function getRequest(url, headers) {
    const response = await fetch(url, {
        method: 'GET',
        headers: headers,
    })

    const data = await response.json()
    return data
}

export async function postRequest(url, body, headers) {
    const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body,
    })

    const data = await response.json()
    return data
}

export async function putRequest(url, body, headers) {
    const response = await fetch(url, {
        method: "PUT",
        headers: headers,
        body: body,
    })

    const data = await response.json()
    return data
}

