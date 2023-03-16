package upskill.amazon.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AmazonHomepageLocators {
	
	//Search Text Box
	@FindBy(xpath="//input[@placeholder='Search for anything']")
	public WebElement txtbxSearch;


//Search Button
	@FindBy(xpath="//input[@value='Search']")
	public WebElement btnSearch;
}



