# <p align="center"> Automated Test Script for Swag Labs using Playwright </p>

<p align="justify">This project involved the development of an automation script using Playwright JS for testing the functionalities of the Swag Labs website (https://www.saucedemo.com/). The script was designed to perform various actions such as logging in, sorting products, adding items to the cart, removing selective items, navigating back to shopping, adding more items, checking out, and completing the online shopping process. This report provides a detailed overview of the project, including the objectives, methodology, and results.</p>

<hr>

### Objectives
<p align="justify">The main objectives of this project were:</p>
 <p align="justify">- To automate the testing of the Swag Labs website using Playwright JS.</p>
 <p align="justify">- To verify the correctness and reliability of key functionalities on the website.</p>
 <p align="justify">- To identify and report any issues or bugs encountered during the automated testing process.</p>

<hr>

### Methodology

#### Environment Setup

    The Playwright JS library was installed and configured.
    A new project directory was created to house the automation script and its dependencies.
    The necessary dependencies, including Playwright and its corresponding browser binaries, were installed.

#### Test Script Development

    A new Playwright JS script file was created.
    The script was divided into multiple functions, each representing a specific action to be performed on the website.
    The script utilized Playwright's APIs and methods to interact with the website's elements and perform various operations.
    Error handling mechanisms were implemented to capture and handle any exceptions or failures during script execution.

#### Test Execution

    The script was executed using the Playwright runner.
    The test script interacted with the Swag Labs website, simulating user actions and verifying the expected outcomes.
    Logging mechanisms were implemented to capture and record important events, actions, and errors during the test execution.

#### Test Cases

Test Case 1: Sort Products from Price (High to Low)

    The script logged in to the Swag Labs website using valid credentials.
    The script navigated to the "Product" page and sorted the products from high to low based on their prices.
    The script verified that the products were correctly sorted.

Test Case 2: Add Items to the Cart

    The script added a predefined set of items to the cart.
    The script verified that the items were successfully added to the cart.

Test Case 3: Remove Selective Items from the Cart

    The script removed specific items from the cart.
    The script verified that the items were successfully removed from the cart.

Test Case 4: Navigate Back to Shopping and Add More Items

    The script navigated back to the shopping page from the cart.
    The script added a few more items to the cart.
    The script verified that the additional items were successfully added to the cart.

Test Case 5: Checkout from Cart

    The script navigated to the cart page.
    The script provided valid customer information for the checkout process.
    The script verified that the checkout process was completed successfully.

<hr>

### Results and Findings

<p align="justify">The automated test script executed successfully, and the desired actions were performed on the Swag Labs website. The following results and findings were observed during the testing:</p>

    Test Case 1: Sorting the products based on price was successfully completed, and the products were correctly sorted from high to low.

    Test Case 2: All predefined items were successfully added to the cart, and the cart contents were verified to be accurate.

    Test Case 3: The script successfully removed the specified items from the cart, and the cart contents were verified to reflect the changes.

    Test Case 4: The script navigated back to the shopping page from the cart, added additional items to the cart, and verified the accuracy of the cart contents.

    Test Case 5: The script successfully navigated to the cart, provided valid customer information for the checkout process, and completed the checkout without any issues.

<hr>

### <p align="center">No major issues were encountered during the automated testing process. <br>The script executed smoothly, and all functionalities performed as expected.</p>

<hr>

### Conclusion
<p align="justify">The automation script developed for the Swag Labs website using Playwright JS successfully performed various actions, including sorting products, adding and removing items from the cart, navigating back to shopping, checking out, and completing the online shopping process. The script executed without any major issues, demonstrating the reliability and effectiveness of the automated testing approach.</p>


<br>
<br>

#### <p align="center"> Copyright © Porinita Hoque </p>
