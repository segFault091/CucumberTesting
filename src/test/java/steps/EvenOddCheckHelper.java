package test.java.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class EvenOddCheckHelper {
	private int value;

	@Given("^test (\\d+)$")
	public void test(int value) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		this.value = value;
	}

	@Then("^check (.+)$")
	public void checkStatus(String status) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		boolean isEven = (value % 2 == 0);
		boolean expectedStatus ;
		if (status.toLowerCase().equals("success"))  
			expectedStatus=true ;
		else if (status.toLowerCase().equals("fail"))
			expectedStatus=false;
		else
			throw new Exception("unknown status :"+status);
		Assert.assertEquals("Condition Failed", expectedStatus, isEven);
	}

}
