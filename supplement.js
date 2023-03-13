export function showAddEditDialog(){
    let dialog_element = document.getElementById("add_post_dialog");
    dialog_element.show();
}
export function closeAddEditDialog(){
    let dialog_element = document.getElementById("add_post_dialog");
    dialog_element.close();
}
// export function handleAddDialog(){
//     let cancel_button = document.getElementById("dialog_cancel_button");
//     let add_button = document.getElementById("dialog_submit_button");
//     let input_title_value = document.getElementById("dialog_post_title");
//     let input_desription_value = document.getElementById("dialog_post_description");
//     cancel_button.addEventListener('click', (event) => {
//         input_title_value.value = "";
//         input_desription_value = "";
//         closeAddEditDialog();
//         // window.location.reload();
//         return;
//     });
//     add_button.addEventListener('click', (event) => {
//         addPostToLocalStorage(input_title_value.value, input_desription_value.value, new Date().toLocaleDateString("en-US"));
//         input_title_value.value = "";
//         input_desription_value = "";
//         closeAddEditDialog();
//         let posts_section = document.getElementById("posts");
//         posts_section.innerHTML = '';
//         init();
//         // window.location.reload();
//         return;
//     });
// }
// export function getPostsFromStorage(){
//     let posts = JSON.parse(localStorage.getItem("posts")) || [];
//     return posts;
// }
// export function addPostToLocalStorage(post_title, post_description, post_date){
//     let posts_list = getPostsFromStorage();
//     posts_list.push({
//         title: post_title,
//         description: post_description,
//         date: post_date
//     });
//     localStorage.setItem("posts", JSON.stringify(posts_list));
//     return;
// }
// export function initAddPosts(post_list){
//     let post_area = document.getElementById("posts");
//     let index = 1;
//     post_list.forEach((post) => {
//         let post_element = document.createElement("div");
//         post_element.setAttribute("id", `post_${index}`);
//         post_element.innerHTML = `
//             <h3 id="post_title">Post Title: ${post.title}</h3>
//             <h4 id="post_date">Date: ${post.date}</h4>
//             <p>Post Description:</p>
//             <p id="post_description">${post.description}</p>
//             <script>import {editPost, deletePost} from "./blog.js"</script>
//             <button id="edit_button" onclick="editPost(this)">Edit</button>
//             <button id="delete_button" onclick="deletePost(this)">Delete</button>
//             <hr>
//         `;
//         index += 1;
//         post_area.appendChild(post_element);
//     });
//     return;
// }
export function showDeleteDialog(){
    let delete_dialog = document.getElementById("delete_post_dialog");
    delete_dialog.show();
}
export function closeDeleteDialog(){
    let delete_dialog = document.getElementById("delete_post_dialog");
    delete_dialog.close();
}
// export function handleEditDialog(post_list, post_index, post){
//     console.log(post);
//     let cancel_button = document.getElementById("dialog_cancel_button");
//     let add_button = document.getElementById("dialog_submit_button");
//     let input_title_value = document.getElementById("dialog_post_title");
//     let input_desription_value = document.getElementById("dialog_post_description");
//     input_title_value.value = post.title;
//     input_desription_value.value = post.description;
//     let new_date = new Date().toLocaleDateString("en-US");
//     cancel_button.addEventListener('click', (event) => {
//         // window.location.reload();
//         input_title_value.value = "";
//         input_desription_value.value = "";
//         closeAddEditDialog();
//         return;
//     });
//     add_button.addEventListener('click', (event) => {
//         post_list[post_index] = {
//             title: input_title_value.value,
//             description: input_desription_value.value,
//             date: new_date
//         };
//         localStorage.setItem("posts", JSON.stringify(post_list));
//         input_title_value.value = "";
//         input_desription_value.value = "";
//         closeAddEditDialog();
//         let posts_section = document.getElementById("posts");
//         posts_section.innerHTML = '';
//         init();
//         // window.location.reload();
//         return;
//     });
// }