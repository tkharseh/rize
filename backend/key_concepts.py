
from ibm_watson import NaturalLanguageUnderstandingV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibm_watson.natural_language_understanding_v1 import Features, ConceptsOptions
from config import watson_key, watson_url
import wikipedia


def get_keyconcepts(input_text):
    authenticator = IAMAuthenticator(watson_key)
    natural_language_understanding = NaturalLanguageUnderstandingV1(
        version='2020-08-01',
        authenticator=authenticator
    )

    natural_language_understanding.set_service_url(watson_url)

    response = natural_language_understanding.analyze(
        text=input_text,
        features=Features(concepts=ConceptsOptions(limit=3))).get_result()

    keyconcepts = {}
    for i in range(len(response['concepts'])):
        keyconcept = response['concepts'][i]['text']
        keyconcepts[keyconcept] = wikipedia.summary(keyconcept, sentences=1)

    return keyconcepts

print()
