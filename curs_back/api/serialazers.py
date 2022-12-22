from rest_framework import serializers
from .models import Curs

class CursSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curs
        fields = ('id', 'code', 'name', 'descr')