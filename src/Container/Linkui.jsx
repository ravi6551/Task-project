import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FormField } from "@/components/ui/form";
import FormSelect from "@/components/form/FormSelect";
import FormInput from "@/components/form/FormInput";

const LinksUI = () => {
  const form = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "links",
  });

  return (
    <Card className="w-full">
      {/* Header Section */}
      <CardHeader>
        <CardTitle className="font-bold text-lg">Customize your links</CardTitle>
        <CardDescription>
          Add/edit/remove links below and then share all your profiles with the world!
        </CardDescription>
      </CardHeader>

      {/* Add New Link Button */}
      <div className="px-4">
        <Button
          type="button"
          className="w-full mb-4 border border-blue-500 text-blue-500 hover:bg-blue-100"
          onClick={() => append({ platform: "", link: "" })}
        >
          + Add new link
        </Button>
      </div>

      {/* Dynamic Link Fields */}
      <CardContent className="space-y-4">
        {fields.map((item, index) => (
          <div key={item.id} className="border border-gray-300 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <FormField
                control={form.control}
                name={`links.${index}.platform`}
                render={(props) => (
                  <FormSelect
                    label={`Link #${index + 1}`}
                    placeholder="Select Platform"
                    options={[
                      { value: "github", text: "GitHub" },
                      { value: "youtube", text: "YouTube" },
                      { value: "linkedin", text: "LinkedIn" },
                      { value: "twitter", text: "Twitter" },
                      { value: "facebook", text: "Facebook" },
                      { value: "instagram", text: "Instagram" },
                    ]}
                    {...props}
                  />
                )}
              />
              <Button
                type="button"
                className="ml-4 text-red-500 hover:bg-red-100"
                onClick={() => remove(index)}
              >
                Remove
              </Button>
            </div>
            <FormField
              control={form.control}
              name={`links.${index}.link`}
              render={(props) => (
                <FormInput
                  label="Link"
                  placeholder="https://example.com"
                  {...props}
                />
              )}
            />
          </div>
        ))}
      </CardContent>

      {/* Save Button */}
      <CardFooter>
        <Button type="submit" className="w-full bg-purple-600 text-white hover:bg-purple-700">
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LinksUI;
