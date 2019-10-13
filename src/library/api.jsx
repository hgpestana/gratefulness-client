function _buildURI(endpoint) {
    const url = 'https://api.gratefulness.guru';
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

function _buildContent(method, headers, body) {
    return {
        mode: 'cors',
        method: method,
        headers: headers,
        body: body
    }
}

export async function getQuote() {
    return fetch(
        _buildURI('quotes/random/en'),
        _buildContent(
            'GET',
            _buildHeaders(),
            _buildBody()
        )
    );
}

export async function submitQuote(quote, author) {
    let body = {
        "sentence": quote,
        "author": author,
        "language": "en"
    };
    return fetch(
        _buildURI('quotes'),
        _buildContent(
            'POST',
            _buildHeaders(),
            _buildBody(body)
        )
    );
}

