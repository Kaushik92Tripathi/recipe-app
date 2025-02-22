// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Foodie's Paradise. All rights reserved.
            </p>
            <p className="text-orange-700 font-medium">"Good food brings good mood!"</p>
          </div>
        </div>
      </footer>
    );
  }
  