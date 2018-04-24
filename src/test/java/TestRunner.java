package test.java;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features = "features", glue = "test.java.steps", monochrome = true, snippets = SnippetType.CAMELCASE, plugin = {
		"pretty", "html:target/cucumber-report/cucumber-pretty-html",
		"json:target/cucumber-report/cucumber-pretty-report.json" })
public class TestRunner {

}
