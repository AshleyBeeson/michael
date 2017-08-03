import React from 'react';
import bugsJSON from './../../JSON/bugs.json';

export default class Add extends React.Component{
	
	//constructor for this class, allowing data from input boxes to be used in other places
	constructor(){
		super()
		this.state={
		bugId : '',
		bugSum : 'Bug Summary',
		bugDesc : 'Bug description',
		bugHighPriority : 'is Bug High Priority',
		bugSeverity : 'Bug severity',
		bugReporter : 'Bug reporter',
		bugAssignedUser : 'Assigned User',
		}
	}
	
	//Autosets the bug id for any new bugs, this is to stop there being multiple bugs with the same id.
	componentDidMount(){
		this.setState({bugId : bugsJSON.bugs.length+1})
	}
	
	//methods to handle when the input boxes are changed.
	handleChangeSum(e){
		this.setState({bugSum : e.target.value})
	}
	handleChangeDesc(e){
		this.setState({bugDesc : e.target.value})
	}
	handleChangePriorityTrue(e){
		this.setState({bugHighPriority : e.target.value})
	}
	handleChangePriorityFalse(e){
		this.setState({bugHighPriority : e.target.value})
	}
	handleChangeSeverity(e){
		this.setState({bugSeverity : e.target.value})
	}
	handleChangeReporter(e){
		this.setState({bugReporter : e.target.value})
	}
	handleChangeUser(e){
		this.setState({bugAssignedUser : e.target.value})
	}
	
	//Method to convert inputed date in to JSON style, and combine with all other data. This method currently leaves the data in a JSON format, just need to write it to a file.
	submitBug(){
		var JSONformat = ',{"id":"' + this.state.bugId + '","summary":"' + this.state.bugSum + '","description":"'+ this.state.bugDesc + '","highPriority":"' + this.state.bugHighPriority + '","severity":"' + this.state.bugSeverity +'","reporter":"' + this.state.bugReporter + '","assignedUser":"' + this.state.bugAssignedUser +'"}' ;
		console.log(JSONformat);
		var tempBugString = JSON.stringify(bugsJSON);
		var newtempBugString = tempBugString.substring(0, tempBugString.length-2)
		tempBugString = newtempBugString + JSONformat + ']}' ;
		console.log(tempBugString)
		var newJson = JSON.parse(tempBugString);
		console.log(newJson);
		fs.writeFile('./../JSON/bugs.json' , newJson);
		
	}
	
	closeAdd(){
		this.props.closeAdd();
	}
	
	//render method for this class. Contains a form with all the input boxes displayed to the user.
	render(){
		return(
			<div className="addFormDiv">
			<form className="addFormBox">
			<ul className="mdl-list">
				<li className="mdl-list__item">
					<span className="mdl-list__item-primary-content">
						Id: {this.state.bugId}
					</span>
				</li>
				
				<li className="mdl-list__item">
					<span className="mdl-list__item-primary-content">
						Summary of the bug:
						<input type="String" placeholder= {this.state.bugSum}   onChange={this.handleChangeSum.bind(this)}
						className="mdl-textfield__input"/>
					</span>
				</li>
				
				<li className="mdl-list__item">
					<span className="mdl-list__item-primary-content">
						Description of the bug:
						<input type="String" placeholder= {this.state.bugDesc} 
						onChange={this.handleChangeDesc.bind(this)}
						className="mdl-textfield__input"/>
					</span>
				</li>
				
				<li className="mdl-list__item">
					<span className="mdl-list__item-primary-content">
						State the Priority of the bug:
						
						<div className="radio">
							<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-1">
								  <input type="radio" id="option-1" className="mdl-radio__button" name="options" value="TRUE" 
								  onClick={this.handleChangePriorityTrue.bind(this)}
								  />
								  <span className="mdl-radio__label">True</span>
							</label>
							<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-2">
								  <input type="radio" id="option-2" className="mdl-radio__button" name="options" value="FALSE" 
								  onClick={this.handleChangePriorityFalse.bind(this)}/>
								  <span className="mdl-radio__label">False</span>
							</label>
						</div>
					</span>
				</li>
				
				<li className="mdl-list__item">
					<span className="mdl-list__item-primary-content">
						What is the severity of the bug: Either HIGH, MEDIUM or LOW <input type="String" placeholder= {this.state.bugSeverity} 
						onChange={this.handleChangeSeverity.bind(this)}
						className="mdl-textfield__input"/>
					</span>
				</li>
				
				<li className="mdl-list__item">
					<span className="mdl-list__item-primary-content">
						Who reported the bug:<input type="String" placeholder= {this.state.bugReporter} 
						onChange={this.handleChangeReporter.bind(this)}
						className="mdl-textfield__input"/>
					</span>
				</li>
				
				<li className="mdl-list__item">
					<span className="mdl-list__item-primary-content">
						Who is assigned to fix the bug:<input type="String" placeholder= {this.state.bugAssignedUser} 
						onChange={this.handleChangeUser.bind(this)}
						className="mdl-textfield__input"/>
					</span>
				</li>
			</ul>
			</form>
			<button className="mdl-button mdl-js-button mdl-button--raised"
			onClick ={this.closeAdd.bind(this)}>Close </button>
			<button onClick={this.submitBug.bind(this)} className="mdl-button mdl-js-button mdl-button--raised"> Submit </button>
			</div>
		);
	}
}