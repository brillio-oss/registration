# README

Rails + React

Rails acts as the backend API provider. React for the frontend.

For building APIs, please refer to this [design guide document](https://geemus.gitbooks.io/http-api-design/content/en/)

For frontend, please prefer functional components over class components.

This repo follows `git flow` workflow design for ease of use. Refer this [cheatsheet]() to quickly understand how to work with it. Production follows master branch. Latest follows develop. All feature branch follow the `feature/abc` convention. Subsequently, all realease branches will be `release/abc`.

Refer to the project section of the repo to know the roadmap.

- Ruby version - 2.6.3

- System dependencies - Docker, Docker-Compose. [Install for mac](https://docs.docker.com/docker-for-mac/install/)

- Setup - `docker-compose build`

          `docker-compose run runner bash -c ./bin/setup`

          `docker-compose up -d webpacker` to run webpacker in background. This compiles our javascript.

          `docker-compose up rails`. Now you can visit localhost:3000 to see the website up and running.

- Services (job queues, cache servers, search engines, etc.)

  - Rails - Starts the server
  - Runner - To run every single command. Think of it as bash
  - Webpacker - To compile javascript.
  - Sidekiq - To run background worker.
  - Postgres - Main DB
  - Redis - In-memory key-value DB.

You can run each of these individually or in combination. See docker-compose.yml for more details

- Deployment instructions - To follow
