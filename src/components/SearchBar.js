import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          toggleDDL: true,
          searchTerm: '',
          receivedBooks: [{ "id": "387922b8-3ef9-42de-802c-342f66a4d6e8", "author": "Neil Gaiman; Terry Pratchett", "series": null, "name": "Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch" }, { "id": "5917ea92-9f59-4b1d-96ec-a77339e96ad7", "author": "Terry McMillan", "series": "Waiting to Exhale", "name": "Getting to Happy" }, { "id": "c4bb6515-02ce-4278-ba45-b76be30744ad", "author": "Terry Goodkind", "series": "Sword of Truth", "name": "Blood of the Fold" }, { "id": "6be86075-dc49-4b31-b20a-49d9d98afe70", "author": "Terry Goodkind", "series": "Sword of Truth", "name": "Wizard's First Rule" }, { "id": "35c0ee63-fbe1-4dc9-ab07-72eb8ecad1b6", "author": "Terry Goodkind", "series": "Sword of Truth", "name": "Soulf of the Fire" }, { "id": "464919f5-31a7-4d1f-9c1c-d541359c4f9f", "author": "Terry Goodkind", "series": "Sword of Truth", "name": "Naked Empire" }, { "id": "5065055d-5b54-4bea-ba3c-74b844a35a9b", "author": "Terry Goodkind", "series": "Sword of Truth", "name": "The Pillars of Creation" }, { "id": "417ceb99-3c89-48fd-a40f-83dd6926d02e", "author": "Terry Goodkind", "series": "Sword of Truth", "name": "Faith of the Fallen" }, { "id": "ee77526f-4c81-4459-91bc-86b8a1314af3", "author": "Terry Goodkind", "series": "Sword of Truth", "name": "Confessor" }, { "id": "f0257829-1946-4cf3-a8c7-bf14a168ee4d", "author": "Terry Goodkind", "series": "Sword of Truth", "name": "Debt of Bones" }, { "id": "04822887-f4d5-4e5e-b247-8de873e38036", "author": "Terry Goodkind", "series": "Sword of Truth", "name": "Phantom" }, { "id": "579df50f-2157-4365-bdf9-f4b825d6d509", "author": "Terry Goodkind", "series": "Sword of Truth", "name": "Chainfire" }, { "id": "4f8f1be1-014a-499b-858a-8378ce9101d0", "author": "Terry Goodkind", "series": "Sword of Truth", "name": "Temple of the Winds" }, { "id": "4e517b5d-13cd-47de-9e12-b3c48a4b66f9", "author": "Terry Goodkind", "series": "Sword of Truth", "name": "Stone of Tears" }, { "id": "718d3880-3b73-4f55-9c7a-3750fb5e3d54", "author": "Terry Joseph", "series": null, "name": "From Dawn to Deceit" }, { "id": "832ca88b-3d90-4bb8-b6d2-6f49b0981e68", "author": "Terry Pratchett", "series": null, "name": "Strata" }, { "id": "ecfd9383-8a0b-4bff-9636-ae42da6f43a8", "author": "Terry Pratchett", "series": null, "name": "Lords and Ladies" }, { "id": "ee8c9d1d-d3f9-40ac-abf2-813b5a2c22db", "author": "Terry Pratchett", "series": null, "name": "Men at Arms" }, { "id": "f5903b73-feeb-4055-97a4-a9b7c895cdb9", "author": "Terry Pratchett", "series": "Discworld", "name": "Guards! Guards!" }, { "id": "59243c39-30d1-4ea9-99ff-9f44d021a374", "author": "Terry Pratchett", "series": "Discworld", "name": "Monstrous Regiment" }, { "id": "478107fd-450a-4a35-bb26-bbd2cda55aca", "author": "Terry Pratchett", "series": null, "name": "Carpe Jugulum" }, { "id": "c45516f5-c2ee-452f-bfd0-618d70febf93", "author": "Terry Pratchett", "series": null, "name": "The Light Fantastic" }, { "id": "d59ca309-0f8a-43e0-8ad1-eed5378865df", "author": "Terry Pratchett", "series": null, "name": "The Shepherd's Crown (Tiffany Aching)" }, { "id": "a08309c1-57fa-4dbc-90f7-c2386bfc4da7", "author": "Terry Pratchett", "series": null, "name": "Thief of Time" }, { "id": "d776ab4d-a547-44d2-b996-e9e8aa7d893f", "author": "Terry Pratchett", "series": null, "name": "A Hat Full Of Sky" }, { "id": "4a99cc75-0e41-43ea-8815-00aeea817905", "author": "Terry Pratchett", "series": null, "name": "Feet of Clay" }, { "id": "646ac540-0110-4d5f-80d8-6b51e1b72638", "author": "Terry Pratchett", "series": "Discworld", "name": "Witches Abroad" }, { "id": "417fd6be-c978-40e3-b39d-a0ad1d05dfa8", "author": "Terry Pratchett", "series": null, "name": "Going Postal" }, { "id": "370f3a2a-359e-4c76-9887-ff4588fd17e7", "author": "Terry Pratchett", "series": "Discworld", "name": "Wyrd Sisters" }, { "id": "958d8faa-9c7c-4bca-b973-a1c0eb079f88", "author": "Terry Pratchett", "series": null, "name": "Eric" }, { "id": "6f8dcb6a-9fd7-41ea-91e9-ee27a092d320", "author": "Terry Pratchett & Jacqueline Simpson", "series": "Discworld", "name": "The Folklore of Discworld" }, { "id": "b2a44cb4-1f5b-435e-a848-54ee2bb9319a", "author": "Terry Pratchett", "series": "Discworld", "name": "Jingo" }, { "id": "e2fd364d-6842-440d-9746-5efc1bef4368", "author": "Terry Pratchett", "series": null, "name": "The dark side of the sun" }, { "id": "68eff794-869e-42f7-bb11-d40f47e78391", "author": "Terry Pratchett", "series": "Discworld", "name": "Small Gods" }, { "id": "caa3cbbb-e141-44ff-8d59-6952c8c59fb8", "author": "Terry Pratchett", "series": "Discworld", "name": "The Last Continent" }, { "id": "dc1db446-bb4e-4bd4-83da-465f3bd64dec", "author": "Terry Pratchett", "series": "Discworld", "name": "Hogfather" }, { "id": "5ee14e8f-e6fb-4e15-a861-638e3256e081", "author": "Terry Pratchett", "series": "Discworld", "name": "Interesting Times" }, { "id": "acf8c7af-34aa-4826-b01f-3bc6e565dcce", "author": "Terry Pratchett", "series": "Discworld", "name": "The Colour of Magic" }, { "id": "28ee70df-02fb-4dda-802e-f914c5e41786", "author": "Terry Pratchett", "series": null, "name": "Maskerade" }, { "id": "ad685b64-f492-452c-abf6-4f1c7f5ecf74", "author": "Terry Pratchett", "series": "Discworld", "name": "Moving Pictures" }, { "id": "3e158f60-ab9d-434a-865e-752b424fb326", "author": "Terry Pratchett", "series": null, "name": "The Wit & Wisdom of Discworld" }, { "id": "17e2922e-40ef-46b0-84cf-ee55d66511df", "author": "Terry Pratchett", "series": "Discworld", "name": "Soul Music" }, { "id": "6af794bb-0394-42bf-90db-ff5255863114", "author": "Terry Pratchett", "series": "Discworld", "name": "Thud!" }, { "id": "1c71cd7e-dad8-49b0-a68e-e08625ec0c52", "author": "Terry Pratchett", "series": "Discworld", "name": "Equal Rites" }, { "id": "b59a02c7-e357-4db7-aef6-46c18f4629ea", "author": "Terry Pratchett", "series": null, "name": "Reaper Man" }, { "id": "216b6b11-b93a-4821-affb-4ea6f51c5787", "author": "Terry Pratchett", "series": null, "name": "Making Money" }, { "id": "e01e65b7-ee9e-47d2-8540-7e8682bcf77d", "author": "Terry Pratchett", "series": null, "name": "The Fifth Elephant" }, { "id": "fbaa8768-ab56-4883-9982-a162d5d98a9d", "author": "Terry Pratchett", "series": null, "name": "The Wee Free Men" }, { "id": "085fc46b-daf6-4e03-86f8-5e936b1c70cb", "author": "Terry Pratchett", "series": null, "name": "The Amazing Maurice and His Educated Rodents" }, { "id": "1f84ce0d-a051-478a-b044-5dba46586c65", "author": "Terry Pratchett", "series": null, "name": "Night Watch" }, { "id": "2a46e2b8-2610-46e4-8dca-27ac6d4d7ca8", "author": "Terry Pratchett", "series": "Discworld: Tiffany Aching", "name": "I Shall Wear Midnight" }, { "id": "58929cc0-d79d-49ef-a80c-b2f39b56430f", "author": "Terry Pratchett", "series": "Discworld: Young Adult", "name": "Wintersmith" }, { "id": "1d5afd09-ad90-4cfd-8e25-845d4c0a5cda", "author": "Terry Pratchett", "series": "Discworld", "name": "Sourcery" }, { "id": "94664071-335b-4ba1-8b1e-b3379ed36ae7", "author": "Terry Pratchett", "series": "Discworld", "name": "Mort" }, { "id": "89eacebd-efa3-4a5c-8eb7-e149519e121c", "author": "Terry Pratchett", "series": null, "name": "The Last Hero" }, { "id": "f9c275e2-5846-4bbf-ac03-121e225ea190", "author": "Terry Pratchett", "series": "Discworld", "name": "Unseen Academicals" }, { "id": "ef850e33-0bb0-4f54-9242-970e433ec9ce", "author": "Terry Pratchett", "series": "Discworld", "name": "Pyramids" }, { "id": "2a897aff-5805-46d5-9ed9-6e2217edacf1", "author": "Terry Brooks", "series": null, "name": "The Sword of Shannara" }, { "id": "d5d3a6d7-6fb5-4944-b892-0a00799fb619", "author": "Terry Brooks", "series": null, "name": "High druid of Shannara: Jarka Ruus" }, { "id": "2ad9697c-3ae0-459f-a82e-f3c23361948e", "author": "Terry Brooks", "series": null, "name": "Bearers of the Black Staff" }, { "id": "c9e581ba-4138-45b0-88da-879406fe7606", "author": "Terry Brooks", "series": null, "name": "Running with the Demon" }, { "id": "41cd365b-1d30-4020-be2d-035ed7f812d3", "author": "Terry Brooks", "series": null, "name": "Ilse Witch" }, { "id": "b13c1782-5104-450d-a07f-d95e3dd6e76d", "author": "Terry Brooks", "series": null, "name": "Armageddon's Children" }, { "id": "5e2e5fa2-2034-4c93-a7a0-92915b4b59af", "author": "Terry Brooks", "series": null, "name": "The First King of Shannara" }],
          iter: null,
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.isActive = this.isActive.bind(this)
        this.cursorDown = this.cursorDown.bind(this)
        this.cursorUp = this.cursorUp.bind(this)
        this.displayResult = this.displayResult.bind(this)
    }

    handleChange(event) {
      this.setState({ searchTerm: event.target.value });
      if (event.target.value.length === 0){
        this.props.onResetResults()
      }
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
