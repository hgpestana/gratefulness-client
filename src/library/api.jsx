function _buildURI(endpoint) {
    const url = 'http://api.gratefulness.guru';
    return `${ url }/${ endpoint }`;
}

function _buildHeaders(oauthToken = null) {
    return {
        'Authorization': `Bearer ${ oauthToken }`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
}

function _buildBody(body = null) {
    if (body !== null) {
        return JSON.stringify(body);
    }
    return null;
}

function _buildContent(headers, body) {
    return {
        mode: 'cors',
        method: 'GET',
        headers: headers,
        body: body
    }
}

export async function getQuote() {
    return fetch(
        _buildURI('quotes'),
        _buildContent(
            _buildHeaders(),
            _buildBody()
        )
    );
}

