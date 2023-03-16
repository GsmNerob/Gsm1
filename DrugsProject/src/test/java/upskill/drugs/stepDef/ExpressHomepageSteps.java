package upskill.drugs.stepDef;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import upskill.drugs.pageAction.ExpressHomepageActions;

public class ExpressHomepageSteps {
	
	ExpressHomepageActions ExpressHomepageActionsObj = new ExpressHomepageActions();


@Given("^Open Express Homepage$")
public void open_Express_Homepage() throws Throwable {
	ExpressHomepageActionsObj.hashCode();
    
}

@When("^Click on Express Insider$")
public void click_on_Express_Insider() throws Throwable {
	ExpressHomepageActionsObj.hashCode();
   
}

@Then("^Click on Pay Your Bill$")
public void click_on_Pay_Your_Bill() throws Throwable {
	ExpressHomepageActionsObj.hashCode();
}
}
