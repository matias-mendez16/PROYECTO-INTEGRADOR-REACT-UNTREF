export default function ComparisonTable() {
  const services = {
    tv: [
      { name: "TV Básico", price: 2000 },
      { name: "TV Premium", price: 4000 },
      { name: "TV Full HD", price: 6000 },
    ],
    wifi: [
      { name: "WiFi 50MB", price: 3000 },
      { name: "WiFi 100MB", price: 5000 },
      { name: "WiFi 200MB", price: 7000 },
    ],
    mobile: [
      { name: "Móvil 5GB", price: 2500 },
      { name: "Móvil 10GB", price: 4500 },
      { name: "Móvil 20GB", price: 6500 },
    ],
  };

  return (
    <div className="comparison-container">

      <div className="comparison">
        <h2>Planes TV</h2>
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {services.tv.map((plan, index) => (
              <tr key={index}>
                <td>{plan.name}</td>
                <td>${plan.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="comparison">
        <h2>Planes Wifi</h2>
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {services.wifi.map((plan, index) => (
              <tr key={index}>
                <td>{plan.name}</td>
                <td>${plan.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="comparison">
        <h2>Planes Móvil</h2>
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {services.mobile.map((plan, index) => (
              <tr key={index}>
                <td>{plan.name}</td>
                <td>${plan.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
