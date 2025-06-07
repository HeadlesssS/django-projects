from .views import view,dynamic,movies,top_movies,watchlist,calculator
from django.urls import path

urlpatterns=[
    path('', view, name='home'),
    path("dynamic/<str:text>",dynamic,name='dynamic'),
    path("movies",movies,name='movies'),
    path("top-movies",top_movies,name='top-movies'),
    path("watchlist",watchlist,name='watchlist'),
    path("calculator",calculator,name='calculator')

]