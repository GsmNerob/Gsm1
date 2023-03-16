package upskill.amazon.pageAction;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.support.PageFactory;

import upskill.amazon.pageElements.AmazonHomepageLocators;
import upskill.utilities.SetupDrivers;

public class AmazonHomepageActions {
	
	AmazonHomepageLocators AmazonHomepageLocatorsObj;
	
	public AmazonHomepageActions(){
		AmazonHomepageLocatorsObj = new AmazonHomepageLocators();
		PageFactory.initElements(SetupDrivers.driver, AmazonHomepageLocatorsObj);
	}
	
	
	public void loadHomepage(){
//		SetupDrivers.driver.get("https://www.amazon.com/");											//loading the page
		
//		Selenium Wait : 1. Implicit wait(Global), 2. Explicit wait(Conditional), 3. Fluent wait(intermittent)

		SetupDrivers.driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);				//Implicit Wait
		
//		WebDriverWait wait = new WebDriverWait(SetupDrivers.driver, 20);
//		wait.until(ExpectedConditions.elementToBeClickable(EbayHomepageLocatorsObj.txtbxSearch));	//Explicit wait
//		
//		FluentWait fluentWait = new FluentWait(SetupDrivers.driver);								//Fluent Wait
//						fluentWait.withTimeout(20, TimeUnit.SECONDS);
//						fluentWait.pollingEvery(5, TimeUnit.SECONDS);
//						fluentWait.ignoring(NoSuchElementException.class);
//						fluentWait.withMessage("Fluent Wait Time exceeded");
	}
	
	public void searchShoes(){
	   AmazonHomepageLocatorsObj.txtbxSearch.sendKeys("shoes");
	   AmazonHomepageLocatorsObj.btnSearch.click();

   }
 }