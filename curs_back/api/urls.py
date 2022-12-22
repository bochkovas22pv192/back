
from django.urls import path
from .views import CursView

urlpatterns = [
    path('', CursView.as_view()),
]