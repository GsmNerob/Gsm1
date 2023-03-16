@regression @smoke @SKYW-15 @E2E
Feature: Ebay Search Functionality

	Background: 
		Given Open Ebay Homepage
		
	Scenario: Search for Shirt
		When Search for shirt
		Then Item list should have only shirt related products
		