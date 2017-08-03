import React, { Component } from 'react';
import BugListCreator from '../functions/BugsListCreator';
import Filters from '../functions/filters';
import Add from './Add';

export default class Home extends React.Component{
	
	//constructor for this class, Methods are defined here to be passed to other classes so can be called from different places.
	constructor(){
		super();
		this.state={
			bugList : [],
			allBugs : [],
			showAll : this.showAll.bind(this),
			showHighSev : this.showHighSev.bind(this),
			showMedSev : this.showMedSev.bind(this),
			showLowSev : this.showLowSev.bind(this),
			showAdd : this.showAdd.bind(this),
			showHighPriority : this.showHighPriority.bind(this),
			addActive : false,
			closeAdd : this.closeAdd.bind(this),
		}
	}

	getData() {
		fetch("/api/bugs")
		.then(data => data.json())
		.then(data => {
			this.setState({allBugs : data})
		});
	}
		
	componentWillMount() {
		this.getData();
	}
	
	componentDidMount(){
		this.showAll();
	}

	
	//Method to show all the bugs in the JSON file. This is done by looping through the JSON and adding each element to an array, when done the updateBugList method is called - see updateBugList method below for more info.
	showAll(){
		var tempBugList =[];
		for(let i =0; i<this.state.allBugs.length; i++){
			tempBugList.push(this.state.allBugs[i])
		}
		this.updateBugList(tempBugList);
	}
	
	//Called from the filters class, this method searches through the JSON for bugs were severity is set to "MEDIUM", these bugs are then shown.
	showMedSev(){
		var tempMedBugList =[];
		for(let i =0; i < this.state.allBugs.length; i++){
			if(this.state.allBugs[i].severity === "MEDIUM"){
				tempMedBugList.push(this.state.allBugs[i]);
			}
			else{
				continue
			}
		}
		this.updateBugList(tempMedBugList);
	}
	
	//Called from the filters class, this method searches through the JSON for bugs were severity is set to "HIGH", these bugs are then shown.
	showHighSev(){
		var tempMedBugList =[];
		for(let i =0; i < this.state.allBugs.length; i++){
			if(this.state.allBugs[i].severity === "HIGH"){
				tempMedBugList.push(this.state.allBugs[i]);
			}
			else{
				continue
			}
		}
		this.updateBugList(tempMedBugList);
	}
	
	
	
	//Called from the filters class, this method searches through the JSON for bugs were severity is set to "LOW", these bugs are then shown.
	showLowSev(){
		var tempMedBugList =[];
		for(let i =0; i < this.state.allBugs.length; i++){
			if(this.state.allBugs[i].severity === "LOW"){
				tempMedBugList.push(this.state.allBugs[i]);
			}
			else{
				continue
			}
		}
		this.updateBugList(tempMedBugList);
	}
	
	//this method takes in an array and sets the bugList state to equal that array, this is then shown on the page.
	updateBugList(currentBugs){
		this.setState({bugList : currentBugs});
		this.setState({addActive:false});				
		this.forceUpdate()
	}
	
	//this method is called when the radio button is set to 'True', this will then show all bugs with true as High priority.
	showHighPriority(){
		var tempBugList =[];
		for(let i =0; i<this.state.allBugs.length; i++){
			if(this.state.allBugs[i].highPriority === "TRUE"){
				tempBugList.push(this.state.allBugs[i])
			}
		}
		this.updateBugList(tempBugList); 
	}
	
	//methods from opening and closing the add bug page
	showAdd(){
		this.setState({addActive:true})
		this.forceUpdate();
	}
	closeAdd(){
		this.setState({addActive:false})
		this.forceUpdate();
	}
	
	render(){
		return(
		<div>
			<h3 className="BugTrackerHeader" ref="title"> Bug Tracker </h3>
			<Filters showAll={this.state.showAll} 
					showHighSev={this.state.showHighSev} 
					showMedSev={this.state.showMedSev} 
					showLowSev={this.state.showLowSev}
					showAdd={this.state.showAdd}
					showHighPriority = {this.state.showHighPriority}/>
			<p></p>
				
			<div>
			{this.state.addActive ? <Add closeAdd={this.state.closeAdd}/> : <BugListCreator bugList={this.state.bugList} /> }
			</div>
		</div>
		);
	}
}