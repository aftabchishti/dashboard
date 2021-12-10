import {React, useState} from "react";
import "./App.css";
import LatestOrders from "./LatestOrders";
import OrderTop from "./OrderTop";
import ResentOrder from "./ResentOrder";




function App() {
  const [data,setData]=useState([{
    id: 1,
    name: "Order Received",
    price1: `$486`,
    description: "Completed Orders",
    total: 351,
    font_icon: "fa  fa-shopping-cart float-left",
    color: "blue",
  },
  {
    id: 2,
    name: "Total Sale",
    price1: `$1641`,
    description: "This Month",
    total: 213,
    font_icon: "fa fa-tag float-left",
    color: "green",
  },
  {
    id: 3,
    name: "Total Products",
    price1: `$42,562`,
    description: "This Month",
    total: 5032,
    font_icon: "fa fa-repeat float-left",
    color: "yellow",
  },
  {
    id: 4,
    name: "Total Vendors",
    price1: `$9,562`,
    description: "This Month",
    total: 543,
    font_icon: "fa fa-shield float-left",
    color: "red",
  }])
  return (
    <div style={{ padding: "3%" }}>
      <div className="container">
        {/* Dashboard cards*/}
        <div className="row">
          <h1 style={{ textAlign: "center" }}>Admin Dashboard</h1>
          <br />

          {data.map((obj) => {
            return (
              <>
                <div className="col-md-6 col-xl-6">
                  <div className="card bg-c-blue order-card ">
                    <div className={`card-body ${obj.color}`}>
                      <h6 className="text-white">{obj.name}</h6>
                      <h2 className="text-right text-white">
                        <i className={obj.font_icon}></i>

                        <span>{obj.price1}</span>
                      </h2>
                      <p className="m-b-0">
                        {obj.description}
                        <span className="float-right">{obj.total}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {/* Latest Order Table */}
        <br />
        <br />
        <LatestOrders />

        {/* Top Orders Table */}
        <br />
        <br />

        <OrderTop />
        {/* new */}
        <br />
        <br />
        {/* Top Five Resent Orders */}

        <ResentOrder />

        <br />
        <br />

        {/* Top Five Revenue   */}

        <div className="row">
          <div className="col-md-6 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h2>Top Five Revenue</h2>
                <hr />

                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Orders</th>
                      <th scope="col">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Omaima Khan Orakzai</td>
                      <td>Orange</td>
                      <td>*****</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Meshaim Khan </td>
                      <td>Mangu</td>
                      <td>****</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Sayyam</td>
                      <td>Banana</td>
                      <td>***</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Top Five City Revanue */}
          <div className="col-md-6 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h2>Top Five Cities</h2>
                <hr />

                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>

                      <th scope="col">City_Name</th>
                      <th scope="col">Order</th>
                      <th scope="col">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>

                      <td>Kohat</td>
                      <td>Watch</td>
                      <td>*****</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>

                      <td>Lahore</td>
                      <td>Mobils</td>
                      <td>**</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>

                      <td>Karachi </td>
                      <td>Shoes</td>
                      <td>****</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
