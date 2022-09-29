from django.contrib.auth.decorators import login_required
from django.shortcuts import render


@login_required
def look_up(request):

    return render(request, "index.html", {"test": "test"})
