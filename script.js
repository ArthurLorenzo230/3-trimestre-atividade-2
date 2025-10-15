const postsContainer = document.getElementById('posts-container');

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    if (!response.ok) {
      throw new Error('Erro ao buscar posts');
    }
    const posts = await response.json();

    postsContainer.innerHTML = ''; // limpa texto carregando

    posts.forEach(post => {
      const postElement = document.createElement('article');
      postElement.classList.add('post');

      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;

      postsContainer.appendChild(postElement);
    });

  } catch (error) {
    postsContainer.innerHTML = `<p>Erro: ${error.message}</p>`;
  }
}

fetchPosts();
