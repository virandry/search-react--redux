import React from 'react'
import './Result.css';

class Result extends React.Component {
    render() {
        return (
            <div className="row">
                {
                    this.props.results.map((item,index) => 
                        <div className="col-md-4 col-sm-6 col-xs-12 p-3" key={item.id}>
                            <div className="card">
                                <div className="card-block">
                                    <h4 className="card-title">{item.author}</h4>
                                    <p className="card-text">
                                        { item.series !== null && 
                                            <span >Series: {item.series}</span>
                                        }
                                        <span>Title: {item.name}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ,this)
                }
                
            </div>
        );
    }
}

export default Result