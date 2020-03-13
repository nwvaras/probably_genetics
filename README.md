## Probably genetic

####Disorders in Machine Learning Classifier

Any Symptoms of this Disorders can be use with the Classifier search option!

    Hereditary angioedema
    Acquired angioedema
    Ketamine-induced biliary dilatation
    Thomsen and Becker disease
    Proximal myotonic myopathy
    Galactokinase deficiency
    Myxoid/round cell liposarcoma
    Pleomorphic liposarcoma
    Well-differentiated liposarcoma
    Familial cylindromatosis
    Hereditary hyperferritinemia-cataract syndrome
    Familial multiple trichoepithelioma
    Bartter syndrome
    Laryngeal abductor paralysis
    Progressive nodular histiocytosis
    Congenital pulmonary valve stenosis
    Hyaluronidase deficiency
    Larynx atresia
    Congenital pulmonary veins atresia or stenosis
    Congenital laryngomalacia

### Pre-Requisites

Docker, Docker-Compose

#### Install Docker

https://get.docker.com/

    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    
    
Make sure to give the current user to docker group after installation:

    sudo usermod -aG docker $USER
    
Before using docker, the terminal or SHH connection should be reopened.
    
#### Install DockerCompose 

https://docs.docker.com/compose/install/

### Installation Localhost/Development (For Ubuntu)

#### Run backend

Create the .env file:

    cd ProbablyGenBackend
    cp .env.example .env
    
Build with docker:

    docker-compose up -d --build backend_dev

Fill with data the already running backend instance:

    docker-compose exec backend_dev python manage.py loaddata ml_fixture
    
 If not running on localhost, adds the domain to ALLOWED_HOSTS and CORS in settings.py:
 
    # CORS
    CORS_ORIGIN_WHITELIST = [
        "http://localhost"
        "http://localhost:3000",
        "http://your_domain",
        "http://your_domain:3000",
    ]
    
Backend should be running on http://localhost:8000.
    
#### Run frontend

    cd GeneticFront
    docker-compose up -d --build frontend_dev
    
If not running on localhost, modify the .env with the backend domain and rebuild.

    REACT_APP_API_HOST=http://my_backend.domain
    
Should be running at http://localhost:3000/.

### Installation Production (For Ubuntu)
    
#### Run backend

Create the .env file:

    cd ProbablyGenBackend
    cp .env.example .env
    
Build with docker:

    docker-compose up -d --build backend

Fill with data the already running backend instance:

    docker-compose exec backend python manage.py loaddata ml_fixture
    
#### Run frontend

    cd GeneticFront
    docker-compose up -d --build frontend
    
Open http://localhost/
    
    
    
    
