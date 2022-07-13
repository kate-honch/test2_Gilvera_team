
const recentPosts = [
  {img:'002.png',
    title: 'The Internet Cannot be Trusted – Beamsplitters, Backdoors, and Broken Promises',
    author: 'Derek Zimmer',
    event:'JUL 25, 2018',
    text:'Governments, Networking, Open Source, Privacy, Security',
  },
  {img:'003.png',
    title: 'How to get cheaper flights using a VPN',
    author: 'Jayson',
    event:'JUL 24, 2018',
    text:'Guides',
  },
  {img:'004.png',
    title: 'Net Neutrality was repealed, but the fight is far from over',
    author: 'Chris Miller',
    event:'JUL 22, 2018',
    text:'Governments, Net Neutrality, News',
  },
  {img:'002.png',
    title: 'The Internet Cannot be Trusted – Beamsplitters, Backdoors, and Broken Promises',
    author: 'Derek Zimmer',
    event:'JUL 25, 2018',
    text:'Governments, Networking, Open Source, Privacy, Security',
  },
  {img:'003.png',
    title: 'How to get cheaper flights using a VPN',
    author: 'Jayson',
    event:'JUL 24, 2018',
    text:'Guides',
  },
  {img:'004.png',
    title: 'Net Neutrality was repealed, but the fight is far from over',
    author: 'Chris Miller',
    event:'JUL 22, 2018',
    text:'Governments, Net Neutrality, News',
  },
];

const list = document.querySelector('.main_block__recent_posts__list');
const menuBtn = document.querySelector('.header_menu__btn');
const listMenu = document.querySelector('.header_menu__modal_window');
const items = document.querySelectorAll('.header_menu__modal_window_item');

console.log(items);

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  listMenu.classList.toggle('active');
});

items.forEach((item) => {
    item.addEventListener('click', () => {
      listMenu.classList.remove('active');
    })
});


recentPosts.map((el) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <div class="main_block__recent_posts__list_block">
      <img class="main_block__recent_posts__img" src=./images/${el.img} alt=""/>
      <div class="main_block__recent_posts__list_block__container">
        <h2 class="main_block__recent_posts__list_block__title">${el.title}</h2>
        <span class="main_block__recent_posts__list_block__author">${el.author}</span>
        <span class="main_block__recent_posts__list_block__event">${el.event}</span>
        <p class="main_block__recent_posts__list_block__text">${el.text}</p>
        <div class="tv_post__comment">
          <button class="tv_post__comment_btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.75001 11.3334V10.5834H4.00001H3.41667V3.41669H12.5833V10.5834H8.18667H8.00365L7.8412 10.6677L4.75001 12.2719V11.3334Z" stroke="#889099" stroke-width="1.5"/>
            </svg>
          </button>
          <span>0</span>
        </div>
      </div>
    </div>
  `
  list.append(li)
})
