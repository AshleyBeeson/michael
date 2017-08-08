----README-----

Current status: Website runs and mostly functions as required.

	-------------------------------------------------------------------------

To run site:
	Aquire files (via email) - unzip in a folder.
	Ensure correct and valid version of node.js is installed - download if not.
	Using node.js command line, open this from the search menu on the start bar, navigate to the folder where the files where unziped too. (use the 'cd' command)
	Aquire Robo3t and create a new database called "bugs"
	Create a new collection called "Bug"
	Copy in the Bugs.json to create the data
	Once at main directory, use command: npm install
	This will install the required packages to run the site	
	Once complete run the command: npm start or node app		
	Once this has completed open up an internet browser and navigate to: localhost:8080 -use top search bar and type in localhost:8080)
	this should load up the site.
	
	-------------------------------------------------------------------------
	
How to use: The selection tabs across the top will display different lists depending upon selection.
			
			If there is no bugs with a select severity then none shall be displayed.
			
			~~~~currently there is a bug, after checking each list you are required to navigate to the "All bugs" list, in order for the site to work correctly - update coming soon (hopefully) ~~~
			
			Using the ACTIONS button on the bug boxes will show you the actions taken by people regarding that bug - there is next and previous buttons to navigate between actions. If no action has been taken then the actions button will seem none responsive.
			
			Using the VEIW button will take you back to the default veiw showing the description and summary of the bug.
			
			Currently the 'EDIT' button show edit in the console - requires updated
			
			The ADD BUG button will take you to a page where you can add details for a bug - however it will not yet add a bug. Use the other buttons to navigate back to the list

	-------------------------------------------------------------------------

To run the test:
	kamra and Jasmine should have been automaticaly installed when running npm install command
	Run node command and navigate to the main directory of the folder
	then naviagate to /node_modules/karma/bin
	and run the command karma start