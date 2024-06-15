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
    title: "Interviews",
    description: 'Lorem ipsum dolor sit amet consectetur. Molestie diam at odio tincidunt lorem. Eu odio platea aenean.',
    img: {
      url: 'assets/images/actualite/Image.png',
      alt: 'Interviews image'
    }
  },
  {
    id: 2,
    title: "Articles",
    description: 'Lorem ipsum dolor sit amet consectetur. Molestie diam at odio tincidunt lorem. Eu odio platea aenean.',
    img: {
      url: 'assets/images/actualite/Image-1.png',
      alt: 'Articles image'
    }
  },
  {
    id: 3,
    title: "Livres",
    description: 'Lorem ipsum dolor sit amet consectetur. Molestie diam at odio tincidunt lorem. Eu odio platea aenean.',
    img: {
      url: 'assets/images/actualite/Image-2.png',
      alt: 'Livres Image'
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
    img: 'assets/images/associations/Image.png'
  },
  {
    name: 'Eglise cool',
    img: 'assets/images/associations/image-5.png'
  },
  {
    name: 'Croix rouge',
    img: 'assets/images/associations/image-6.png'
  },
  {
    name: 'restau du coeur',
    img: 'assets/images/associations/image-7.png'
  },
  {
    name: 'Eglise cool',
    img: 'assets/images/associations/image-8.png'
  },
]

const expeditions$ =  [
  {
    categories: [],
    title: 'Lorem ipsum dolor solor sit amet, consectetur adipiscing elitit tur adipiscing elit.',
    content: ['Lorem ipsum dolor sit amet consectetur. At pharetra sit mauris massa molestie vitae ut. Imperdiet fusce sed sit suspendisse vehicula. Turpis massa arcu morbi lectus odio ante. Penatibus.'],
    img: {
      url: 'assets/images/expeditions/Image.png',
      alt: 'Photo de josué',
    },
    button: {
      title: 'A propos de moi',
      action:"about"
    }
  },
  {
    categories: [],
    title: 'Lorem ipsum dolor solor sit amet, consectetur adipiscing elitit tur adipiscing elit.',
    content: ['Lorem ipsum dolor sit amet consectetur. At pharetra sit mauris massa molestie vitae ut. Imperdiet fusce sed sit suspendisse vehicula. Turpis massa arcu morbi lectus odio ante. Penatibus.'],
    img: {
      url: 'assets/images/expeditions/Image-2.png',
      alt: 'Photo de josué',
    },
    button: {
      title: 'A propos de moi',
      action:"about"
    }
  },
  {
    categories: [],
    title: 'Lorem ipsum dolor solor sit amet, consectetur adipiscing elitit tur adipiscing elit.',
    content: ['Lorem ipsum dolor sit amet consectetur. At pharetra sit mauris massa molestie vitae ut. Imperdiet fusce sed sit suspendisse vehicula. Turpis massa arcu morbi lectus odio ante. Penatibus.'],
    img: {
      url: 'assets/images/expeditions/Image-1.png',
      alt: 'Photo de josué',
    },
    button: {
      title: 'A propos de moi',
      action:"about"
    }
  }
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
      action:"about"
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
      action: "article"
    }
  }
]

const articles_about$ = [
  {
    categories: ['A Propos'],
    title: 'Josué Josué',
    content: ['Lorem ipsum dolor sit amet consectetur. Risus duis vel eget metus turpis ac placerat ac. Risus aenean hendrerit sem quam. Eu non nulla nullam nibh viverra fringilla duis.', 'Lorem ipsum dolor sit amet consectetur. In massa bibendum aliquam faucibus libero et mauris pellentesque. Neque commodo ut elit dolor.Lorem ipsum dolor sit amet consectetur. Risus duis vel eget metus turpis ac placerat ac. Risus aenean hendreruis.Lorem ipsum dolor sit amet consectetur. Risus duis vel eget metus turpis ac placerat ac. Risus aenean hendrerit sem quam. Eu non nulla nullam nibh viverra fringilla duis. Dictum quam dolor sed volutpat. Nisi netus risus id sed. Ultricies phasellus sit eget platea aliquet. At tristique.'],
    imgs: [
      {
        url: 'assets/images/about/Frame.png',
        alt: 'Photo de josué',
      },{
        url: 'assets/images/about/Frame-1.png',
        alt: 'Photo de josué',
      }
    ],
  }]

const  texts_about$ = [
  {
  title: "Autumn Is a Second Spring",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at, dolorem excepturi fugiat fugit, id illo laborum, laudantium modi odio repudiandae sapiente sequi. Adipisci culpa eaque, inventore laboriosam maiores quae"
},{
  title: "Look Deep Into Nature",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at, dolorem excepturi fugiat fugit, id illo laborum, laudantium modi odio repudiandae sapiente sequi. Adipisci culpa eaque, inventore laboriosam maiores quae"
},{
  title: "Study Nature, Love Nature",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at, dolorem excepturi fugiat fugit, id illo laborum, laudantium modi odio repudiandae sapiente sequi. Adipisci culpa eaque, inventore laboriosam maiores quae"
},{
  title: "Just Let It Rain",
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
  about$,
  expeditions$
}
