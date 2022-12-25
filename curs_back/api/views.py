from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import generics
from .models import Curs, Users, Lections
from .serialazers import CursSerializer, UsersSerializer, LectionsSerializer

# Create your views here.

class CursView (viewsets.ModelViewSet):
    def get_queryset(self):
        user_name = self.request.query_params.get('user_name', None)
        if user_name:
            return Curs.objects.filter(curs_members__id=user_name).order_by('curs_date')
        return Curs.objects.all()
    serializer_class = CursSerializer


class LectionsView (viewsets.ModelViewSet):
    def get_queryset(self):
        curs_id = self.request.query_params.get('curs_id', None)
        if curs_id:
            return Lections.objects.filter(curs__id=curs_id).order_by('lections_date')
        return Lections.objects.all()
    serializer_class = LectionsSerializer


class UsersView (viewsets.ModelViewSet):
    def get_queryset(self):
        user_login = self.request.query_params.get('user_login', None)
        if user_login:
            return Users.objects.filter(login=user_login)
        return Users.objects.all()
    serializer_class = UsersSerializer