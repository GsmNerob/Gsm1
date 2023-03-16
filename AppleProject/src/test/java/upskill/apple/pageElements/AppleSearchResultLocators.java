package upskill.apple.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AppleSearchResultLocators {
	
	//Validate Iphone Items
		@FindBy(xpath="//span[2][contains(text(),'iphone')]")
		public WebElement txtIphone;
	}


