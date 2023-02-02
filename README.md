## Convene Central

## Overview
Convene Central is an event planning tool for organizations to host in-person or virtual conferences for thousands of participants and presenters. The application allows users to create new conferences, presentations, attendees, and conference locations. Email notifications are sent to presenters through RabbitMQ and mailhog to confirm presentation approval or rejection. The app incorporates third-party APIs for conference location photos and weather data based on coordinates. It was originally built as a monolith, but was later redesigned into 7 Docker containers and 3 microservices for better scalability and server load balancing.

## Initialization
-Fork and clone the repository to your local system.
-Open a terminal and run the command "docker-compose build" to build the necessary images for the Conference Creator project.
-Upon successful completion of the build process, run the command "docker-compose up" to start the containers and get the application up and running.
-Take some time to explore and familiarize yourself with the project and its functionality.
