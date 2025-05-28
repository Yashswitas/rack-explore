
import { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import CategorySection from './CategorySection';
import { SavedItem } from '../pages/Index';

interface ExploreTabProps {
  onSaveItem: (item: SavedItem) => void;
}

const ExploreTab = ({ onSaveItem }: ExploreTabProps) => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-1/2">
        <ImageCarousel onSaveItem={onSaveItem} />
      </div>
      <div className="h-1/2 overflow-y-auto bg-gray-50">
        <CategorySection />
      </div>
    </div>
  );
};

export default ExploreTab;
