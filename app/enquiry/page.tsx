// app/enquiry/page.tsx (Next.js 14 structure)
import React from 'react';

const EnquiryForm = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4">
      <div className="w-full max-w-5xl bg-white shadow-lg p-6 rounded-md">
        <div className="bg-blue-700 text-white text-center p-4 rounded-md mb-6">
          <h1 className="text-3xl font-bold">Enquiry</h1>
          <p className="text-sm mt-2">Fill all fields completely for a good enquiry</p>
        </div>

        <form className="space-y-6">
          {/* Institute Selection */}
          <div className="flex flex-col space-y-2">
            <label className="font-medium text-gray-700">Select Your Institute <span className="text-red-500">*</span></label>
            <select className="border rounded p-2">
              <option>Please Select</option>
            </select>
          </div>

          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="flex flex-col">
              <label>Abbreviation</label>
              <select className="border rounded p-2">
                <option>Mr</option>
                <option>Ms</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label>Student Name <span className="text-red-500">*</span></label>
              <input type="text" className="border rounded p-2" />
            </div>

            <div className="flex flex-col">
              <label>Select One</label>
              <select className="border rounded p-2">
                <option>S/O</option>
                <option>D/O</option>
                <option>W/O</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label>Father / Husband Name</label>
              <input type="text" className="border rounded p-2" />
            </div>

            <div className="flex flex-col">
              <label>Surname</label>
              <input type="text" className="border rounded p-2" />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <label>Mother Name</label>
              <input type="text" className="border rounded p-2" />
            </div>

            <div className="flex flex-col">
              <label>Course of Interest <span className="text-red-500">*</span></label>
              <select className="border rounded p-2">
                <option>ADVANCE CERTIFICATE IN COMPUTER APPLICATION (AC)</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label>Student Mobile <span className="text-red-500">*</span></label>
              <input type="text" className="border rounded p-2" />
            </div>

            <div className="flex flex-col">
              <label>Alternate Mobile</label>
              <input type="text" className="border rounded p-2" />
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <label>Email <span className="text-red-500">*</span></label>
              <input type="email" className="border rounded p-2" />
            </div>

            <div className="flex flex-col">
              <label>Date Of Birth</label>
              <input type="date" className="border rounded p-2" />
            </div>

            <div className="flex flex-col">
              <label>Gender</label>
              <select className="border rounded p-2">
                <option>Please Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label>Referral Code (If Any)</label>
              <input type="text" className="border rounded p-2" />
            </div>
          </div>

          {/* Fourth Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label>State</label>
              <select className="border rounded p-2">
                <option>Please Select State</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label>City</label>
              <input type="text" className="border rounded p-2" />
            </div>

            <div className="flex flex-col">
              <label>Postcode</label>
              <input type="text" className="border rounded p-2" />
            </div>
          </div>

          {/* Permanent Address */}
          <div className="flex flex-col">
            <label>Permanent Address</label>
            <textarea className="border rounded p-2 h-24"></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-10 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
