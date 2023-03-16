package upskill.amazon.pageAction;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import upskill.amazon.pageElements.AmazonHomepageLocators;
import upskill.utilities.SetupDrivers;

public class AmazonSearchResultActions {
	
	AmazonSearchResultActions AmazonSearchResultActionsObj;
	
	public AmazonSearchResultActions(){
		AmazonSearchResultActionsObj = new AmazonSearchResultActions();
		PageFactory.initElements(SetupDrivers.driver, AmazonSearchResultActionsObj);
		
	}
	public void verifyShoesItems(){
		//Option 1
		Assert.assertEquals("shoes", AmazonSearchResultActionsObj.txtShoes.getText());
		
		
		//Option 2
		Assert.assertTrue(AmazonSearchResultActionsObj.txtShoes.isDisplayed());
	   
	}
	
}
