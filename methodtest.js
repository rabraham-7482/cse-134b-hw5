export function post(output, json_stringify){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState === XMLHttpRequest.DONE){
            if(this.status === 200){
                output.innerText = `Post sucessful: \n ${this.responseText}`;
            } else {
                output.innerText = `Error: ${this.statusText}`;
            }
        }
    }
    xhr.open("POST", "https://httpbin.org/post");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json_stringify);
}
export function get(output, id){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState === XMLHttpRequest.DONE){
            if(this.status === 200){
                output.innerText =  `Get sucessful: \n ${this.responseText}`;
            } else {
                output.innerText = `Error: ${this.statusText}`;
            }
        }
    }
    xhr.open("GET", `https://httpbin.org/get?id=${id}`);
    xhr.send();
}
export function put(output, json_stringify){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState === XMLHttpRequest.DONE){
            if(this.status === 200){
                output.innerText = `Put sucessful: \n ${this.responseText}`;
            } else {
                output.innerText = `Error: ${this.statusText}`;
            }
        }
    }
    xhr.open("PUT", "https://httpbin.org/put");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json_stringify);
}
export function delete_req(output, id){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState === XMLHttpRequest.DONE){
            if(this.status === 200){
                output.innerText =  `Delete sucessful: \n ${this.responseText}`;
            } else {
                output.innerText = `Error: ${this.statusText}`;
            }
        }
    }
    xhr.open("DELETE", `https://httpbin.org/delete?id=${id}`);
    xhr.send();
}