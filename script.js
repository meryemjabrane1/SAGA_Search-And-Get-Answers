const postsList = document.querySelector(".posts-list");
const addPostForm = document.querySelector(".add-post-form");
let output = "";

const renderPosts = (posts) => {
  output = ""; // Clear the output variable
  posts.forEach((post) => {
    output += `
          <div class="col-md-6 my-3 d-flex justify-content-center">
            <div class="card bg-light" style="width: 900px;">
              <div class="card-body" data-id=${post._id}>
                <h5 class="card-title" style="color: green;">${post.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${new Date(post.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}</h6>
                <p class="card-text">${post.body}</p>
              </div>
            </div>
          </div>
          `;
  });
  postsList.innerHTML = output;
};

const url = "http://localhost:5000/api/posts";

//Get: Read the posts
//Method GET
fetch(url)
  .then((res) => res.json())
  .then((data) => renderPosts(data));

const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
  const searchInput = document.getElementById("search-input").value;
  searchPosts(searchInput);
});

const searchPosts = (query) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const filteredPosts = data.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.body.toLowerCase().includes(query.toLowerCase())
      );
      renderPosts(filteredPosts);
    });
};

const resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener("click", () => {
  renderAllPosts();
});

const renderAllPosts = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      renderPosts(data);
    });
};

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
