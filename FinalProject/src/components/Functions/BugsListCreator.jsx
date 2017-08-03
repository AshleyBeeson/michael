import React, { Component } from 'react';
import BugListItem from './bugListItem';
import Edit from './Edit';

export default class BugListCreator extends React.Component{
	
	//this class is used to set out the bugs on the page, it utilizes a map function to display the bugs in order of ID.
	constructor(props){
		super(props)
		this.state={
			isActive:false,
			bugList:this.props.bugList,
			editIsActive:false,
			showEditView: this.showEditView.bind(this),
			closeEdit : this.closeEdit.bind(this),
			
			bugId : '',
			bugDate : '',
			bugSum : '',
			bugDesc : '',
			bugReporter : '',
			bugStatus : '',
			bugUser : '',
			bugPriority : '',
			bugSeverity : '',
		}
	}
	
	//method used to show the edit view for a bug
	showEditView(bugId, bugDate, bugSum, bugDesc, bugPriority,
				bugSeverity, bugReporter, bugUser){
		this.setState({editIsActive: true,
					bugId : bugId,
					bugDate : bugDate,
					bugSum : bugSum,
					bugDesc : bugDesc,
					bugReporter : bugReporter,
					bugPriority : bugPriority,
					bugSeverity : bugSeverity,
					bugUser : bugUser});
	}
	
	closeEdit(){
		this.setState({editIsActive: false})
	}
	
	
	render() {
		const bugList = this.props.bugList;
		return (
		<div>
			{this.state.editIsActive ? 
				<div><Edit 
						closeEdit ={this.state.closeEdit}
						bugId = {this.state.bugId}
						bugDate = {this.state.bugDate}
						bugSum = {this.state.bugSum}
						bugDesc = {this.state.bugDesc}
						bugReporter = {this.state.bugReporter}
						bugPriority = {this.state.bugPriority}
						bugSeverity = {this.state.bugSeverity}
						bugUser = {this.state.bugUser}/></div>
			: 
			<div>
				{bugList.map((bug) =>
				<BugListItem key={bug.id}
						bug={bugList[bug.id-1]}
						showEditView={this.state.showEditView} />)} 
				<div className="spacer">Created by: Michael Green </div>
			</div>
			}
		</div>
		);
	}
}

	