
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import CursView, UsersView, LectionsView

router = DefaultRouter()

router.register(r'curs', CursView, basename='Curs')
router.register(r'userss', UsersView, basename='Users')
router.register(r'lections', LectionsView, basename='Lections')


urlpatterns = [
    path(r'', include(router.urls)),
]