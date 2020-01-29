export default function buildUrl(url, parameters){
    let queryString = '';
  
    for(const key in parameters) {
      const value = parameters[key];
      queryString += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
    }
    
    return queryString.length > 0 ? url + "?" + queryString.substring(0, queryString.length - 1) : url;
  }