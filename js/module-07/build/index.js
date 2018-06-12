'use strict';

var posts = [{
  img: "https://placeimg.com/400/150/arch",
  title: "Post title 1",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
  stats: {
    likes: 6,
    dislikes: 2,
    fav: 3
  }
}, {
  img: "https://placeimg.com/400/150/nature",
  title: "Post title 2",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
  stats: {
    likes: 124,
    dislikes: 8,
    fav: 36
  }
}, {
  img: "https://placeimg.com/400/150/arch",
  title: "Post title 3",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
  stats: {
    likes: 800,
    dislikes: 36,
    fav: 147
  }
}];

function createPostCard(value) {
  var root = document.querySelector('#root');

  value.forEach(function (post) {

    var wrap = document.createElement("div");
    wrap.classList.add("post");

    var image = document.createElement("img");
    image.classList.add("post__image");
    image.setAttribute("src", post.img);
    image.setAttribute("alt", "post image");
    wrap.appendChild(image);

    var postTitle = document.createElement("h2");
    postTitle.classList.add("post__title");
    postTitle.textContent = post.title;
    wrap.appendChild(postTitle);

    var postText = document.createElement("p");
    postText.classList.add("post__text");
    postText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus";
    wrap.appendChild(postText);

    var postActions = document.createElement("ul");
    postActions.classList.add("actions", "post__actions");
    wrap.appendChild(postActions);

    var iconStats = [{
      name: "like",
      iconClass: "actions__icon--like",
      count: post.stats.likes
    }, {
      name: "dislike",
      iconClass: "actions__icon--dislike",
      count: post.stats.dislikes
    }, {
      name: "fav",
      iconClass: "actions__icon--fav",
      count: post.stats.fav
    }];

    iconStats.forEach(function (icon) {
      var actionsItem = document.createElement("li");
      actionsItem.classList.add("actions__item");

      var actionsBtn = document.createElement("button");
      actionsBtn.classList.add("actions__btn");
      actionsItem.appendChild(actionsBtn);

      var actionsIcon = document.createElement("span");
      actionsIcon.classList.add("actions__icon", icon.iconClass);
      actionsBtn.appendChild(actionsIcon);

      var actionsCount = document.createElement("span");
      actionsCount.classList.add("actions__count");
      actionsCount.textContent = icon.count;
      actionsBtn.appendChild(actionsCount);

      postActions.appendChild(actionsItem);
    });

    root.appendChild(wrap);
  });
  console.log(root);
}

createPostCard(posts);