// for index.html

//fetch posts to render to html

// grab container
const container = document.querySelector('.blogs');



//add event listener

const renderPosts = async () => {
    let uri = 'http://localhost:3000/posts';

    const res = await fetch(uri)
    const posts = await res.json();
    
    let template = '';
    posts.forEach(post => {
        template += `
        <div class="post">
        <h2>
        ${post.title}
        </h2>
        <p><small>${post.likes}</small></p>
        <p>${post.body.slice(0, 200)}</p>
        <a href="/details.html">Read more...</a>
        </div>
        `
    });
   container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', (e) => renderPosts());