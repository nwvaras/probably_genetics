## Desarrollo

### Instalación

    docker-compose up -d --build backend_dev
    
### Ejecución

    docker-compose up -d backend_dev
    
## Producción

### Instalación

    docker-compose up -d --build backend
    
## Ejecución

    docker-compose up -d backend
    
    
## Utilidades


Ver logs de contenedor

    docker-compose logs -f backend
    docker-compose logs -f postgres
    
Ejecutar Shell de Django:

    docker-compose exec backend python manage.py shell
    
Migraciones:

    docker-compose exec backend python manage.py makemigrations
    docker-compose exec backend python manage.py migrate
    
    
#Disorders in Machine Learning Classifier

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
   Any Symptoms of this Disorders can be use with the Classifier search option!