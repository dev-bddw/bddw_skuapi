import json

from django.http import JsonResponse

from .skus import skus

product_response = {
    "data": {
        "type": "products",
        "id": "35902052",
        "attributes": {
            "category": "storage",
            "series": "lake",
            "credenza": "credenza",
            "created_by": "molly@bddw.com",
            "created_on": "datetime",
            "scans": [],
        },
        "links": {
            "img": "https://bddwinventory.com/assets/large/22010308-1.jpg",
            "self": "https://api-link-to-lself",
            "bin": "https://link-to-bin",
        },
    }
}

list_response = {
    "data": [
        {
            "type": "products",
            "id": "35902052",
            "attributes": {
                "category": "storage",
                "series": "lake",
                "item": "credenza",
                "created_by": "molly@bddw.com",
                "created_on": "datetime",
                "scans": [],
            },
            "links": {
                "img": "https://bddwinventory.com/assets/large/22010308-1.jpg",
                "self": "https://api-link-to-lself",
                "bin": "https://link-to-bin",
            },
        }
    ]
}


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
                "created_on": d.get("datetime", None),
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

    for skew in skus:
        if skew.get("sku") == sku:
            return JsonResponse(skew)

    else:
        return JsonResponse(
            {
                "error": "sku not found",
                "updated_last": "Was this product added to bin after 9/22/22?",
            }
        )
