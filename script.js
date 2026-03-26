const stories = [
  {
    title: "The Lost Kingdom",
    author: "John Doe",
    desc: "A fantasy story about a fallen empire."
  },
  {
    title: "Midnight Love",
    author: "Jane Smith",
    desc: "A romantic drama under the stars."
  },
  {
    title: "Cyber Future",
    author: "Alex Ray",
    desc: "A sci-fi world ruled by AI."
  }
];

const container = document.getElementById("storyList");

stories.forEach(story => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h4>${story.title}</h4>
    <p><small>by ${story.author}</small></p>
    <p>${story.desc}</p>
  `;

  container.appendChild(card);
});