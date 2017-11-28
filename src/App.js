import React from "react";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Mini Search Engine",
            results: [],
        };
        this.pushResults = this.pushResults.bind(this)
    }

    pushResults(res){
        this.setState({
          results : res
        });
    }

    render() {
        const title = this.state.title;

        return (
            <div id="app">
                <nav className="navbar navbar-light bg-faded">
                    <h1 className="navbar-brand mb-0">{title}</h1>
                </nav>
                <div className="container my-5 px-0">
                    <SearchBar onPushResults={this.pushResults} />
                    <Result results={this.state.results} />
                </div>
            </div>
        );
    }
}

export default App;
