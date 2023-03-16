package upskill.drugs.pageAction;

import org.openqa.selenium.support.PageFactory;

import upskill.drugs.pageElements.ExpressHomepageLocators;
import upskill.utilities.SetupDrivers;

public class ExpressHomepageActions {
	
	ExpressHomepageLocators ExpressHomepageLocatorsObj;
	
	public ExpressHomepageActions(){
		ExpressHomepageLocatorsObj = new ExpressHomepageLocators();
		PageFactory.initElements(SetupDrivers.driver,ExpressHomepageLocatorsObj);
		
	}

}
