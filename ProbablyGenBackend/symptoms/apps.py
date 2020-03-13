import os
import pickle

from django.apps import AppConfig
from django.conf import settings

from symptoms.terms_utils import MedicalTermProvider


class SymptomsConfig(AppConfig):
    name = 'symptoms'
    path = os.path.join(settings.MODELS, 'randomforest_model.sav')

    # load models into separate variables
    # these will be accessible via this class
    with open(path, 'rb') as pickled:
        model = pickle.load(pickled)

    classifier = model
    provider = MedicalTermProvider()
