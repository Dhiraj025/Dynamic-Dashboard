
const donutData = { Completed: 40, Pending: 60 };
const gridData = [
  { title: "Product A", description: "This is product A.", image: "image3.png" },
  { title: "Product B", description: "This is product B.", image: "image1.png" },
  { title: "Product C", description: "This is product C.", image: "image2.png" },
  { title: "Product D", description: "This is product D.", image: "image6.png" },
  { title: "Product E", description: "This is product E.", image: "image4.png" },
  { title: "Product F", description: "This is product F.", image: "image5.png" },
  { title: "Product G", description: "This is product G.", image: "image0.png" },
];

// Update Dynamic Subtitle with Current Date
function updateLastUpdated() {
  const now = new Date();
  const lastUpdated = document.getElementById("lastUpdated");
  lastUpdated.innerHTML = now.toString();
}
updateLastUpdated();

// Render Donut Chart
function renderDonutChart(data) {
  const ctx = document.getElementById("canvas").getNode.render();
}

function renderDonutChart(data) {
    const ctx = document.getElementById("donutChart").getContext("2d");
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: Object.keys(data),
        datasets: [
          {
            data: Object.values(data),
            backgroundColor: ["#4caf50", "#f44336"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });
  }

  const toggleBtn = document.getElementById("toggleMenu");
const navbarLinks = document.getElementById("navbarLinks");

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
  
  // Render the Flex Grid
  function renderFlexGrid(data) {
    const gridContainer = document.getElementById("gridSection");
    gridContainer.innerHTML = ""; // Clear existing content
  
    data.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const image = document.createElement("img");
      image.src = item.image || "https://via.placeholder.com/150";
      image.alt = item.title || "Placeholder";
  
      const cardContent = document.createElement("div");
      cardContent.classList.add("card-content");
  
      const title = document.createElement("h3");
      title.classList.add("card-title");
      title.textContent = item.title || "No Title";
  
      const description = document.createElement("p");
      description.classList.add("card-description");
      description.textContent = item.description || "No Description";
  
      cardContent.appendChild(title);
      cardContent.appendChild(description);
      card.appendChild(image);
      card.appendChild(cardContent);
  
      gridContainer.appendChild(card);
    });
  }
  
  // Initialize the Application
  function init() {
    renderDonutChart(donutData); // Render the Donut Chart
    renderFlexGrid(gridData); // Render the Dynamic Grid
  }
  
  init();
  