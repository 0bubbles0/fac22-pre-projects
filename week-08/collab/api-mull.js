const imgPlholder = document.querySelector('#img-placeholder');
const imgFrame = document.querySelector('#img-frame');
const imgButtonGenerate = document.querySelector('#img-generate');
const imgButtonSearch = document.querySelector('#img-search');
const imgWish = document.querySelector('#img-wish');

function addToGallery(url, alt) {
  const image = document.createElement('img');
  image.src = url;
  image.alt = alt;
  imgFrame.append(image);
}

imgButtonGenerate.addEventListener('click', () => {
  fetch('https://picsum.photos/200')
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      console.log(response.url);
      // imgPlholder.src = response.url;
      // const image = document.createElement('img');
      // image.src = response.url;
      // image.alt = 'Random Unsplash image';
      // imgFrame.append(image);
      addToGallery(response.url, 'Random Unsplash image');
    })
    .catch((error) => "Couldn't load image");
});

imgButtonSearch.addEventListener('click', () => {
  console.log(imgWish.value);
  const wishValue = imgWish.value;
  // fetch('https://picsum.photos/200').then(response => {
  // 	console.log(response.url);
  // 	imgPlholder.src = response.url;
  // });
  // fetch(`https://source.unsplash.com/weekly?${imgWish.value}`)
  // 	.then(response => {
  // 		if (!response.ok) throw new Error(response.status);
  // 		console.log(response);
  // 		console.log(response.url);
  // 		imgPlholder.src = response.url;
  // 	})
  fetch(`https://source.unsplash.com/weekly?${wishValue}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      addToGallery(response.url, `Image of ${wishValue}`);
    })
    .catch((error) => "Couldn't load image");
});
