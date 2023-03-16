@regression @smoke @SKYW-15 @E2E
Feature: Apple Search Functionality

	Scenario: Search for Iphone
		Given Open Apple Homepage
		When Search for iphone
		Then Item list should have only iphone related products
	
	