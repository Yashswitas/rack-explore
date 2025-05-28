
import { Menu } from 'lucide-react';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import ProfilePage from './ProfilePage';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-black tracking-wider">RACK</h1>
      
      <Sheet open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <SheetTrigger asChild>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Menu className="w-6 h-6 text-black" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80">
          <SheetHeader>
            <SheetTitle>Profile</SheetTitle>
          </SheetHeader>
          <ProfilePage />
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
