import React from 'react'
import './Result.css';

class Result extends React.Component {

    render() {

        return (
            <div className="row">
                <div claclassNamess="col-md-4 col-sm-6 col-xs-12 p-3">
                    <div className="card">
                        <div className="card-block">
                            <h4 className="card-title">test</h4>
                            <p className="card-text">
                                <span >Series: </span>
                                <span>Title: </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result