from django.shortcuts import render
from rest_framework import generics
from .models import Curs
from .serialazers import CursSerializer

# Create your views here.

class CursView (generics.ListAPIView):
    queryset = Curs.objects.all()
    serializer_class = CursSerializer
