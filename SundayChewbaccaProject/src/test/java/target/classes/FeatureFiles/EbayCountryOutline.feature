@regression @smoke @us-247
Feature: Ebay Country Outline

Description: User should able to filter items by Country

	Background: 
		Given Open Ebay Homepage
		
		Scenario Outline: Filter items by Country
		Given Search for "<Items>"
		When Region of Manufacture by "<Country>"
		Then Item list should be from "<Country>"
	
	Examples:
		|Items		|Country		|
		|Shoes		|China			|
		|Shirts		|Bangladesh		|
		|Pants		|United States	|
		