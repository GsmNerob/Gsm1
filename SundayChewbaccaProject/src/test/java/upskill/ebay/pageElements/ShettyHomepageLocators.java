package upskill.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ShettyHomepageLocators {
	
	// Alert Button
	@FindBy(xpath="//input[@id='alertbtn']")
	public WebElement Alertbtn;
	
	
	// Confirm Button
	@FindBy(xpath="//input[@id='confirmbtn']")
	public WebElement Confirmbtn;
	
	//Home button
	@FindBy(xpath="//*[contains(text(),'Home')]")
	public WebElement btnHome;
	

}
