from django.urls import path

from .views import all, by_sku

app_name = "v2"

urlpatterns = [path("products/", view=all), path("products/<sku>/", view=by_sku)]
