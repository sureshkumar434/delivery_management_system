from rest_framework import serializers
from .models import Issues, Component, Vehicels

class IssuesSerializer(serializers.ModelSerializer):
    total_cost = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

    class Meta:
        model = Issues
        fields = ['id', 'vehicle', 'component', 'issue', 'repair_price', 'repair_or_replace', 'total_cost', 'date_resolved']

    def create(self, validated_data):
        issue = Issues(**validated_data)
        issue.total_cost = issue.calculate_total_cost()
        issue.save()
        return issue


class ComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Component
        fields = '__all__'

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicels
        fields = '__all__'
