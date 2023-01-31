const images = [
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryListEl = document.querySelector("ul");
const element = images
  .map(function ({ url, alt }) {
    return `<li><img src = '${url}' alt = '${alt}' width="320"></li>`;
  })
  .join("");
galleryListEl.insertAdjacentHTML("afterbegin", element);

document.body.style.margin = '30px';


galleryListEl.style.cssText = `display: flex;
  background: radial-gradient(circle, rgba(63,68,4,0.7581626400560224) 0%, rgba(8,48,3,1) 36%, rgba(85,1,1,1) 68%, rgba(0,0,0,1) 100%);  align-items: center;
  box-shadow: 0px 200px 300px -15px rgba(0,0,0,0.69);
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  `;
