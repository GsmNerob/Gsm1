package upskill.drugs.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ExpressHomepageLocators {
	
			
	//Search Pay Bill
			@FindBy(xpath="/html/body/div[12]/div")
			public WebElement btxSearch;
			

	//Search Pay Bill
	    	@FindBy(xpath="(//div[contains(text(),'Pay Your Bill')])[2]")
			public WebElement cbxSearch;
					

}
