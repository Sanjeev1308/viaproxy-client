import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useUserById } from '@/hooks/api/user.rq';
import { Globe, Lock, Mail, MapPin, User } from 'lucide-react';
import { useParams } from 'react-router-dom';

const UserDetailsView = () => {
  const { id: userId } = useParams();
  const { data, isLoading } = useUserById(userId || '');

  if (isLoading) {
    return <div className="text-center py-12 text-gray-600">Loading...</div>;
  }

  const userData = data.user;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column - Profile Picture */}
        <div className="space-y-6">
          {/* Profile Picture */}
          <Card className="shadow-md">
            <CardContent className="p-4 text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-100">
                <img
                  src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${userData?.profilePicture}`}
                  alt={`${userData?.firstName} ${userData?.lastName}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="mt-4 text-2xl font-semibold">{`${userData?.firstName} ${userData?.lastName}`}</h2>
              <span className="text-sm text-gray-500">{userData?.role}</span>
            </CardContent>
          </Card>

          {/* Account Status */}
          <Card className="shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <span className="font-medium">Account Status:</span>
                <Badge
                  className={`capitalize ${userData?.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                >
                  {userData?.isActive ? 'Active' : 'Inactive'}
                </Badge>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-medium">Email Verified:</span>
                <Badge
                  className={`capitalize ${userData?.emailVerified ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
                >
                  {userData?.emailVerified ? 'Verified' : 'Unverified'}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - User Details */}
        <div className="space-y-6">
          {/* User Details */}
          <Card className="shadow-md">
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-3">User Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="font-medium">Full Name:</span>
                  <span>{`${userData?.firstName} ${userData?.lastName}`}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span className="font-medium">Email:</span>
                  <span>{userData?.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-gray-500" />
                  <span className="font-medium">Country:</span>
                  <span>{userData?.country || 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span className="font-medium">City:</span>
                  <span>{userData?.city || 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">School:</span>
                  <span>{userData?.school || 'N/A'}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security & Role */}
          <Card className="shadow-md">
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-3">Security & Role</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-gray-500" />
                  <span className="font-medium">Role:</span>
                  <span>{userData?.role}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsView;
