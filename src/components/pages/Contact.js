import React from 'react';

export default function Contact() {
  return (

    <main  className="flex-shrink-0">
        <div className="container-fluid p-0">
            <h1 className="h3 mb-3 text-center">View Sponsors</h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title w-100 text-center">
                                <a href="accounts_add.php">Add New Sponsor</a>
                            </h5>
                        </div>
                        <div className="card-body">
                            <table id="sponsors-table" className="table table-striped" >
                                <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th>Name</th>
                                        <th>Active</th>
                                        <th>Actions?</th> 
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>                        
        </div>
    </main>
  );
}
