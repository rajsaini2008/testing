// app/enquiry/page.tsx
export default function EnquiryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Blue header section */}
      <div className="bg-blue-600 h-48 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Enquiry</h1>
          <p className="mt-2 text-lg">Fill all fields completely for a good enquiry</p>
        </div>
      </div>

      {/* Form section */}
      <div className="px-8 md:px-16 lg:px-32 py-10">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <label>Select Your Institute *</label>
            <select className="w-full border rounded p-2">
              <option>Please Select</option>
            </select>
          </div>

          <div className="flex space-x-2">
            <div className="w-1/3">
              <label>Abbreviation</label>
              <select className="w-full border rounded p-2">
                <option>Mr</option>
                <option>Ms</option>
              </select>
            </div>
            <div className="w-2/3">
              <label>Student Name *</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
          </div>

          <div>
            <label>Select One</label>
            <select className="w-full border rounded p-2">
              <option>S/O</option>
              <option>D/O</option>
            </select>
          </div>

          <div>
            <label>Father / Husband Name</label>
            <input type="text" className="w-full border rounded p-2" />
          </div>

          <div>
            <label>Surname</label>
            <input type="text" className="w-full border rounded p-2" />
          </div>

          <div>
            <label>Mother Name</label>
            <input type="text" className="w-full border rounded p-2" />
          </div>

          <div>
            <label>Course of Interest *</label>
            <select className="w-full border rounded p-2">
              <option>ADVANCE CERTIFICATE II</option>
            </select>
          </div>

          <div>
            <label>Student Mobile *</label>
            <input type="text" className="w-full border rounded p-2" />
          </div>

          <div>
            <label>Alternate Mobile</label>
            <input type="text" className="w-full border rounded p-2" />
          </div>

          <div>
            <label>Email *</label>
            <input type="email" className="w-full border rounded p-2" />
          </div>

          <div>
            <label>Date Of Birth</label>
            <input type="date" className="w-full border rounded p-2" />
          </div>

          <div>
            <label>Gender</label>
            <select className="w-full border rounded p-2">
              <option>Please Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div>
            <label>Referral Code (If Any)</label>
            <input type="text" className="w-full border rounded p-2" />
          </div>

          <div>
            <label>State</label>
            <select className="w-full border rounded p-2">
              <option>Please Select State</option>
            </select>
          </div>

          <div>
            <label>City</label>
            <input type="text" className="w-full border rounded p-2" />
          </div>

          <div>
            <label>Postcode</label>
            <input type="text" className="w-full border rounded p-2" />
          </div>

          <div className="md:col-span-2">
            <label>Permanent Address</label>
            <textarea className="w-full border rounded p-2" rows={4}></textarea>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-8 rounded">
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
