import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useForm, FormProvider } from "react-hook-form";
import ProfilePreview from "./Container/ProfilePreview";
import ProfileDetails from "./Container/ProfileDetails";
import LinksUI from "./Container/Linkui";

const App = () => {
  const methods = useForm();

  return (
    <Tabs defaultValue="links" className="container mx-auto p-4">
      {/* Header Section */}
      <header className="flex items-center justify-between border-b pb-4 mb-4">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-purple-100 p-2">
            <span className="text-purple-600 font-bold">devlinks</span>
          </div>
        </div>

        <TabsList className="flex space-x-4">
          <TabsTrigger value="links" className="text-sm font-medium">
            Links
          </TabsTrigger>
          <TabsTrigger value="profile" className="text-sm font-medium">
            Profile Details
          </TabsTrigger>
        </TabsList>

        <Button variant="outline" className="text-purple-600 border-purple-600">
          Preview
        </Button>
      </header>

      {/* Main Content Section */}
      <FormProvider {...methods}>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Profile Preview */}
          <div className="w-full md:w-1/2">
            <ProfilePreview />
          </div>

          {/* Tabs Content */}
          <div className="w-full md:w-1/2">
            <TabsContent value="links">
              <LinksUI />
            </TabsContent>
            <TabsContent value="profile">
              <ProfileDetails />
            </TabsContent>
          </div>
        </div>
      </FormProvider>
    </Tabs>
  );
};

export default App;
