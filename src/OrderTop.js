import {React,useState} from "react";



const OrderTop = () => {
const [orderTop, setorderTop] = useState([

    {
        Detail: "Machinery",
        Quantity: 1,
        Status: "Pending",
        Price: 250,
        currency: "$",
      },
      {
        Detail: "Mobil",
        Quantity: 2,
        Status: "Pending",
        Price: 250,
        currency: "$",
      },
      {
        Detail: "Watches",
        Quantity: 3,
        Status: "Approve",
        Price: 250,
        currency: "$",
      },
    
      {
        Detail: "Vehical",
        Quantity: 4,
        Status: "Cancel",
        Price: 250,
        currency: "$",
      },

])
 
  return (
    <>
      <div className="row">
        <div className="col-md-12 col-xl-12">
          <div className="card" style={{ padding: "0%" }}>
            <div className="card-header">
              <h2>Top Orders</h2>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Details</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {orderTop.map((obj) => {
                    return (
                      <>
                        <tr>
                          <td>{obj.Detail}</td>
                          <td>{obj.Quantity}</td>
                          <td>{obj.Status}</td>
                          <td>
                            {obj.currency}
                            {obj.Price}
                          </td>
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

export default OrderTop;
