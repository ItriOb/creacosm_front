import React, { useEffect } from 'react'
import NavBar from '../../Components/Admin/NavBar';
import SideBar from '../../Components/Admin/SideBar';
import Footer from '../../Components/Footer'
import NewRow from '../../Components/Admin/NewRow';
import DataRow from '../../Components/Admin/DataRow';
import Dashboard from './Dashboard';
import CreerSondage from './CreerSondage';
import SondagesAdmin from './SondagesAdmin';
import { Outlet } from 'react-router-dom';
import Chart from './Chart/Chart';

const Layout = () => {
    return (
      <div>
        <NavBar />
        <div className="container-fluid min-vh-100 d-flex flex-column">
          <div className="row fill-row flex-grow-1">
            <div className="col-2">
              <SideBar />
            </div>
            <div className="col-10">
              <Outlet/>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
}

export default Layout