package upskill.ebay.stepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import upskill.ebay.pageAction.ShettyHomepageActions;

public class ShettyHomepageSteps {
	
	@When("^Click on iFrame Home$")
	public void click_on_iFrame_Home() throws Throwable {
	   
	}

	@Then("^It should reload iframe homepage$")
	public void it_should_reload_iframe_homepage() throws Throwable {
	}

	ShettyHomepageActions ShettyHomepageActionsObj = new ShettyHomepageActions();
	  @Given("^Open Shetty Homepage$")
	    public void open_Shetty_Homepage() throws Throwable {
	      ShettyHomepageActionsObj.loadShettyHomepage();
	    }

	  @When("^Click on Alert and click on ok$")
	    public void click_on_Alert_and_click_on_ok() throws Throwable {
		   ShettyHomepageActionsObj.clickOk();
	    }

	    @Then("^Click on Confirm and click on cancel$")
	    public void Click_on_Confirm_and_click_on_cancel() throws Throwable {
	   	    ShettyHomepageActionsObj.clickCancel();

	    }
}


	  