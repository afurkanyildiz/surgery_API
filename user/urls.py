from unicodedata import name
from django.urls import path
from . import views
from .views import redirect_view

#http://127.0.0.1:8000/

urlpatterns = [
    path('', views.login, name='login'),
    path('/logout/', views.logOut, name='logout'),
    path('/redirect', redirect_view, name='redirect')
]