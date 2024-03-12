import React, { useState } from 'react';
import MountainSelect from './MountainSelect';
import MountainDetail from './MountainDetail';
import mountainsData from '../../data/mountainsData';
import './MountainsPage.css';

const MountainsPage = () => {
  const [selectedMountain, setSelectedMountain] = useState(null);

  const handleMountainSelect = (mountain) => {
    setSelectedMountain(mountain);
  };

  return (
    <div className="container-sm text-center mt-5 mountains">
      <MountainSelect
        mountainsData={mountainsData}
        onMountainSelect={handleMountainSelect}
      />
      <MountainDetail mountain={selectedMountain} />
    </div>
  );
};

export default MountainsPage;