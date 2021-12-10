import {React,useState} from "react";



const LatestOrders = () => {
  const [latestOrder, setlatestOrder] = useState([  {
    id: 1,
    total: 120,
    currency: "$",
    paymentMethod: "Bank Transfers",
  },
  {
    id: 2,
    total: 1234,
    currency: "Rs",
    paymentMethod: "Ewallents",
  },
  {
    id: 3,
    total: 7893,
    currency: "₿",
    paymentMethod: "Paypall",
  },
  {
    id: 4,
    total: 389,
    currency: "₹",
    paymentMethod: "Payoneer",
  },
  {
    id: 5,
    total: 120,
    currency: "€",
    paymentMethod: "EasyPaisa",
  },])
  return (
    <>
      <div className="row">
        <div className="col-md-12 col-xl-12">
          <div className="card" style={{ padding: "0%" }}>
            <div className="card-header">
              <h2>Latest Orders</h2>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Order Total</th>
                    <th>Payment Method</th>
                  </tr>
                </thead>
                <tbody>
                  {latestOrder.map((obj) => {
                    return (
                      <>
                        <tr>
                          <td>{obj.id}</td>
                          <td>
                            {obj.currency}
                            {obj.total}
                          </td>
                          <td>{obj.paymentMethod}</td>
                        </tr>
                      </>
                    );
                  })}

                  <br />

                  <div style={{ marginLeft: "0px" }}>
                    <button
                      style={{ color: "black" }}
                      type="button"
                      className="btn btn-danger"
                    >
                      View All Orders
                    </button>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestOrders;
