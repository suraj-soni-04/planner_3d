import React, { useState } from 'react';
import './DisplayComponent.css';

interface DisplayComponentProps {
  setActiveComponent: (component: string) => void;
}

const DisplayComponent: React.FC<DisplayComponentProps> = ({ setActiveComponent }) => {
  const [activeTab, setActiveTab] = useState<'Edit' | 'View'>('Edit');

  const handleTabChange = (tab: 'Edit' | 'View') => {
    setActiveTab(tab);
    setActiveComponent(tab === 'Edit' ? 'Tool' : 'Preview');
  };

  return (
    <div className="rectangle-section section1">
      <nav className="navbar">
        <button onClick={() => handleTabChange('Edit')} className={activeTab === 'Edit' ? 'active' : ''}>
          Edit
        </button>
        <button onClick={() => handleTabChange('View')} className={activeTab === 'View' ? 'active' : ''}>
          View
        </button>
      </nav>
      {activeTab === 'Edit' ? (
        <div>
          <h2>Edit Section</h2>
          {/* Your edit section content here */}
        </div>
      ) : (
        <div>
          <h2>View Section</h2>
          {/* Your view section content here */}
        </div>
      )}
    </div>
  );
};

export default DisplayComponent;
