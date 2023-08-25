from django.urls import path

from .views import *

urlpatterns = [
    path('', BlogListViews.as_view()),
    path('<post_slug>', PostDetailView.as_view())
]