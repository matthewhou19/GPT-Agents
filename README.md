# GPT-Agents

## Description

GPT-Agents is a project that aims to provide users with a customizable chat experience powered by OpenAI's Chat API. The project allows users to create their own chat agents to assist with various tasks, such as translation, name generation, or code interpretation. The stored chat messages can be leveraged to create fine-tuned models, and the data can be transferred to interact with other GPT models.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Java](https://www.java.com/en/download/), [Angular](https://angular.io/guide/setup-local), and [MySQL](https://dev.mysql.com/downloads/installer/).
- You have a Windows/Mac/Linux machine.

## Getting Started with GPT-Agents

To install GPT-Agents, follow these steps:

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

## Usage

As of now, the following functionalities have been implemented:

1.**Create Agent**: Users can create and update agents both in the frontend and backend.

2.**Create Chat**: Users can create chats based on agents in the frontend and backend.

3.**Chat with OpenAI**: Users can chat with OpenAI and save the messages in the MySQL database.

## Tech Stack

GPT-Agents utilizes a range of technologies to deliver a robust and customizable chat experience:

-**Frontend**: The frontend of the application is built with [Angular](https://angular.io/), a popular framework for building web applications. -**Backend**: The backend is powered by the [Spring Framework](https://spring.io/), a comprehensive framework for building Java applications. -**Database**: The application data is stored in a local [MySQL](https://www.mysql.com/) database, providing a reliable and efficient data storage solution.

## Roadmap

Here's a checklist of the main features and their current status:

- [x] Customizable Chat Agents: Allow users to create their own chat agents.
- [ ] Docker Deployment: Integrate all the code and MySQL server into a Docker file.
- [ ] GitHub Workflows: Use GitHub workflows to automatically regenerate the Docker file.
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
