package upskill.drugs.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DrugsHomepageLocators {
	
	
	//Validate NewDrugs Items
	@FindBy(xpath="//*[@id=]/div[1]/nav[1]/ul/li[4]//a")
	public WebElement cbxNewDrugs;
	
	//Validate ProEdition Items
		@FindBy(xpath="//*[@id=]/div[1]/nav[1]/ul/li[5]/a")
		public WebElement cbxProEdition;
}

