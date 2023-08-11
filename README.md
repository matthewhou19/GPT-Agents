# GPT-Agents

## Description

GPT-Agents is a project that aims to provide users with a customizable chat experience powered by OpenAI's Chat API. The project allows users to create their own chat agents to assist with various tasks, such as translation, name generation, or code interpretation. The stored chat messages can be leveraged to create fine-tuned models, and the data can be transferred to interact with other GPT models.

## Table of Contents

- [Suggested Way to Run: Docker](#suggested-way-to-run-docker)
- [Getting Started with GPT-Agents (Local Development)](#getting-started-with-gpt-agents-local-development)
- [Learning Resources](#learning-resources)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## **Suggested Way to Run: Docker**

Running GPT-Agents with Docker is the suggested way to get the project up and running. It ensures that all dependencies and configurations are handled automatically, providing a smooth experience. Please refer to the [Running with Docker](#running-with-docker) section for detailed instructions.

### Prerequisites for Running with Docker

- You have a Windows/Mac/Linux machine.
- You have [Docker](https://www.docker.com/get-started) installed.

### Running with Docker

1. Download the `docker-compose.yml` file from the GitHub repository.
2. Open a terminal and navigate to the directory containing the `docker-compose.yml` file.
3. Run `docker-compose up`.
4. Open your web browser and visit `http://localhost:80` to start using GPT-Agents!

## Getting Started with GPT-Agents (Local Development)

### Prerequisites for Local Development

- You have installed the latest version of [Java](https://www.java.com/en/download/), [Angular](https://angular.io/guide/setup-local), [Node.js](https://nodejs.org/), and [MySQL](https://dev.mysql.com/downloads/installer/).
- You have a Windows/Mac/Linux machine.

### Installation and Usage

1. Clone the repo: `git clone https://github.com/matthewhou19/GPT-Agents.git`
2. Navigate to the project directory: `cd GPT-Agents`
3. Install dependencies:
   - For the backend, navigate to the backend directory and run `mvn install`
   - For the frontend, navigate to the frontend directory and run `npm install`
4. Configure MySQL:

   - Ensure your MySQL server is running.
   - In the backend code, update the `application.properties` file with your MySQL configuration:

     ```
     spring.datasource.url=jdbc:mysql://localhost:3306/gpt-agents
     spring.datasource.username=root
     spring.datasource.password=matthew
     ```

     Replace `localhost:3306` with your MySQL host and port, `gpt-agents` with your database name, and `root` and `matthew` with your MySQL username and password, respectively.

5. Start the servers:
   - For the backend, navigate to the backend directory and run `mvn spring-boot:run`
   - For the frontend, navigate to the frontend directory and run `ng serve`
6. Open your web browser and visit `http://localhost:4200` to start using GPT-Agents!

## Learning Resources

If you're new to the OpenAI API and would like to understand it better before diving into this project, you can check out a simpler project called [NameGeneratorGPT](https://github.com/matthewhou19/NameGeneratorGPT). NameGeneratorGPT is a learning tool that uses the OpenAI API to generate unique names for newborn children, inspired by classical masterpieces. It provides a good starting point for understanding how to interact with the OpenAI API.

## Usage

As of now, the following functionalities have been implemented:

1.**Create Agent**: Users can create and update agents both in the frontend and backend. 2.**Create Chat**: Users can create chats based on agents in the frontend and backend. 3.**Chat with OpenAI**: Users can chat with OpenAI and save the messages in the MySQL database.

## Tech Stack

GPT-Agents utilizes a range of technologies to deliver a robust and customizable chat experience:

-**Frontend**: The frontend of the application is built with [Angular](https://angular.io/), a popular framework for building web applications. -**Backend**: The backend is powered by the [Spring Framework](https://spring.io/), a comprehensive framework for building Java applications. -**Database**: The application data is stored in a local [MySQL](https://www.mysql.com/) database, providing a reliable and efficient data storage solution.

## Roadmap

Here's a checklist of the main features and their current status:

- [x] Customizable Chat Agents: Allow users to create their own chat agents.
- [x] GitHub Workflows: Use GitHub workflows to automatically integrate all the code and MySQL server into a Docker file.
- [ ] Online Data Storage: Transition to an online data storage service.
- [ ] Fine-Tuned Models: Leverage the stored chat messages to create fine-tuned models.
- [ ] Interoperability with Other Models: Enable the transfer of message data to interact with other GPT models.

Please note that this roadmap is subject to change as the project evolves.

## Contributing

We welcome contributions from the community! If you've found a bug, have a suggestion, or want to share an idea, please feel free to [raise an issue](https://github.com/matthewhou19/GPT-Agents/issues) on our GitHub repository.

When raising an issue, please provide as much detail as possible to help us understand and address your concern. If you're suggesting a feature, explain what you're envisioning and why you think it would be beneficial.

We look forward to hearing your ideas and working together to make GPT-Agents even better!

## License

[MIT](https://choosealicense.com/licenses/mit/)
