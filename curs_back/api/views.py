from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import generics
from .models import Curs, Lections
from django.contrib.auth.models import User
from .serialazers import CursSerializer, LectionsSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.

class CursView (viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    def get_queryset(self):
        user_name = self.request.query_params.get('username', None)
        if user_name:
            return Curs.objects.filter(members__username=user_name).order_by('date')
        return Curs.objects.all()
    serializer_class = CursSerializer


class LectionsView (viewsets.ModelViewSet):
    def get_queryset(self):
        curs_id = self.request.query_params.get('curs_id', None)
        if curs_id:
            return Lections.objects.filter(curs__id=curs_id).order_by('lections_date')
        return Lections.objects.all()
    serializer_class = LectionsSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['name'] = user.username

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# class UsersView (viewsets.ModelViewSet):
#     def get_queryset(self):
#         user_login = self.request.query_params.get('user_login', None)
#         if user_login:
#             return Users.objects.filter(login=user_login)
#         return Users.objects.all()
#     serializer_class = UsersSerializer