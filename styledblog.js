export function init(){
    let posts = getPostsFromStorage();
    initAddPosts(posts);
    let add_post_button = document.getElementById("add_post_btn");
    add_post_button.addEventListener('click', (event) => {
        showAddEditDialog();
        handleAddDialog();
    });
}
function showAddEditDialog(){
    let dialog_element = document.getElementById("add_post_dialog");
    dialog_element.setAttribute('style', `display: flex; flex-direction: column; gap: 5px;`);
    // dialog_element.style = `"display: flex; flex-direction: column; gap: 5px;"`;
    dialog_element.open = true;
}
function closeAddEditDialog(){
    let dialog_element = document.getElementById("add_post_dialog");
    // dialog_element.style = ``;
    dialog_element.setAttribute('style', ``)
    dialog_element.open = false;
}
function handleAddDialog(){
    let cancel_button = document.getElementById("dialog_cancel_button");
    let add_button = document.getElementById("dialog_submit_button");
    let input_title_value = document.getElementById("dialog_post_title");
    let input_desription_value = document.getElementById("dialog_post_description");
    cancel_button.addEventListener('click', (event) => {
        closeAddEditDialog();
        window.location.reload();
        return;
    });
    add_button.addEventListener('click', (event) => {
        addPostToLocalStorage(input_title_value.value, input_desription_value.value, new Date().toLocaleDateString("en-US"));
        closeAddEditDialog();
        window.location.reload();
        return;
    });
}
function getPostsFromStorage(){
    let posts = JSON.parse(localStorage.getItem("styled_posts")) || [];
    return posts;
}
function addPostToLocalStorage(post_title, post_description, post_date){
    let posts_list = getPostsFromStorage();
    posts_list.push({
        title: post_title,
        description: post_description,
        date: post_date
    });
    localStorage.setItem("styled_posts", JSON.stringify(posts_list));
    return;
}
function initAddPosts(post_list){
    let post_area = document.getElementById("posts");
    let index = 1;
    post_list.forEach((post) => {
        let post_element = document.createElement("div");
        post_element.setAttribute("id", `post_${index}`);
        post_element.innerHTML = `
            <h3 id="post_title_${index}">Post Title: ${post.title}</h3>
            <h4 id="post_date_${index}">Date: ${post.date}</h4>
            <p>Post Description:</p>
            <p id="post_description_${index}">${post.description}</p>
            <button id="edit_button" onclick="editPost(this)">Edit</button>
            <button id="delete_button" onclick="deletePost(this)">Delete</button>
            <hr>
        `;
        index += 1;
        post_area.appendChild(post_element);
    });
    return;
}
function showDeleteDialog(){
    let delete_dialog = document.getElementById("delete_post_dialog");
    delete_dialog.open = true;
}
function closeDeleteDialog(){
    let delete_dialog = document.getElementById("delete_post_dialog");
    delete_dialog.open = false;
}
export function deletePost(delete_button_element){
    showDeleteDialog();
    let delete_button = document.getElementById("dialog_delete_button");
    let cancel_button = document.getElementById("dialog_cancel_delete_button");
    delete_button.addEventListener('click', (event) => {
        let post_list = getPostsFromStorage();
        let parent_id = delete_button_element.parentNode.id;
        let post_index = parseInt(parent_id.split("_")[1])-1;
        post_list.splice(post_index, 1);
        localStorage.setItem("styled_posts", JSON.stringify(post_list));
        closeDeleteDialog();
        window.location.reload();
        return;
    });
    cancel_button.addEventListener('click', (event) => {
        closeDeleteDialog();
        return;
    });
    
}
function handleEditDialog(post_list, post_index, post){
    let cancel_button = document.getElementById("dialog_cancel_button");
    let add_button = document.getElementById("dialog_submit_button");
    let input_title_value = document.getElementById("dialog_post_title");
    let input_desription_value = document.getElementById("dialog_post_description");
    input_title_value.value = post.title;
    input_desription_value.value = post.description;
    let new_date = new Date().toLocaleDateString("en-US");
    cancel_button.addEventListener('click', (event) => {
        window.location.reload();
        closeAddEditDialog();
        return;
    });
    add_button.addEventListener('click', (event) => {
        post_list[post_index] = {
            title: input_title_value.value,
            description: input_desription_value.value,
            date: new_date
        };
        localStorage.setItem("styled_posts", JSON.stringify(post_list));
        closeAddEditDialog();
        window.location.reload();
        return;
    });
}
export function editPost(edit_button_element){
    let post_list = getPostsFromStorage();
    let parent = edit_button_element.parentNode;
    let parent_id = parent.id;
    let post_index = parseInt(parent_id.split("_")[1])-1;
    let post = post_list[post_index];
    showAddEditDialog();
    handleEditDialog(post_list, post_index, post);
    return;
}