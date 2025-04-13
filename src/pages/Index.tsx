
import ChatWidget from '@/components/chat/ChatWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Website Content</h1>
        <p className="text-xl text-gray-600 mb-8">
          This is your main website content. The floating chat button will appear in the bottom right corner.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Feature One</h2>
            <p className="text-gray-600">
              Description of your amazing feature and how it benefits your users.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Feature Two</h2>
            <p className="text-gray-600">
              Another fantastic feature that makes your product stand out.
            </p>
          </div>
        </div>
      </div>
      
      {/* Add the chat widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;
