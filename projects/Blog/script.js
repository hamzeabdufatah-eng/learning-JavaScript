document.addEventListener("DOMContentLoaded", () => {
  // DOM ELEMENTS
  const postContainer = document.getElementById("postsContainer");
  const form = document.getElementById("blogForm");
  const newPostBtn = document.getElementById("newPostBtn");
  const blogModal = document.getElementById("blogModal");
  const viewModal = document.getElementById("viewModal");
  const cancelBtn = document.getElementById("cancelBtn");
  const image = document.getElementById("image");
  const imagePreview = document.getElementById("imagePreview");

  const closeViewBtn = document.getElementById("closeViewBtn");
  const closeBtn = document.querySelectorAll(".close-btn");
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  let aditId = null;
  image.addEventListener("input", () => {
    imagePreview.src = image.value;
  });
  //   EVENT LISTENNER
  newPostBtn.addEventListener("click", createModal);
  function createModal() {
    form.reset();
    aditId = null;
    title.innerHTML = "";

    blogModal.classList.add("active");
  }
  cancelBtn.addEventListener("click", closeModal);
  function closeModal() {
    form.reset();
    aditId = null;
    blogModal.classList.remove("active");
  }
  closeBtn.forEach((button) => {
    button.addEventListener("click", closeModal);
  });
  form.addEventListener("submit", handleBtnSubmit);
  function handleBtnSubmit(e) {
    // e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const imageValue = image.value;

    // const imagePreview = document.getElementById("imagePreview");
    // image.addEventListener("input", () => {
    //   imagePreview.src = image.inputMode.value;

    const postId = document.getElementById("postId").value;
    console.log("image Vlue", imageValue);

    console.log("image type", typeof imageValue);
    if (aditId !== null) {
      const postEdit = posts.find((post) => String(post.id) === String(aditId));
      postEdit.title = title;
      postEdit.description = description;
      postEdit.image = image;
      postEdit.postId = postId;
      aditId = null;
    } else {
      const newPosts = {
        id: Date.now().toString(),
        title,
        description,
        image: imageValue,
        postId,
      };
      posts.unshift(newPosts);
    }
    postsToLocal();
    displayPosts();
    reset();
  }
  const postsToLocal = () => {
    localStorage.setItem("posts", JSON.stringify(posts));
  };
  displayPosts();
  function displayPosts() {
    postContainer.innerHTML = "";
    if (posts.length === 0) {
      postContainer.innerHTML = `<div class="empty-state">No Post Available</div>`;
      return;
    }
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.className = "post-card";
      postElement.innerHTML = `
    ${
      post.image
        ? `<img src="${post.image}" class="post-img" 
    alt="${post.title}">`
        : ""
    }
    <div class="post-content">
    <h3>${post.title}</h3>
    <p>${post.description}</p>
    <div class="post-content">
    <button class="btn btn-outline view-btn" data-id="${post.id}">View</button>
    <button class="btn btn-outline edit-btn" data-id="${post.id}">Edit</button>
    <button class="btn btn-danger delete-btn" data-id="${post.id}">Delete</button>
    </div>
    </div>
    `;
      postContainer.appendChild(postElement);
    });
    document.querySelectorAll(".view-btn").forEach((btn) => {
      btn.addEventListener("click", viewPost);
    });
    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.id);
        deleteBtn(id);
      });
    });
    document.querySelectorAll(".edit-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.id);
        editBtn(id);
      });
    });
  }
  function reset() {
    form.reset();
  }
  function viewPost(e) {
    const postId = e.target.getAttribute(`data-id`);
    const post = posts.find((p) => p.id === postId);
    if (post) {
      document.getElementById("viewModalTitle").textContent = post.title;
      const modalBoday = document.getElementById("viewModalBody");
      modalBoday.innerHTML = `${post.image ? `<img src="${post.image}"class="post-image" alt="${post.title}>` : ""}
     <p>${post.description}</p>
      `;
    }
    viewModal.classList.add("active");
  }
  closeViewBtn.addEventListener("click", closeiewBtn);

  function closeiewBtn() {
    viewModal.classList.remove("active");
  }
  function deleteBtn(id) {
    posts = posts.filter((post) => String(post.id) !== String(id));
    postsToLocal();
    displayPosts();
  }
  function editBtn(id) {
    const postEdit = posts.find((post) => String(post.id) === String(id));
    if (postEdit) {
      blogModal.classList.add("active");
      aditId = id;
      title.value = postEdit.title;
      description.value = postEdit.description;
      imageValue.value = postEdit.image;
      postId.value = postEdit.postId;
    }
  }
});
