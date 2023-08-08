# GPT-Agents

## Description

GPT-Agents is a project that aims to provide users with a customizable chat experience powered by OpenAI's Chat API.

### Goals

1. **Customizable Chat Agents**: Allow users to create their own chat agents to assist with various tasks, such as translation, name generation, or code interpretation.
2. **Fine-Tuned Models**: Leverage the stored chat messages to create fine-tuned models. By selecting specific messages, users can train a model that is tailored to their needs.
3. **Interoperability with Other Models**: Enable the transfer of message data to interact with other GPT models, opening up the possibility of using the same data across different models.

## Tech Stack

GPT-Agents utilizes a range of technologies to deliver a robust and customizable chat experience:

- **Frontend**: The frontend of the application is built with [Angular](https://angular.io/), a popular framework for building web applications.
- **Backend**: The backend is powered by the [Spring Framework](https://spring.io/), a comprehensive framework for building Java applications.
- **Database**: The application data is stored in a local [MySQL](https://www.mysql.com/) database, providing a reliable and efficient data storage solution.

## Roadmap

The application is structured around the concept of "agents" and "chats". An agent, stored in a MySQL database, serves as a blueprint for chats. Users can create a new chat based on an agent, effectively creating an instance of that agent. Each chat is also stored in the MySQL database and cannot be modified once created. All messages within a chat are saved in the database and are associated with a specific chat ID.

Here's a checklist of the main features and their current status:

- [x] Customizable Chat Agents: Allow users to create their own chat agents.
- [x] Fine-Tuned Models: Leverage the stored chat messages to create fine-tuned models.
- [ ] Interoperability with Other Models: Enable the transfer of message data to interact with other GPT models.
- [ ] Docker Deployment: Integrate all the code and MySQL server into a Docker file.
- [ ] GitHub Workflows: Use GitHub workflows to automatically regenerate the Docker file.
- [ ] Online Data Storage: Transition to an online data storage service.

Please note that this roadmap is subject to change as the project evolves.

## Deployment

### Current Deployment Process

At the moment, users need to manually set up the environment for the GPT-Agents application. Here are the steps:

1. Download all the code from the [GPT-Agents GitHub repository](https://github.com/matthewhou19/GPT-Agents).
2. Start the frontend server and backend server.
3. Set up a local MySQL server.

### Future Deployment Plans

In the future, the goal is to simplify the deployment process using Docker and GitHub workflows:

- **Docker**: We plan to integrate all the code and MySQL server into a Docker file. This way, users can simply download the Docker file and run it, and all the necessary environments will be set up automatically.
- **GitHub Workflows**: We also plan to use GitHub workflows to automatically regenerate the Docker file during the development of the project. This will ensure that the Docker file always reflects the latest state of the project.

## Data Storage

### Current Data Storage

Currently, GPT-Agents uses a local MySQL server for data storage. This means that all data is stored on the user's local machine. However, this also means that all data is lost when the application is closed.

### Future Data Storage Plans

In the future, we plan to transition to an online data storage service. This will allow data to be stored remotely and retrieved as needed, preserving it even when the application is closed. The online storage service will be accessed using OAuth 2 for secure access.

We are currently evaluating various online data storage services and have not yet decided on a specific one. Some potential options include:

- **Amazon RDS**: Amazon's Relational Database Service (RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks.
- **Google Cloud SQL**: Cloud SQL is a fully-managed database service that makes it easy to set up, maintain, manage, and administer your relational databases on Google Cloud Platform.
- **Azure SQL Database**: Azure SQL Database is a fully managed platform as a service (PaaS) database engine that handles most of the database management functions such as upgrading, patching, backups, and monitoring without user involvement.

## Contributing

We welcome contributions from the community! If you've found a bug, have a suggestion, or want to share an idea, please feel free to [raise an issue](https://github.com/matthewhou19/GPT-Agents/issues) on our GitHub repository.

When raising an issue, please provide as much detail as possible to help us understand and address your concern. If you're suggesting a feature, explain what you're envisioning and why you think it would be beneficial.

We look forward to hearing your ideas and working together to make GPT-Agents even better!
