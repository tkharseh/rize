from serpapi import GoogleSearch
from config import serp_key


def get_images(keyword):
    '''
    Scrapes the top 3 images for this keyword
    '''

    params = {
        "q": keyword,
        "tbm": "isch",
        "ijn": "0",
        "api_key": serp_key
    }

    search = GoogleSearch(params)
    results = search.get_dict()
    images_results = results['images_results']
    top_three_links = [images_results[0]['thumbnail'], images_results[1]['thumbnail'], images_results[2]['thumbnail']]

    return top_three_links
