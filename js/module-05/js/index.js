'use strict';

function SocialBook(users = [], posts = {}) {
  this.users = users;
  this.posts = posts;
  //user Method
  this.getAllUsers = () => this.users;
  this.getUserByLogin = login =>
    this.users.filter(getUser => getUser.login === login);
  this.getUserStatus = userId =>
    this.users
      .filter(getUserId => getUserId.id === userId)
      .some(userStat => userStat.isActive === true)
      ? 'active'
      : 'inactive';
  this.addUser = function(user) {
    const getId = () =>
      '-' +
      Math.random()
        .toString(36)
        .substr(2, 9);
    const newUserPattern = {
      id: getId(),
      isActive: true,
    };
    this.users.push(Object.assign(newUserPattern, user));
  };
  this.removeUserById = function(userId) {
    this.users.filter(removeById => removeById.id !== userId);
  };
  this.getUsersCount = () => this.users.length;
  //post Method
  this.getUserPosts = userId => this.posts[userId];
  this.addPost = function(userId, post) {
    if (!this.posts.hasOwnProperty(userId)) {
      this.posts[userId] = [];
    }
    const getUserPosts = this.posts[userId];
    const getId = () =>
      '-' +
      Math.random()
        .toString(36)
        .substr(2, 9);
    const postPattern = { id: getId(), likes: 0 };
    getUserPosts.push(Object.assign(postPattern, post));
  };
  this.removePost = function(userId, postId) {
    const getIndexPost = this.posts[userId].map(x => x.id).indexOf(postId);
    this.posts[userId].splice(getIndexPost, 1);
  };
  this.getAllLikes = userId =>
    this.posts[userId].reduce((acc, user) => acc + user.likes, 0);

  this.addPostLike = function(userId, postId) {
    this.posts[userId][
      this.posts[userId].map(post => post.id).indexOf(postId)
    ].likes = this.posts[userId][
      this.posts[userId].map(post => post.id).indexOf(postId)
    ].likes += 1;
  };
  this.getPostsCount = userId => this.posts[userId].length;
}

const initialUsers = [
  {
    id: '-s19a6hqce',
    login: 'mangozedog@mail.com',
    password: 'qwe123zv',
    isActive: true,
  },
  {
    id: '-qkpzenjxe',
    login: 'polysweet@skynet.ze',
    password: '123zxc78',
    isActive: true,
  },
  {
    id: '-e51cpd4di',
    login: 'ajax2k@change.ua',
    password: 'ert234qw',
    isActive: false,
  },
];

const initialPosts = {
  '-s19a6hqce': [
    {
      id: '-5sgljaskg',
      text: 'post #1',
      likes: 3,
    },
    {
      id: '-199hb6igr',
      text: 'post #2',
      likes: 5,
    },
    {
      id: '-hy0eyw5qo',
      text: 'post #3',
      likes: 13,
    },
  ],
  '-qkpzenjxe': [
    {
      id: '-5tu69g5rf',
      text: 'post #1',
      likes: 8,
    },
    {
      id: '-bje766393',
      text: 'post #2',
      likes: 15,
    },
  ],
  '-e51cpd4di': [
    {
      id: '-9y6nkmlj4',
      text: 'post #1',
      likes: 18,
    },
    {
      id: '-i03pbhy3s',
      text: 'post #2',
      likes: 45,
    },
  ],
};

const social1 = new SocialBook(initialUsers, initialPosts);

console.log(social1.getAllUsers());
console.log(social1.getUserByLogin('polysweet@skynet.ze'));
console.log(social1.getUserStatus('-e51cpd4di'));
console.log(social1.getUserStatus('-qkpzenjxe'));
console.log(social1.addUser({login: 'mazafix@fix.hot', password: 'owKAdoka21'}));
console.log(social1.removeUserById('-qkpzenjxe'));
console.log(social1.getUsersCount('-s19a6hqce'));
console.log(social1.getUserPosts('-e51cpd4di'));
console.log(social1.addPost('-e51cpd4di2', { text: 'post #3' }));
console.log(social1.removePost('-qkpzenjxe', '-5tu69g5rf'));
console.log(social1.getAllLikes('-s19a6hqce'));
console.log(social1.addPostLike('-s19a6hqce', '-199hb6igr'));
console.log(social1.getPostsCount('-s19a6hqce'));
