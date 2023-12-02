let purchased = JSON.parse(localStorage.getItem("purchased"));

let table = document.querySelector("table");
table.innerHTML = purchased
  .map((item, index) => {
    return `
        <table>
            <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.description}</td>
            </tr>
        </table>
    `;
  })
  .join("");
