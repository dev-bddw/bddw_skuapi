from django.shortcuts import render


def look_up(request):

    return render(request, "index.html", {"test": "test"})
