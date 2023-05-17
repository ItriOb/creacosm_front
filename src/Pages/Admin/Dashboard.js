import React from "react";
import NewRow from '../../Components/Admin/NewRow';
import DataRow from '../../Components/Admin/DataRow';
import {ReactSession} from 'react-client-session';


const Dashboard=()=>{
    return(
        <div>
            <h1>Dashboard</h1>
            <div className="row row-margin">
                <div className="col-6">
                  <div class="card card-size">
                    <div class="card-body">
                      <div class="row">
                        <div class="col card-right">
                          <h3 class="card-title">100</h3>
                        </div>
                        <div class="col-auto">
                          <img
                            className="dashboard-icons"
                            src="/images/group.png"
                            alt="add"
                          />
                        </div>
                      </div>
                      <p class="card-text card-right">Utilisateurs</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col card-right">
                          <h3 class="card-title">12</h3>
                        </div>
                        <div class="col-auto">
                          <img
                            className="dashboard-icons"
                            src="/images/poll.png"
                            alt="add"
                          />
                        </div>
                      </div>
                      <p class="card-text card-right">Sondages Créés</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-margin">
                <div className="col-12">
                  <div class="card card-padding">
                    <div class="card-body">
                      <div class="row">
                        <div class="col card-right">
                          <h3 class="card-title crd-title">Top Sondages</h3>
                        </div>
                        <div class="col-auto">
                          <div className="row">
                            <NewRow
                              titre="Titre du sondage"
                              titre2="Sondeurs"
                              titre3="Date de création"
                            />
                            <DataRow
                              sondage="Sondage 1"
                              sondeurs="20"
                              date="10/12/2022"
                            />
                            <DataRow
                              sondage="Sondage 2"
                              sondeurs="14"
                              date="20/12/2001"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-margin">
                <div className="col-12">
                  <div class="card card-padding">
                    <div class="card-body">
                      <div class="row">
                        <div class="col card-right">
                          <h3 class="crd-title">Top Thèmes</h3>
                        </div>
                        <div class="col-auto">
                          <div className="row">
                            <NewRow
                              titre="Titre du thème"
                              titre2="Sondages"
                              titre3="Date de création"
                            />
                            <DataRow
                              sondage="Thème 1"
                              sondeurs="5"
                              date="29/12/2022"
                            />
                            <DataRow
                              sondage="Thème 2"
                              sondeurs="3"
                              date="01/12/2022"
                            />
                            <DataRow
                              sondage="Thème 3"
                              sondeurs="1"
                              date="15/10/2022"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    )
}

export default Dashboard;