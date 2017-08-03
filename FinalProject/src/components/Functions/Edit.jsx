import React, { Component } from 'react';

export default class Edit extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
		}
	}
	
	//method to close the edit view
	closeEdit(){
		this.props.closeEdit();
	}
	
	render(){
		return(
		<div className="EditFormDivision">
			<div> Edit Bugs </div>
			<form>
				<div>Bug id: {this.props.bugId}</div>
				<div>Date created: {this.props.bugDate}</div>
				<p>Summary of the bug:
				<input type="String" placeholder={this.props.bugSum} 
				className="mdl-textfield__input" id="editForm" /></p>
				<p>Description of the bug:
				<input type="String" placeholder={this.props.bugDesc}
				className="mdl-textfield__input" id="editForm"/></p>
				<p>Priority of the bug:
				<input type="String" placeholder={this.props.bugPriority}
				className="mdl-textfield__input" id="editForm"/></p>
				<p>Severity of the bug:
				<input type="String" placeholder={this.props.bugSeverity}
				className="mdl-textfield__input" id="editForm"/></p>
				<p>Who reported the bug:
				<input type="String" placeholder={this.props.bugReporter}
				className="mdl-textfield__input" id="editForm"/></p>
				<p>Who is assigned to the bug:
				<input type="String" placeholder={this.props.bugUser}
				className="mdl-textfield__input" id="editForm"/></p>
				
				<button className="mdl-button mdl-js-button mdl-button--raised" >Submit </button>
			</form>
			<button className="mdl-button mdl-js-button mdl-button--raised"
			onClick ={this.closeEdit.bind(this)}>Close </button>
		</div>
		);
	}
}