import { observable, action, computed } from 'mobx';


class Store {

	
	@observable id;

	constructor(){
	}
	@action setState = state => Object.assign(this, state);
	
}

export default new Store();
