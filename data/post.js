import {USERS} from './user';
export const POSTS = [
  {
    imageurl:
      'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/307300846_1701581533544287_8759827409139315155_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Xr0Ai-sxQwoAX_ubQB_&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_na5uyw8Xszp9sw1VpqQjUqYXMorgiMpVgqYeJxhwbRw&oe=632ED0F7',
    user: USERS[5].user,
    like: '99999',
    caption: 'Em là công chúa',
    profile_picture: USERS[5].image,
    comment: [
      {
        user: 'The-Rock',
        comment: 'Super cuteeeee',
      },
      {
        user: 'Taylor',
        comment: 'Beautifull my princess',
      },
    ],
  },

  {
    imageurl:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    user: USERS[1].user,
    like: '7878',
    caption: 'Red Sky',
    profile_picture: USERS[1].image,
    comment: [
      {
        user: 'smith',
        comment: 'sitting here with a cup of coffee',
      },
      {
        user: 'Steve Harvey',
        comment: '.....',
      },
    ],
  },
];


