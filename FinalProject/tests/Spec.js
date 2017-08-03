import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Home from '../src/components/pages/Home';
import Filters from '../src/components/functions/Filters';

describe('Title:', function(){
	
	var Home = TestUtils.renderIntoDocument(
			<Home />
		);
		
	it('shows the title', function();
		let reference = Home.refs.title;
		expect(ReactDOM.findDOMNode(reference).textContent).toEqual("Bug Tracker");
	});	
	
	var Filters = TestUtils.renderIntoDocument(
			<Filters />
		);
		
	it('show the all bugs button', function();
		let reference = Filters.refs.showAllButton;
		expect(ReactDOM.findDOMNode(reference).textContent).toEqual("ALL BUGS");	
	});	
});




