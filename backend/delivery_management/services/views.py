from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Issues, Component, Vehicels
from .serializers import ComponentSerializer, VehicleSerializer, IssuesSerializer
from django.db.models import Sum, Case, When, F
from datetime import date



class ComponentViewSet(viewsets.ModelViewSet):
    queryset = Component.objects.all()
    serializer_class = ComponentSerializer

# Existing viewsets for Vehicle and Issue
class VehicleViewSet(viewsets.ModelViewSet):
    queryset = Vehicels.objects.all()
    serializer_class = VehicleSerializer

class IssueViewSet(viewsets.ModelViewSet):
    queryset = Issues.objects.all()
    serializer_class = IssuesSerializer

def calculate_period_revenue(start_date):
   
    total_repair_cost = Issues.objects.filter(date_resolved__gte=start_date).aggregate(
        total_repair_cost=Sum('repair_price'))['total_repair_cost'] or 0

    total_component_price = Issues.objects.filter(date_resolved__gte=start_date).aggregate(
        total_component_price=Sum('component__price'))['total_component_price'] or 0

    return total_repair_cost + total_component_price

@api_view(['GET'])
def calculate_revenue(request):
    today = date.today()

    # Calculate daily revenue
    daily_revenue = calculate_period_revenue(today)

    # Calculate monthly revenue
    start_of_month = today.replace(day=1)
    monthly_revenue = calculate_period_revenue(start_of_month)

    # Calculate yearly revenue
    start_of_year = today.replace(month=1, day=1)
    yearly_revenue = calculate_period_revenue(start_of_year)

    data = {
        'daily_revenue': daily_revenue,
        'monthly_revenue': monthly_revenue,
        'yearly_revenue': yearly_revenue,
    }
    return Response(data)   

