// Example: Log the name of the artist when their item is clicked
const artistItems = document.querySelectorAll('.artist-item');

artistItems.forEach(item => {
  item.addEventListener('click', () => {
    alert(`You clicked on artist: ${item.querySelector('p').innerText}`);
  });
});
