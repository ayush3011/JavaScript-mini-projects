function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let container = document.querySelector(".container");
    let cardHTML = `
        <div class="card-container">
        <div class="thumbnail">
          <img
            src="${thumbnail}"
            alt="thumbnail"
          />
          <div class="duration">${duration}</div>
        </div>
        <div class="context">
          <h2>${title}</h2>
          <div class="info">
            <span class="channel-name">${cName}</span>
            <span class="views">${views.toLocaleString()} views</span>
            <span class="months">${monthsOld} months ago</span>
          </div>
        </div>
      </div>
    `
    container.insertAdjacentHTML("beforeend", cardHTML);
}

createCard("Introduction to Backend", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg")
createCard("Introduction to Backend", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg")