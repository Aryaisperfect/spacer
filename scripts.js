 document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const blogPosts = document.getElementById('blog-posts');

    // Load posts from local storage when the page loads
    loadPosts();

    postForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (title && content) {
            addPost(title, content);
            postForm.reset();
        }
    });

    // Function to add a new post
    function addPost(title, content) {
        const post = {
            id: Date.now(),
            title,
            content
        };

        const posts = getPosts();
        posts.push(post);
        savePosts(posts);
        renderPosts(posts);
    }

    // Function to delete a post
    function deletePost(id) {
        const posts = getPosts().filter(post => post.id !== id);
        savePosts(posts);
        renderPosts(posts);
    }

    // Function to get posts from local storage
    function getPosts() {
        return JSON.parse(localStorage.getItem('posts')) || [];
    }

    // Function to save posts to local storage
    function savePosts(posts) {
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    // Function to render posts
    function renderPosts(posts) {
        blogPosts.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';

            const postTitle = document.createElement('h2');
            postTitle.textContent = post.title;
            postElement.appendChild(postTitle);

            const postContent = document.createElement('p');
            postContent.textContent = post.content;
            postElement.appendChild(postContent);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-button';
            deleteButton.onclick = () => deletePost(post.id);
            postElement.appendChild(deleteButton);

            blogPosts.appendChild(postElement);
        });
    }

    // Function to load posts when the page loads
    function loadPosts() {
        const posts = getPosts();
        renderPosts(posts);
    }
});