@regression @smoke @SKYW-15 @E2E
Feature: Amazon Search Functionality

	Scenario: Search for Shoes
		Given Open Amazon Homepage
		When Search for shoes
		Then Item list should have only shoes related products
	
	