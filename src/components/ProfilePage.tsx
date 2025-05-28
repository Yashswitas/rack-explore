
import { User, Settings, Clock, Shield } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="py-6 space-y-6">
      {/* User Info */}
      <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-black">John Doe</h3>
          <p className="text-sm text-gray-600">john.doe@example.com</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
          <Settings className="w-5 h-5 text-gray-600" />
          <span className="text-black">Settings</span>
        </button>

        <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
          <Clock className="w-5 h-5 text-gray-600" />
          <span className="text-black">App Version History</span>
        </button>

        <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
          <Shield className="w-5 h-5 text-gray-600" />
          <span className="text-black">Privacy Policy</span>
        </button>
      </div>

      {/* App Version */}
      <div className="pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          RACK v1.0.0
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
