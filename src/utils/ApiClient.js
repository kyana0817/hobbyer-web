import storage from "./storage";

class ApiClient {
  constructor(entryPoint) {
    this.entryPoint = entryPoint;
  }

  async get (path, params={}) {
    const request = {
      method: 'GET'
    };

    return await this._fetch(path, this.createRequest(request));
  }

  async post (path, payload={}, params={}) {
    const request = {
      method: 'POST',
      body: JSON.stringify(payload)
    };
    
    return await this._fetch(path, this.createRequest(request));
  }

  async put (path, payload={}, params={}) {
    const request = {
      method: 'PUT',
      body: JSON.stringify(payload)
    };
    
    return await this._fetch(path, this.createRequest(request));
  }

  async delete (path, params={}) {
    const request = {
      method: 'DELETE'
    };
    
    return await this._fetch(path, this.createRequest(request));
  }

  createRequest (request, headers={}) {
    const token = storage.getToken();

    return {
      ...request,
      headers: {
        ...(token && {Authorization: `Bearer ${token}`}),
        'Content-Type': 'application/json',
        ...headers
      }
    }
  }

  async _fetch (path, request) {
    try {
      const response = await fetch(`${this.entryPoint}/${path}`, request);
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default new ApiClient(
  process.env.REACT_APP_API_ENTRYPOINT,
)
