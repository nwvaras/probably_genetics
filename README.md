## Probably genetic

### Pre-Requisites

Docker, Docker-Compose

### Installation (For Ubuntu)

#### Install Docker

https://get.docker.com/

    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    
    
Make sure to give the current user to docker group after installation:

    sudo usermod -aG docker $USER
    
#### Install DockerCompose 

https://docs.docker.com/compose/install/

#### Run backend

Create the .env file:

    cd ProbablyGenBackend
    cp .env.example .env
    
Build with docker:

    docker-compose up -d --build backend_dev

Fill with data the already running backend instance:

    docker-compose exec backend_dev python manage.py loaddata ml_fixture
    
#### Run frontend

    cd GeneticFront
    npm install
    docker-compose up -d --build frontend
    
Open http://localhost/
    
    
    
