document.addEventListener("DOMContentLoaded", function() {
    // Define days and their labels
    hours = ["1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM",
    "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
    "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM",
    "12:00 AM"];
    const days = [
      { label: "Day 1"},
      { label: "Day 2"},
      { label: "Day 3"},
      { label: "Day 4"},
      { label: "Day 5"},
      { label: "Day 6"},
      { label: "Day 7"},
      { label: "Day 8"},
      { label: "Day 9"},      
    ];
  
    // Create table element
    const table = document.getElementById("schedule-table");
  
    // Create table header
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    headerRow.insertCell(); // Empty corner cell
    days.forEach(day => {
      const th = document.createElement("th");
      th.textContent = day.label;
      headerRow.appendChild(th);
    });
  
    // Create table body
    const tbody = table.createTBody();
    hours.forEach((hour, index) => {
      const row = tbody.insertRow();
      const hourCell = row.insertCell();
      hourCell.textContent = hour;
  
      // Create empty cells for each day
      days.forEach(day => {
        let cell = row.insertCell();
        cell.innerHTML = '&#127848';
        cell.addEventListener("click" , function() {
            let curr_pict = document.getElementById("icon");
            change_chart(document.getElementById('fat-progress'), "50%");
            change_chart(document.getElementById('carbs-progress'), "40%");
            change_chart(document.getElementById('protein-progress'), "30%");
            curr_pict.innerHTML = cell.innerHTML;
            let food_name = document.getElementById('food-name');
            food_name.innerHTML = "Ice Cream";
        });
      });
    });
  });

function change_chart(progressBar, percentage) {
  progressBar.classList.remove("animation");
    void progressBar.offsetWidth;
    progressBar.style.width = percentage;
    progressBar.classList.add("animation");
  progressBar.innerHTML = percentage;
}
  