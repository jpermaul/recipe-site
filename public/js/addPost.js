const addPost = async (e) => {
    e.preventDefault(); 

    const title = $('#title').val().trim();
    const description = $('#description').val();
   if  (description && title) {
    const response = await fetch(`/api/posts`, {
        method: 'POST', 
        body: JSON.stringify({ title, description}), 
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();

    if (response.ok) {
        alert(data.message)
        document.location.replace('/');
    } else {
        alert(`I'm sorry but I've ran into an issue while attempting to create your post.`);
    }
   }
}

$('#addPost').submit(addPost);