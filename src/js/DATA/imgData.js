import { Ui } from '../ui/userInterface';
import { Api } from './api';

//Icons to display on img widgets
export const icons = { 
    expand: { name: "expand", class: "fa-solid fa-expand", event: "click", prevDefault: false, func: Ui.displayImgModal },
    favorite: { name: "favorite", class: "fa-solid fa-heart", event: "click", prevDefault: false, func: Ui.displayCollForm },
    download: { name: "download", class: "fa-solid fa-download", event: "click", prevDefault: false, func: Api.downloadImg },
    delete: { name: "delete", class: "fa-regular fa-trash-can", event: "click", prevDefault: false, func: Ui.deleteImgWidget },
}

// Staring page gallery
export const gallery  = [
    { title: "man in gray quarter-sleeved shirt singing",
      id: 'hgO1wFPXl3I',
      imgSrc: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDU4ODF8MHwxfHNlYXJjaHw2fHxtdXNpY3xmcnwwfHx8fDE3MTk2NTUzMTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    { title: "photo of woman with black lipsticks and nose piercings captured inside dim light room",
      id: 'NscHnjdTOsE',
      imgSrc: "https://images.unsplash.com/photo-1520563683082-7ef74b616a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDU4ODF8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGZlbW1lJTIwcGllcmNpbmd8ZnJ8MHx8fHwxNzE5NjU3MTIxfDA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    { title: "vehicles on road",
      id: 'xxzeV1aiSY8',
      imgSrc: "https://images.unsplash.com/photo-1540232058434-8e7394b7e847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDU4ODF8MHwxfHNlYXJjaHwxNHx8bG9zJTIwYW5nZWxlc3xmcnwwfHx8fDE3MTk2NDcwNDl8MA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    { title: "Time Square, New York during daytime",
      id: 'TaCk3NspYe0',
      imgSrc: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDU4ODF8MHwxfHNlYXJjaHwxNXx8bmV3JTIweW9yayUyMGNpdHl8ZnJ8MHx8fHwxNzE5NjYwODg4fDA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    { title: "woman's hippie style sunglasses",
      id: 'nmuyqgSOpEE',
      imgSrc: "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDU4ODF8MHwxfHNlYXJjaHwyfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwcG9ydHJhaXR8ZnJ8MHx8fHwxNzE5NjQ4Nzg4fDA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    { title: "woman sitting on utility trailer during night",
      id: 'Eb1mX9ds7sc',
      imgSrc: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDU4ODF8MHwxfHNlYXJjaHwxNnx8bWFubmVxdWlufGZyfDB8fHx8MTcxOTY1NTQzMXww&ixlib=rb-4.0.3&q=80&w=1080"
    },
    { title: "photo of shouting horse under cloudy sky",
      id: 'EXuKQaf3Ei8',
      imgSrc: "https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDU4ODF8MHwxfHNlYXJjaHwyMHx8aG9yc2V8ZnJ8MHx8fHwxNzE5NjU2MzA3fDA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    { title: "classic orange convertible coupe",
      id: 'OUJznLLS4-4',
      imgSrc: "https://images.unsplash.com/photo-1517271710308-aa99f1519490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDU4ODF8MHwxfHNlYXJjaHwyfHxjdWJhJTIwdmludGFnZSUyMGNhcnxmcnwwfHx8fDE3MTk4MDk1NjR8MA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    { title: "woman wearing black sunglasses and black camisole",
      id: '_fvUcz1H6EY',
      imgSrc: "https://images.unsplash.com/photo-1568782517100-09bf22d88c2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDU4ODF8MHwxfHNlYXJjaHwyOHx8YWZybyUyMG1vZGVsfGZyfDB8fHx8MTcxOTgwNzg5M3ww&ixlib=rb-4.0.3&q=80&w=1080"
    },
    { title: "grayscale photography of ballet dancer standing on board",
      id: 'gbd6PqRqGms',
      imgSrc: "https://images.unsplash.com/photo-1516737488405-7b6d6868fad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDU4ODF8MHwxfHNlYXJjaHw1NHx8ZGFuc2V1ciUyMHNhbHNhfGZyfDB8fHx8MTcxOTgwOTg4NHww&ixlib=rb-4.0.3&q=80&w=1080"
    },
    { title: "man wearing brown and black leopard print button-up T-shirt and black sunglasses crossing hands down while looking up",
      id: 'vKnRYW-mtek',
      imgSrc: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDU4ODF8MHwxfHNlYXJjaHw1N3x8Z3VpdGFyJTIwaG9tbWUlMjBsdW5ldHRlfGZyfDB8fHx8MTcxOTY1NzQyOXww&ixlib=rb-4.0.3&q=80&w=1080"
    },
    { title: "silhouette photo of rock band on stage performing in front of audience",
      id: 'yWF2LLan-_o',
      imgSrc: "https://images.unsplash.com/photo-1501612780327-45045538702b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDU4ODF8MHwxfHNlYXJjaHwxNXx8Y29uY2VydHxmcnwwfHx8fDE3MTk3NDI3NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    { title: "red and blue doodle artwork with black background",
      id: 'pVq6YhmDPtk',
      imgSrc: "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDU4ODF8MHwxfHNlYXJjaHwxNHx8YWJzdHJhY3R8ZnJ8MHx8fHwxNzE5ODA5MTg1fDA&ixlib=rb-4.0.3&q=80&w=1080"
    },
]