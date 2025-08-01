import React from 'react';
import Sidebar from '../../components/Sidebar';
import CommunitySearch from '../../components/Search/CommunitySearch';

const Community: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-6 overflow-y-auto ml-64">
                <CommunitySearch />
            </main>
        </div>
    );
};

export default Community;
