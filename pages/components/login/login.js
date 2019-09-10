import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="top-login-modal modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="tmx-loginform" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="tmx-loginform">Login Area</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="login-form-modal">
                                <form action="#" method="get">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <input type="text" className="form-control" placeholder="Username" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <input type="password" className="form-control" placeholder="Pasword" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <button type="submit" className="btn btn-primary login-btn">Login</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="message">Not registered? <a href="#">Create an account</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;