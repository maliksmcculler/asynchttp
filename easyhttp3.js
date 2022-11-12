/** 
 * EasyHTTP Library 
 * Library for making HTTP requests
 * 
 * @version 3.0.0
 * @author Malik McCuller
 * @license MIT 
 * 
**/

class EasyHTTP {
  // Make an GET http request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData
  }
  // Make HTTP POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData
  }

  // Make an UPDATE request HTTP
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  // delete post
  async delete(url) {

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
    });
    const resData = await 'Resource Deleted...';
    return resData;
  }
}

