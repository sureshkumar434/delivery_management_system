from django.urls import re_path
from rest_framework.routers import DefaultRouter
from .views import calculate_revenue, ComponentViewSet, IssueViewSet, VehicleViewSet

router = DefaultRouter()
router.register(r'components', ComponentViewSet, basename='component')
router.register(r'issues', IssueViewSet, basename='issue')
router.register(r'vehicels', VehicleViewSet, basename='vehicels')



urlpatterns = [
    re_path(r'calculate_revenue', calculate_revenue),
]

urlpatterns += router.urls