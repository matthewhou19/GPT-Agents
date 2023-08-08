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

## Installation

At the moment, users need to manually set up the environment for the GPT-Agents application. Here are the steps:

1. Download all the code from the [GPT-Agents GitHub repository](https://github.com/matthewhou19/GPT-Agents).
2. Start the frontend server and backend server.
3. Set up a local MySQL server.

## Usage

As of now, the following functionalities have been implemented:

1.**Create Agent**: Users can create and update agents both in the frontend and backend. 2.**Create Chat**: Users can create chats based on agents in the frontend and backend. 3.**Chat with OpenAI**: Users can chat with OpenAI and save the messages in the MySQL database.

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
