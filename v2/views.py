import json

from django.http import JsonResponse

from .skus import skus

# https://jsonapi.org/format/#fetching

# product_response = {
#     "data": {
#         "type": "products",
#         "id": "35902052",
#         "attributes": {
#             "category": "storage",
#             "series": "lake",
#             "credenza": "credenza",
#             "created_by": "molly@bddw.com",
#             "created_on": "datetime",
#             "scans": [],
#         },
#         "links": {
#             "img": "https://bddwinventory.com/assets/large/22010308-1.jpg",
#             "self": "https://api-link-to-lself",
#             "bin": "https://link-to-bin",
#         },
#     }
# }

# list_response = {
#     "data": [
#         {
#             "type": "products",
#             "id": "35902052",
#             "attributes": {
#                 "category": "storage",
#                 "series": "lake",
#                 "item": "credenza",
#                 "created_by": "molly@bddw.com",
#                 "created_on": "datetime",
#                 "scans": [],
#             },
#             "links": {
#                 "img": "https://bddwinventory.com/assets/large/22010308-1.jpg",
#                 "self": "https://api-link-to-lself",
#                 "bin": "https://link-to-bin",
#             },
#         }
#     ]
# }


def all(request):

    response = {"data": []}

    for d in json.loads(skus):

        formatting = {
            "type": "products",
            "id": d.get("sku", None),
            "attributes": {
                "category": d.get("category", None),
                "series": d.get("series", None),
                "item": d.get("item", None),
                "created_by": d.get("created_by", None),
                "created_on": d.get("created_on", None),
                "scans": [],
            },
            "links": {
                "img": "https://bddwinventory.com/assets/large/{0}-1.jpg".format(
                    d.get("sku")
                ),
                "self": "https://bddwskuapi.bddwapps/v2/products/{0}".format(
                    d.get("sku")
                ),
                "bin": "https://bddwinventory.com/detail.html?sku={0}".format(
                    d.get("sku")
                ),
            },
        }

        response["data"].append(formatting)

    return JsonResponse(response, safe=False)


def by_sku(request, sku):

    for s in json.loads(skus):

        if s.get("sku") == sku:

            formatting = {
                "data": {
                    "type": "products",
                    "id": s.get("sku", None),
                    "attributes": {
                        "category": s.get("category", None),
                        "series": s.get("series", None),
                        "item": s.get("item", None),
                        "created_by": s.get("created_by", None),
                        "created_on": s.get("created_on", None),
                        "scans": [],
                    },
                    "links": {
                        "img": "https://bddwinventory.com/assets/large/{0}-1.jpg".format(
                            s.get("sku")
                        ),
                        "self": "https://bddwskuapi.bddwapps/v2/products/{0}".format(
                            s.get("sku")
                        ),
                        "bin": "https://bddwinventory.com/detail.html?sku={0}".format(
                            s.get("sku")
                        ),
                    },
                }
            }

            return JsonResponse(formatting)

    return JsonResponse(
        {
            "type": "products",
            "id": None,
            "attributes": {
                "category": None,
                "series": None,
                "item": None,
                "created_by": None,
                "created_on": None,
                "scans": [],
            },
            "links": {
                "img": None,
                "self": None,
                "bin": None,
            },
        }
    )
