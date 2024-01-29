const images = [
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg",
    "London",
  ],
  ["https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg", "Paris"],
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg",
    "New York",
  ],
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg",
    "Nova Scotia",
  ],
  ["https://classes.codingbootcamp.cz/assets/classes/1428/tokyo.jpeg", "Tokyo"],
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg",
    "Venice",
  ],
];

class Image {
  constructor(src, alt, description) {
    this.src = src;
    this.alt = alt;
    this.description = description;
  }

  render() {
    const gallery = document.querySelector(".gallery");
    const img = document.createElement("img");
    img.className = "image";
    img.src = this.src;
    img.alt = this.alt;
    img.style.width = "300px";
    const p = document.createElement("p");
    p.textContent = this.description;
    gallery.appendChild(img);
    gallery.appendChild(p);
  }
}

images.forEach((image) => {
  const newImage = new Image(image[0], image[1], image[1]);
  newImage.render();
});
