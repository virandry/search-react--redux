import React from "react";
import {debounce} from 'throttle-debounce';
import { connect } from 'react-redux';
import * as action from "../actions"
import "./SearchBar.css";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          searchTerm: '',
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

    toggleAutocomplete(arg){
      this.props.toggleAutocomplete(arg)
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
      console.log(this.state.iter < this.props.receivedBooks.length - 1);
      if (this.state.iter == null) {
        this.setState({iter: 0})
      } else if (this.state.iter < this.props.receivedBooks.length - 1) {
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
        iter: null
      })
      this.props.onPushResults([item])
      console.log(item);
    }

    displayResult(){
			if (this.state.iter==null){
        this.props.onPushResults(this.props.receivedBooks);
			} else {
				var item = this.props.receivedBooks[this.state.iter];
        this.props.onPushResults([item])
        this.setState({
          searchTerm: item.author,
          iter: null
        })
      }
      this.toggleAutocomplete(false)
		}

    receiveAutocomplete(){
      this.props.fetchAutocomplete(this.state.searchTerm)
    }

    render() {

        return (
            <div>
                <input className="form-control" type="text"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown} />
                
                <ul className="dropdown-menu" style={(this.props.toggleDDL) ? { display: 'block' } : { display: 'none' }}>
                    {this.props.receivedBooks.map((item,index) =>
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

const mapStateToProps = (state, ownProps) => {
  return {
    toggleDDL: state.searchBar.toggleDDL,
    receivedBooks: state.searchBar.receivedBooks
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAutocomplete: (arg) => dispatch(action.toggleAutocomplete(arg)),
    fetchAutocomplete: (searchTerm) => dispatch(action.fetchAutocomplete(searchTerm))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
