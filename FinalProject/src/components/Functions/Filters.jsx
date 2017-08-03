import React, { Component } from 'react';

export default class Filters extends React.Component{
	
	constructor(){
		super();
		this.state={
			
		}
	}
	
	//methods to call methods from the Home.jsx when buttons are clicked
	showAll(){
		this.props.showAll();
	}

	showHighSev(){
		this.props.showHighSev();
	}
	
	showMedSev(){
		this.props.showMedSev();
	}
	
	showLowSev(){
		this.props.showLowSev();
	}
	
	showHighPriority(){
		this.props.showHighPriority();
	}

	showAdd(){
		this.props.showAdd();
	}
	
	refresh(){
		window.location.reload();
	}
	
	
	// render method for this class, includes: 
		//radio buttons for selecting High priority or not
		//Buttons to show bugs of a certain severity
		//a button to show the add bug page
	render(){
		return(
		<div>
		
			<div className="radioButtonDiv">
				High Priority?
				<div className="radio">
					<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-1">
						  <input type="radio" id="option-1" className="mdl-radio__button" name="options" value="1" 
						  onClick={this.showHighPriority.bind(this)}
						  />
						  <span className="mdl-radio__label">True</span>
					</label>
					<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-2">
						  <input type="radio" id="option-2" className="mdl-radio__button" name="options" value="2" 
						  onClick={this.showAll.bind(this)}/>
						  <span className="mdl-radio__label">Any Priority</span>
					</label>
				</div>
			</div>
		<div id="mainFilterButtons">
			<button className="mdl-button mdl-js-button mdl-button--raised" 
			onClick={this.showAll.bind(this)} id="filterButtons" ref="showAllButton">
			All bugs</button>
			
			<button className="mdl-button mdl-js-button mdl-button--raised"  
			onClick={this.showHighSev.bind(this)} id="filterButtons">
			High Severity Bugs</button>
			
			<button className="mdl-button mdl-js-button mdl-button--raised"  
			onClick={this.showMedSev.bind(this)} id="filterButtons">
			Medium Severity Bugs</button>
			
			<button  className="mdl-button mdl-js-button mdl-button--raised" 
			onClick={this.showLowSev.bind(this)} id="filterButtons">
			Low Severity Bugs </button>
			
			<button  className="mdl-button mdl-js-button mdl-button--raised" 
			onClick={this.showAdd.bind(this)} id="filterButtons" >
			Add bug </button>
			
			<button  className="mdl-button mdl-js-button mdl-button--raised" 
			onClick={this.refresh.bind(this)} id="refreshFilterButton" >
			Reset Data</button>
			
		</div>
		</div>
		);
	}
}