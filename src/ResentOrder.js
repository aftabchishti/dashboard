import {React,useState} from "react";




const ResentOrder = () => {
const [data, setdata] = useState([
  {
    Detail: "Simply dummy text of the printing",
    Quantity: 1,
    status: "Pending",
    vendor: "Best-buy-Mall",
    products: 3409,
    shipmentStatus: "Delievered",
  },
  {
    Detail: "Long established",
    Quantity: 5,
    status: "Cancel",
    vendor: "Daraz",
    products: 234,
    shipmentStatus: "Delievered",
  },
  {
    Detail: "sometimes by accident",
    Quantity: 10,
    status: "Cancel",
    vendor: "Amazon",
    products: 34090,
    shipmentStatus: "Delievered",
  },
  {
    Detail: "Classical Latin literature",
    Quantity: 9,
    status: "Publish",
    vendor: "",
    products: 4509,
    shipmentStatus: "Delievered",
  },
]);


  return (
    <>
      <div className="row">
        <div className="col-md-12 col-xl-12">
          <div className="card">
            <div className="card-header">
              <h2>Recent Orders</h2>
              <hr />

              <table className="table table-bordered table-striped">
                <thead>
                <tr>
                      <th>Order ID</th>
                      <th>Total Amount</th>
                      <th>Payment Method</th>
                      <th>Vendor</th>
                      <th>Total Products</th>
                      <th>Shipment Status</th>
                    </tr>
                </thead>
                <tbody>
                  {data.map((obj) => {
                    return (
                      <>
                        <tr>
                          <td>{obj.Detail}</td>
                          <td>{obj.Quantity}</td>
                          <td>{obj.status}</td>
                          <td>{obj.vendor}</td>
                          <td>{obj.products}</td>
                          <td>{obj.shipmentStatus}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResentOrder;
