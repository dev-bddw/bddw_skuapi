from django.http import JsonResponse

# Create your views here.
from .skus import skus


def api_return_all(request):

    return JsonResponse(skus, safe=False)


def api_return_info(request, sku):

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
