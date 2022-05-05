# Netdata Assignment
> Unfortunately i couldn't do much and concetrate on the testing work. I faced a few issues with the authorization which didnt let me authorize the cypress container to run the tests for the health api. Even though the exact process was working locally and other test containers. For some reason i was getting 403: ERROR. Obviously with no much experience in Testing, i wouldn't be able to provide quality code (as i did).

## The tools 
- Cypress: I used Cypress cause i never had the opportunity to get into it before (I have used only Selenium). From my understanding its a good written framework, lightweight and of course with many capabilities which gives the chance to SET people explore its power. I found the automation pretty easy to set and the hierarchy of the files pretty easy to understand. 

- Docker: I know, its not recommended for using it in production (most cases) and more specifically for Netdata. That was the easiest/fastest way to get my hands on the testing side of things rather than the infrastructure. 

## What i did
- First of all i created all the needed directories for each tool. One for netdata which contained all the configuration files and one for cypress which would include the tests and some configurations.
-  Bunched both of them inside a docker-compose file (under the same network for commucation purposes) and started configuring the files for the assignment.
- Edited few netdata configuration files to enable the api.key etc and created an example health alarm for the assignment in order to trigger an alert.
- Inside the e2e directory can be found the tests under the spec.js (NO Quality code :) )

