import React from "react";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";
import { connect } from 'react-redux';
import * as action from "./actions"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Mini Search Engine",
        };
        this.pushResults = this.pushResults.bind(this)
        this.resetResults = this.resetResults.bind(this)
    }

    resetResults(){
        this.props.resetResults()
    }

    pushResults(res){
        // this.setState({
        //     results : res.slice()
        // })
        this.props.pushResults(res)
    }

    render() {
        const title = this.state.title;

        return (
            <div id="app">
                <nav className="navbar navbar-light bg-faded">
                    <h1 className="navbar-brand mb-0">{title}</h1>
                </nav>
                <div className="container my-5 px-0">
                    <SearchBar 
                        onPushResults={this.pushResults}
                        onResetResults={this.resetResults} />
                    <Result results={this.props.results} />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        results: state.searchApp.results
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetResults: () => dispatch(action.resetResults()),
        pushResults: (results) => dispatch(action.pushResults(results))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
