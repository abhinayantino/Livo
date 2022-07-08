import React, { useState, useEffect } from "react";
import "./index.css";
import { DashboardAPI } from "../services/DashboardApi";
const Dashboard = () => {
  const [dashboard, setDashboard] = useState([]);
  const params = {
    startDate: "18/05/2022",
    endDate: "20/05/2022",
  };

  useEffect(() => {
    DashboardAPI(params).then((response) => {
      const resp = response.data.data;
      setDashboard(resp);
    });
  }, []);
  console.log(dashboard);
  const data = [
    {
      id: 1,
      Header: "Balance Overview",
      collected: "collected",
      collectedPercebtage: "80%",
      pending: "Pending",
      totalPayable: "Request",
      totalcollected: "2020-01-01",
    },
    {
      id: 2,
      Header: "Property Overview",
      collected: "collected",
      collectedPercebtage: "80%",
      pending: "Pending",
      totalPayable: "Request",
      totalcollected: "2020-01-01",
    },
  ];
  return (
    <div className="home bg-white home" style={{ borderTopLeftRadius: "50px" }}>
      <div className="p-4">
        <div className="d-flex justify-content-between mt-3">
          <div>
            <h4>Dashboard</h4>
          </div>
          {/* <div>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "24px", marginLeft: "24px" }}
            >
              <rect width="48" height="48" rx="8" fill="#EFF0F6" />
              <path
                d="M24.9995 23.7502C24.8095 23.7502 24.6195 23.6802 24.4695 23.5302C24.1795 23.2402 24.1795 22.7602 24.4695 22.4702L32.6695 14.2702C32.9595 13.9802 33.4395 13.9802 33.7295 14.2702C34.0195 14.5602 34.0195 15.0402 33.7295 15.3302L25.5295 23.5302C25.3795 23.6802 25.1895 23.7502 24.9995 23.7502Z"
                fill="#0C344E"
              />
              <path
                d="M33.9992 19.55C33.5892 19.55 33.2492 19.21 33.2492 18.8V14.75H29.1992C28.7892 14.75 28.4492 14.41 28.4492 14C28.4492 13.59 28.7892 13.25 29.1992 13.25H33.9992C34.4092 13.25 34.7492 13.59 34.7492 14V18.8C34.7492 19.21 34.4092 19.55 33.9992 19.55Z"
                fill="#0C344E"
              />
              <path
                d="M27 34.75H21C15.57 34.75 13.25 32.43 13.25 27V21C13.25 15.57 15.57 13.25 21 13.25H23C23.41 13.25 23.75 13.59 23.75 14C23.75 14.41 23.41 14.75 23 14.75H21C16.39 14.75 14.75 16.39 14.75 21V27C14.75 31.61 16.39 33.25 21 33.25H27C31.61 33.25 33.25 31.61 33.25 27V25C33.25 24.59 33.59 24.25 34 24.25C34.41 24.25 34.75 24.59 34.75 25V27C34.75 32.43 32.43 34.75 27 34.75Z"
                fill="#0C344E"
              />
            </svg>
            <button className="d-addfilter">Add Filter</button>
          </div> */}
        </div>
        <div className="d-flex justify-content-around flex-wrap gap-4 mt-4">
          <div className="card card-increse">
            <div className="card-body">
              <h6 className="card-title">Properties Overview</h6>
              <div className="mt-3">
                <div className="d-flex justify-content-between">
                  <div className="info">
                    <div className="loader">
                      <div className="d-flex justify-content-center  align-items-center flex-column mt-">
                        <h5>
                          {Math.ceil(
                            ((dashboard?.flatOverview?.totalFlats -
                              dashboard?.flatOverview?.flatsOccupied) *
                              100) /
                              dashboard?.flatOverview?.totalFlats
                          )}
                          %
                        </h5>
                        <p>Vacant</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5>{dashboard?.buildingOverview?.totalBuildings}</h5>
                    <p className="c-dinfo">Total Buildings</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>{dashboard?.buildingOverview?.totalResidents}</h5>
                    <p className="c-dinfo">Total Users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="card">
            <div className="card-body">
              <h6 className="card-title">Properties Overview</h6>
              <div className="mt-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>254</h5>
                    <p className="c-dinfo">Pending</p>
                  </div>
                  <div>
                    <h5>200000</h5>
                    <p className="c-dinfo">Pending</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>100000</h5>
                    <p className="c-dinfo">Total Payable</p>
                  </div>
                  <div className="mt-1">
                    <h5>157587</h5>
                    <p className="c-dinfo">Total Collected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">User Overview</h6>
              <div className="mt-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>254</h5>
                    <p className="c-dinfo">Pending</p>
                  </div>
                  <div>
                    <h5>200000</h5>
                    <p className="c-dinfo">Pending</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>100000</h5>
                    <p className="c-dinfo">Total Payable</p>
                  </div>
                  <div className="mt-1">
                    <h5>157587</h5>
                    <p className="c-dinfo">Total Collected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Visitor Management</h6>
              <div className="mt-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>254</h5>
                    <p className="c-dinfo">Pending</p>
                  </div>
                  <div>
                    <h5>200000</h5>
                    <p className="c-dinfo">Pending</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Charges Overview (AED)</h6>
              <div className="mt-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>{dashboard?.chargeOverview?.totalAmount}</h5>
                    <p className="c-dinfo">Toal Amounut</p>
                  </div>
                  <div>
                    <h5>{dashboard?.chargeOverview?.pending}</h5>
                    <p className="c-dinfo">Pending</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>
                      {dashboard?.chargeOverview?.totalCollected === null
                        ? 0
                        : dashboard?.chargeOverview?.totalCollected}
                    </h5>
                    <p className="c-dinfo">Total Collected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Flat Overview</h6>
              <div className="mt-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>{dashboard?.flatOverview?.totalFlats}</h5>
                    <p className="c-dinfo">Total Flats</p>
                  </div>
                  <div>
                    <h5>{dashboard?.flatOverview?.flatsOccupied}</h5>
                    <p className="c-dinfo">Occupied Flats</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>{dashboard?.flatOverview?.tenants}</h5>
                    <p className="c-dinfo">Tenants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
