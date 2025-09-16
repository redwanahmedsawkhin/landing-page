const ordersTable = document.getElementById("ordersTable");

db.collection("orders")
  .orderBy("timestamp", "desc")
  .onSnapshot(snapshot => {
    ordersTable.innerHTML = "";
    snapshot.forEach(doc => {
      const order = doc.data();
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${order.name}</td>
        <td>${order.phone}</td>
        <td>${order.address}</td>
        <td>${order.delivery}</td>
        <td>${order.products.map(p => p.name).join(", ")}</td>
        <td>${order.timestamp}</td>
      `;
      ordersTable.appendChild(row);
    });
  });
