import React, { Component } from 'react';
import bugsJSON from './../../JSON/bugs.json';

export default class BugListItem extends React.Component{
	
	//constructor for this class
	constructor(){
		super()
		this.state={
			bugList:bugsJSON.bugs,
			independentBug:[],
			isActive:true,
			index:0,
		}
	}
	
	//this method auto sets the view to be on the view bug tab, and sets the index to 0, so when changing over to the actions tab, it displayes the first action in the array
	componentDidMount(){
		this.viewBug();
		this.setState({index: 0});
	}
	
	//Method to ensure view bug tab is open and sets the state independentBug to be an array
	viewBug(){
		this.setState({isActive : true})
		this.setState({independentBug:this.state.bugList[this.props.bug.id-1]})
	}
	
	//Method for running the edit page
	runEdit(){
		var bugId = this.state.independentBug.id;
		var bugDate = this.state.independentBug.dateCreated;
		var bugSum = this.state.independentBug.summary;
		var bugDesc = this.state.independentBug.description;
		var bugPriority = this.state.independentBug.highPriority;
		var bugSeverity = this.state.independentBug.severity;
		var bugReporter = this.state.independentBug.reporter;
		var bugUser = this.state.independentBug.assignedUser;
		this.props.showEditView(bugId, bugDate, bugSum, bugDesc, bugPriority,
								bugSeverity, bugReporter, bugUser);
	}
	
	//method for showing the actions tab.
	actions(){
		this.setState({isActive : false})
	}
	
	//Method to cycle up through the actions preformed on each bug
	nextAction(){
		if(this.state.index != this.state.independentBug.actions.length-1)
		this.setState({index : this.state.index + 1})
	}
	
	//Method to cycle down through the actions preformed on each bug
	previousAction(){
		if(this.state.index != 0){
			this.setState({index : this.state.index - 1})
		}
	}

	//render method for this class. This compromises of a tenery operator to display either the bug view or the actions view. The action view contains buttons to select the next or previus action in the list
	render(){
		const bug = this.props.bug;
		return(
			<div>
			{this.state.isActive ? 
				
				<div className="demo-card-wide mdl-card mdl-shadow--2dp" id="independentBugItems">
				<div className="mdl-card__title-text">
					Reporter: {this.state.independentBug.reporter}
				</div>
				<div className="mdl-card__supporting-text">
					Date created: {this.state.independentBug.dateCreated}
					<p>Summary: {this.state.independentBug.summary}</p>
					Description: {this.state.independentBug.description}
				</div>
				<div className="mdl-card__supporting-text" id="extraSideInfo">
					Severity: {this.state.independentBug.severity}
					<p />
					Status: {this.state.independentBug.status}
					<p />
					High Priority: {this.state.independentBug.highPriority}
				</div>
					<div id="ButtonsInBugBoxes">
						<button className="mdl-button mdl-js-button mdl-button--raised" id="veiwBugButton" onClick={this.viewBug.bind(this)}> Veiw Bug</button>
						
						<button className="mdl-button mdl-js-button mdl-button--raised" id="veiwEditButton" onClick={this.runEdit.bind(this)}>Edit</button>
						
						<button className="mdl-button mdl-js-button mdl-button--raised" id="veiwActionsButton" onClick={this.actions.bind(this)}>Actions</button>
					</div>
				</div>
			:
			
			<div className="demo-card-wide mdl-card mdl-shadow--2dp" id="independentBugItems">
				<div className="mdl-card__title-text">
					Reporter: {this.state.independentBug.reporter}
				</div>
				<div className="mdl-card__supporting-text">
					User: {this.state.independentBug.actions[this.state.index].user}
					<p />
					Action: {this.state.independentBug.actions[this.state.index].action}
					<button onClick={this.nextAction.bind(this)}
							className="mdl-button mdl-js-button mdl-button--raised" 
							id="nextActionButton" >next</button>
					<button onClick={this.previousAction.bind(this)}
							className="mdl-button mdl-js-button mdl-button--raised" 
							id="previousActionButton">previous</button>
				</div>
				
				<div className="mdl-card__supporting-text" id="extraSideInfo">
					Severity: {this.state.independentBug.severity}
					<p />
					Status: {this.state.independentBug.status}
					<p />
				</div>
				<div id="ButtonsInBugBoxes">
					<button className="mdl-button mdl-js-button mdl-button--raised" id="veiwBugButton" onClick={this.viewBug.bind(this)}> Veiw Bug</button>
				
					<button className="mdl-button mdl-js-button mdl-button--raised" id="veiwEditButton" onClick={this.runEdit.bind(this)}>Edit</button>

					<button className="mdl-button mdl-js-button mdl-button--raised" id="veiwActionsButton" onClick={this.actions.bind(this)}>Actions</button>
				</div>
			</div>}
			
		</div>
		);
	}
}