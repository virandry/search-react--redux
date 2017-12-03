import React from "react";
import fetch from 'cross-fetch';
import {debounce} from 'throttle-debounce';
import "./SearchBar.css";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          toggleDDL: false,
          searchTerm: '',
          receivedBooks: [],
          iter: null,
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.isActive = this.isActive.bind(this)
        this.cursorDown = this.cursorDown.bind(this)
        this.cursorUp = this.cursorUp.bind(this)
        this.displayResult = this.displayResult.bind(this)
        this.receiveAutocomplete = debounce(500,this.receiveAutocomplete)
    }

    handleChange(event) {
      this.setState({ searchTerm: event.target.value }
        , () => {
          if (this.state.searchTerm.length === 0){
            this.props.onResetResults()
            this.toggleAutocomplete(false)
          } else {
            this.receiveAutocomplete();
          }
        }
      );
    }

    toggleAutocomplete(arg=!this.state.toggleDDL){
      this.setState({
        toggleDDL: arg
      })
    }

    handleKeyDown(event){
        
        switch (event.keyCode) {
          case 13:
            console.log("you pressed enter")
            event.preventDefault()
            this.displayResult()
            break;
          case 38:
            console.log("you pressed up")
            event.preventDefault()
            this.cursorUp()
            break;
          case 40:
            console.log("you pressed down")
            event.preventDefault()
            this.cursorDown()
            break;
          default:
            break;
        }
    }

    isActive(index) {
      return index === this.state.iter
    }

    cursorDown() {
      console.log(this.state.iter < this.state.receivedBooks.length - 1);
      if (this.state.iter == null) {
        this.setState({iter: 0})
      } else if (this.state.iter < this.state.receivedBooks.length - 1) {
        this.setState(prevState => { return { iter : prevState.iter + 1 }; })
      }
      console.log(this.state.iter);
    }

    cursorUp() {
      console.log(this.state.iter);
      if (this.state.iter > 0) {
        this.setState(prevState => { return { iter: prevState.iter - 1 }; })
      }
      console.log(this.state.iter);
    }

    selectItem(item) {
      this.setState({
        searchTerm: item.author,
        toggleDDL: false,
        iter: null
      })
      this.props.onPushResults([item])
      console.log(item);
    }

    displayResult(){
			if (this.state.iter==null){
        this.props.onPushResults(this.state.receivedBooks);
			} else {
				var item = this.state.receivedBooks[this.state.iter];
        this.props.onPushResults([item])
        this.setState({
          searchTerm: item.author
        })
      }
      this.setState({
        toggleDDL: false,
        iter: null
      })
		}

    receiveAutocomplete(){
      console.log("searching... " + this.state.searchTerm);
      fetch('http://localhost:1110/books?author='+this.state.searchTerm)
        .then(response => {
            return response.json()
          })
        .then(json => {
          console.log(typeof json.error==='undefined')
          if (typeof json.error === 'undefined'){
            this.toggleAutocomplete(true)
            this.setState({receivedBooks:json})
          } else {
            this.toggleAutocomplete(false)
            this.setState({receivedBooks:[]})
          }
        })
    }

    render() {

        return (
            <div>
                <input className="form-control" type="text"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown} />
                
                <ul className="dropdown-menu" style={(this.state.toggleDDL) ? { display: 'block' } : { display: 'none' }}>
                    {this.state.receivedBooks.map((item,index) =>
                      <li className={'dropdown-item '.concat((this.isActive(index)) ? 'active' : '')} 
                          key={item.id}
                          onClick={this.selectItem.bind(this,item)}>
                        <a>{item.name}</a>
                      </li>
                    ,this)}
                </ul>
                                    
            </div>
        );
    }
}
export default SearchBar;
