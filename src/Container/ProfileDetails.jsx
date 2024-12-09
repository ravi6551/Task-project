import React from "react";
import { useFormContext } from "react-hook-form";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField } from "@/components/ui/form";

const ProfileDetails = () => {
  const form = useFormContext();

  const onSubmit = (values) => {
    try {
      // Save form data to localStorage
      localStorage.setItem("profileData", JSON.stringify(values));
      alert("Profile saved successfully!");
    } catch (error) {
      console.error("Error saving profile data:", error);
      alert("Failed to save profile.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Card>
          {/* Card Header */}
          <CardHeader>
            <CardTitle>Profile Details</CardTitle>
            <CardDescription>Add your details to create a personal touch to your profile.</CardDescription>
          </CardHeader>

          {/* Profile Picture Upload */}
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-300">
                <img
                  src="/path-to-placeholder-image.jpg"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm cursor-pointer">
                  Change Image
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Image must be below 1024x1024px. Use PNG, JPG, or BMP format.
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="firstName"
                render={(props) => (
                  <FormInput
                    label="First Name"
                    placeholder="Enter First Name"
                    autoComplete="given-name"
                    {...props}
                  />
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={(props) => (
                  <FormInput
                    label="Last Name"
                    placeholder="Enter Last Name"
                    autoComplete="family-name"
                    {...props}
                  />
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={(props) => (
                  <FormInput
                    label="Email"
                    placeholder="Enter Email"
                    type="email"
                    autoComplete="email"
                    {...props}
                  />
                )}
              />
            </div>
          </CardContent>

          {/* Save Button */}
          <CardFooter>
            <Button type="submit">Save Changes</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default ProfileDetails;
