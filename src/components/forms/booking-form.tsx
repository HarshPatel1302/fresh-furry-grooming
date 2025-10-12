"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, PawPrint, CheckCircle, AlertCircle } from "lucide-react";

export function BookingForm() {
  const [formData, setFormData] = useState({
    petName: "",
    petType: "",
    breed: "",
    size: "",
    age: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    ownerName: "",
    phone: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your API
      console.log('Booking data:', formData);
      
      setSubmitStatus('success');
      // Reset form
      setFormData({
        petName: "",
        petType: "",
        breed: "",
        size: "",
        age: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        ownerName: "",
        phone: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error('Booking error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Basic Bath & Blow Dry",
    "Full Grooming Package", 
    "Luxury Spa Treatment",
    "Deshedding Treatment",
    "Nail Care & Pedicure",
    "Senior Dog Special Care",
    "Cat Bath & Dry",
    "Complete Cat Grooming",
    "Long-Hair Cat Special",
    "Cat Nail Trimming",
    "Cat Spa Experience",
    "Anxious Cat Care",
    "Health Check Service",
    "Flea & Tick Treatment"
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM"
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Pet Information */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <PawPrint className="h-5 w-5 text-green-600" />
            Pet Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="petName">Pet Name *</Label>
              <Input
                id="petName"
                value={formData.petName}
                onChange={(e) => handleInputChange('petName', e.target.value)}
                placeholder="Enter your pet's name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="petType">Pet Type *</Label>
              <select 
                id="petType"
                value={formData.petType} 
                onChange={(e) => handleInputChange('petType', e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="">Select pet type</option>
                <option value="dog">🐕 Dog</option>
                <option value="cat">🐱 Cat</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="breed">Breed *</Label>
              <Input
                id="breed"
                value={formData.breed}
                onChange={(e) => handleInputChange('breed', e.target.value)}
                placeholder="e.g., Golden Retriever, Persian Cat"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="size">Size *</Label>
              <select 
                id="size"
                value={formData.size} 
                onChange={(e) => handleInputChange('size', e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="">Select size</option>
                <option value="small">Small (Under 25 lbs)</option>
                <option value="medium">Medium (25-50 lbs)</option>
                <option value="large">Large (50-100 lbs)</option>
                <option value="extra-large">Extra Large (100+ lbs)</option>
              </select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="age">Age *</Label>
              <Input
                id="age"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                placeholder="e.g., 2 years, 6 months"
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Service Selection */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-green-600" />
            Service & Scheduling
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="service">Service Required *</Label>
              <select 
                id="service"
                value={formData.service} 
                onChange={(e) => handleInputChange('service', e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="">Select service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredDate">Preferred Date *</Label>
              <Input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredTime">Preferred Time *</Label>
              <select 
                id="preferredTime"
                value={formData.preferredTime} 
                onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="">Select time slot</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Owner Information */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-green-600" />
            Owner Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ownerName">Your Name *</Label>
              <Input
                id="ownerName"
                value={formData.ownerName}
                onChange={(e) => handleInputChange('ownerName', e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+91-98765-43210"
                required
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message">Additional Notes</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Any special instructions, medical conditions, or behavioral notes..."
                rows={3}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="space-y-4">
        {submitStatus === 'success' && (
          <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-green-800">
              Booking request submitted successfully! We'll contact you within 24 hours to confirm your appointment.
            </span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <span className="text-red-800">
              There was an error submitting your booking. Please try again or call us directly.
            </span>
          </div>
        )}

        <Button 
          type="submit" 
          size="lg" 
          className="w-full touch-manipulation min-h-[48px]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Submitting...
            </>
          ) : (
            <>
              <PawPrint className="h-4 w-4 mr-2" />
              Book Appointment
            </>
          )}
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          By submitting this form, you agree to our terms of service. 
          We'll contact you to confirm your appointment details.
        </p>
      </div>
    </form>
  );
}