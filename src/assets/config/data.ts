const sponsors$ = [
  {
    name: 'Krys',
    img: 'assets/images/sponsors/Image-1.png'
  },
  {
    name: 'Yukadi',
    img: 'assets/images/sponsors/Image-2.png'
  },
  {
    name: 'Essential trainer',
    img: 'assets/images/sponsors/Image.png'
  },
  {
    name: 'Krys',
    img: 'assets/images/sponsors/Image-1.png'
  },
  {
    name: 'Yukadi',
    img: 'assets/images/sponsors/Image-2.png'
  },
  {
    name: 'Essential trainer',
    img: 'assets/images/sponsors/Image.png'
  }
]

const  actualites$ = [
  {
    id: 1,
    title: "Une panoplie de services !",
    description: 'ipsum dolor sit amet consectetur. Risus duis vel eget metus turpi ipsum dolor sit amet consectetur. Risus duis vel eget metus turpi',
    img: {
      url: 'assets/images/home/profile.png',

      alt: ''
    }
  },
  {
    id: 2,
    title: "Une panoplie de services !",
    description: 'ipsum dolor sit amet consectetur. Risus duis vel eget metus turpi ipsum dolor sit amet consectetur. Risus duis vel eget metus turpi',
    img: {
      url: 'assets/images/home/profile.png',

      alt: ''
    }
  },
  {
    id: 3,
    title: "Une panoplie de services !",
    description: 'ipsum dolor sit amet consectetur. Risus duis vel eget metus turpi ipsum dolor sit amet consectetur. Risus duis vel eget metus turpi',
    img: {
      url: 'assets/images/home/profile.png',

      alt: ''
    }
  }
]

const associations$ = [
  {
    name: 'Anne Charlotte',
    img: 'assets/images/associations/img.png'
  },
  {
    name: 'restau du coeur',
    img: 'assets/images/associations/img.png'
  },
  {
    name: 'Eglise cool',
    img: 'assets/images/associations/img.png'
  },
  {
    name: 'Croix rouge',
    img: 'assets/images/associations/img.png'
  },
  {
    name: 'restau du coeur',
    img: 'assets/images/associations/img.png'
  },
  {
    name: 'Eglise cool',
    img: 'assets/images/associations/img.png'
  },
]

const articles$ = [
  {
    categories: ['A Propos'],
    title: 'Josué Famille',
    content: ['Lorem ipsum dolor sit amet consectetur. Risus duis vel eget metus turpis ac placerat ac. Risus aenean hendrerit sem quam. Eu non nulla nullam nibh viverra fringilla duis.', 'Lorem ipsum dolor sit amet consectetur. In massa bibendum aliquam faucibus libero et mauris pellentesque. Neque commodo ut elit dolor. Dictum quam dolor sed volutpat. Nisi netus risus id sed. Ultricies phasellus sit eget platea aliquet. At tristique.'],
    img: {
      url: 'assets/images/home/profile.png',
      alt: 'Photo de josué',
    },
    button: {
      title: 'A propos de moi',
      action: () => {
        console.log('button a propos')
      }
    }
  },
  {
    categories: ['Dernière expédition'],
    title: 'Tour de Bretagne',
    content: ['Lorem ipsum dolor sit amet consectetur. Risus duis vel eget metus turpis ac placerat ac. Risus aenean hendrerit sem quam. Eu non nulla nullam nibh viverra fringilla duis.', 'Lorem ipsum dolor sit amet consectetur. In massa bibendum aliquam faucibus libero et mauris pellentesque. Neque commodo ut elit dolor. Dictum quam dolor sed volutpat. Nisi netus risus id sed. Ultricies phasellus sit eget platea aliquet. At tristique.'],
    img: {
      url: 'assets/images/home/last-travel.png',
      alt: 'Photo de la Bretagne',
    },
    button: {
      title: 'La Bretagne...',
      action: () => {
        console.log('button Tour de bretagne')
      }
    }
  }
]

const articles_about$ = [
  {
    categories: ['A Propos'],
    title: 'Josué Famille',
    content: ['Lorem ipsum dolor sit amet consectetur. Risus duis vel eget metus turpis ac placerat ac. Risus aenean hendrerit sem quam. Eu non nulla nullam nibh viverra fringilla duis.', 'Lorem ipsum dolor sit amet consectetur. In massa bibendum aliquam faucibus libero et mauris pellentesque. Neque commodo ut elit dolor. Dictum quam dolor sed volutpat. Nisi netus risus id sed. Ultricies phasellus sit eget platea aliquet. At tristique.'],
    img: {
      url: 'assets/images/home/profile.png',
      alt: 'Photo de josué',
    },
    button: {
      title: 'A propos de moi',
      action: () => {
        console.log('button a propos')
      }
    }
  }]

const  texts_about$ = [
  {
  title: "Autumn Is a Second Spring",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at, dolorem excepturi fugiat fugit, id illo laborum, laudantium modi odio repudiandae sapiente sequi. Adipisci culpa eaque, inventore laboriosam maiores quae"
},{
  title: "Autumn Is a Second Spring",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at, dolorem excepturi fugiat fugit, id illo laborum, laudantium modi odio repudiandae sapiente sequi. Adipisci culpa eaque, inventore laboriosam maiores quae"
},{
  title: "Autumn Is a Second Spring",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at, dolorem excepturi fugiat fugit, id illo laborum, laudantium modi odio repudiandae sapiente sequi. Adipisci culpa eaque, inventore laboriosam maiores quae"
},{
  title: "Autumn Is a Second Spring",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at, dolorem excepturi fugiat fugit, id illo laborum, laudantium modi odio repudiandae sapiente sequi. Adipisci culpa eaque, inventore laboriosam maiores quae"
}]

const about$ = {
  articles_about$,
  texts_about$
}

export {
  sponsors$,
  actualites$,
  associations$,
  articles$,
  about$
}
