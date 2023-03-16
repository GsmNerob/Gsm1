package upskill.amazon.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AmazonSearchResultLocators {

	//Validate Shoes Items
	@FindBy(xpath="//span[2][contains(text(), 'Shoes')]")
	public WebElement txtShoes;
}
