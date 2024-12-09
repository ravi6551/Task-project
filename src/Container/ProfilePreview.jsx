import { useFormContext } from "react-hook-form";

const ProfilePreview = () => {
    const form = useFormContext();
    const data = form.watch();
    

    
    return (
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 mb-6 md:mb-0 md:mr-6">
            <div className="w-full h-[600px] border border-gray-200 rounded-lg relative bg-gray-50">
                {/* Profile Card */}
                <div className="absolute top-8 left-0 right-0 mx-auto w-72 bg-white rounded-3xl shadow-lg">
                    <div className="flex flex-col items-center py-8 px-6">
                        {/* Profile Picture */}
                        <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden">
                            <img
                                src={data?.profilePicture || "/default-avatar.png"}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Name */}
                        <div className="mt-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {data?.firstName || "First Name"} 
                            </h3>
                        </div>
                    </div>
                    {/* Links */}
                    <div className="space-y-4 px-6 pb-6">
                        {data?.links?.length > 0 ? (
                            data.links.map((link) => (
                                <div key={link.platform} className="flex flex-col items-start border border-gray-200 rounded-lg p-3">
                                    <p className="text-sm font-semibold text-gray-700">{link.platform}</p>
                                   
                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-gray-500">No links available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePreview;
