export function createDialog(type, innerHTML){
    let dialog_element = document.createElement('dialog');
    dialog_element.setAttribute('id', `${type}_dialog`);
    dialog_element.innerHTML = innerHTML;
    // switch(type){
    //     case 'alert':
    //         dialog_element.innerHTML = `
    //             <p>Alert Pressed!</p>
    //             <button id="alert_ok_button">OK</button>
    //         `;
    //         break;
    //     case 'confirm':
    //         dialog_element.innerHTML = `
    //             <p>Do you confirm this?</p>
    //             <button id="confirm_cancel_button">Cancel</button>
    //             <button id="confirm_ok_button">OK</button>
    //         `;
    //         break;
    //     case 'prompt':
    //         dialog_element.innerHTML = `
    //             <p>What is your name?</p>
    //             <input type="text" name="name_input" id="name_input"/>
    //             <button id="prompt_cancel_button">Cancel</button>
    //             <button id="prompt_ok_button">OK</button>
    //         `;
    //         break;
    // }
    document.body.appendChild(dialog_element);
}
export function showDialog(dialog){
    // dialog.open = true;
    dialog.show();
    return;
    
}
export function closeDialog(dialog){
    console.log('in close');
    // let input_text = document.getElementById("name_input");
    // if(input_text != null){
    //     input_text.value = "";
    // }
    dialog.close();
    return;
}
export function handleDialog(type){
    console.log("in handle");
    switch(type){
        case "alert":
            let alert_dialog = document.getElementById("alert_dialog");
            let alert_ok_button = document.getElementById("alert_ok_button");
            alert_ok_button.addEventListener('click', () => {
                closeDialog(alert_dialog);
                return;
            });
            break;
        case "confirm":
        case "prompt":
            let output = document.getElementById("output");
            let dialog = document.getElementById(`${type}_dialog`);
            let ok_button = document.getElementById(`${type}_ok_button`);
            let cancel_button = document.getElementById(`${type}_cancel_button`);
            ok_button.addEventListener('click', () => {
                // let text = `User didn't enter anything`;
                let text;
                if(type === "confirm") {
                    text = `true`;
                }
                else {
                    let input_text;
                    let input_text_elem = document.getElementById("name_input");
                    console.log(input_text_elem.value);
                    input_text = DOMPurify.sanitize(input_text_elem.value);
                    console.log(input_text);
                    if(input_text != ""){
                        text = input_text;
                    }
                    else{
                        text = `User didn't enter anything`;
                    }
                    console.log(text);
                }
                output.innerHTML = `${type} result: ${text}`;
                console.log(output.textContent);
                closeDialog(dialog);
                return;
            });
            cancel_button.addEventListener('click', () => {
                let text = `User didn't enter anything`;
                if(type === "confirm") {
                    text = `false`;
                }
                output.textContent = `${type} result: ${text}`;
                closeDialog(dialog);
                return;
            });
            break;
    }
}
