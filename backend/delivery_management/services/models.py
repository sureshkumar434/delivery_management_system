from django.db import models

class Component(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)

class Vehicels(models.Model):
    reg_number = models.CharField(max_length=20)
    model = models.CharField(max_length=100)

class Issues(models.Model):
    vehicle = models.ForeignKey(Vehicels, on_delete=models.CASCADE)
    component = models.ForeignKey(Component, on_delete=models.CASCADE)
    issue = models.TextField()
    repair_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    repair_or_replace = models.CharField(max_length=10, choices=[('repair', 'Repair'), ('replace', 'Replace')])
    date_resolved = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.vehicle.reg_number} - {self.issue}'
    
    def calculate_total_cost(self):
            if self.repair_or_replace == 'repair':
                return self.repair_price
            elif self.repair_or_replace == 'replace':
                return self.component.price
            return 0

    def save(self, *args, **kwargs):
            self.total_cost = self.calculate_total_cost()
            super().save(*args, **kwargs)