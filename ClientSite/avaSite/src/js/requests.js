
// this function can handle all requests, they just have to be parsed correctly in the component
export function getRequest(url,mode) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                if (mode === "xml") {
                    let messages = xhr.responseXML;
                    resolve(messages);
                }
                else if (mode === "json") {
                    let films = JSON.parse(xhr.responseText);
                    resolve(films);
                }
                else if (mode === "html") {
                    let html = xhr.responseText;
                    resolve(html);
                }
                else {
                    reject(new Error("Invalid mode"));
                }
            } else {
                reject(new Error(`Request failed with status ${xhr.status}`));
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network error"));
        };

        xhr.open("GET", url, true);
        xhr.send();
    });
}