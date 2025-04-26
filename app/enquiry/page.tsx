"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  institute: yup.string().required("Institute selection is required"),
  salutation: yup.string().required("Salutation is required"),
  studentName: yup.string().required("Student name is required"),
  fatherName: yup.string().required("Father/Husband name is required"),
  surname: yup.string().required("Surname is required"),
  motherName: yup.string().required("Mother name is required"),
  courseInterest: yup.string().required("Course of interest is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  dob: yup.string().required("Date of birth is required"),
  studentMobile: yup.string().required("Mobile number is required"),
  alternateMobile: yup.string(),
  gender: yup.string().required("Gender is required"),
  referralCode: yup.string(),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  postcode: yup.string().required("Postcode is required"),
  permanentAddress: yup.string().required("Permanent address is required"),
});

export default function EnquiryPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Enquiry submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-800 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">KRISHNA COMPUTER</h1>
      </div>

      {/* Page Title */}
      <div className="py-8 text-center">
        <h1 className="text-3xl font-bold text-blue-800">Enquiry</h1>
        <p className="text-gray-600 mt-2">Fill all fields completely for a good enquiry</p>
      </div>

      {/* Enquiry Form */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Institute Selection */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Select Your Institute *
            </label>
            <select
              {...register("institute")}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Please Select</option>
              <option value="Krishna Computers">Krishna Computers</option>
            </select>
            {errors.institute && (
              <p className="text-red-500 text-sm mt-1">{errors.institute.message}</p>
            )}
          </div>

          {/* Student Information - Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Salutation *
              </label>
              <select
                {...register("salutation")}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">Select One</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
              </select>
              {errors.salutation && (
                <p className="text-red-500 text-sm mt-1">{errors.salutation.message}</p>
              )}
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">
                Student Name *
              </label>
              <input
                type="text"
                {...register("studentName")}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.studentName && (
                <p className="text-red-500 text-sm mt-1">{errors.studentName.message}</p>
              )}
            </div>
          </div>

          {/* Family Information - Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Father/Husband Name *
              </label>
              <input
                type="text"
                {...register("fatherName")}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.fatherName && (
                <p className="text-red-500 text-sm mt-1">{errors.fatherName.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Surname *
              </label>
              <input
                type="text"
                {...register("surname")}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.surname && (
                <p className="text-red-500 text-sm mt-1">{errors.surname.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Mother Name *
              </label>
              <input
                type="text"
                {...register("motherName")}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.motherName && (
                <p className="text-red-500 text-sm mt-1">{errors.motherName.message}</p>
              )}
            </div>
          </div>

          {/* Course and Contact - Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Course of Interest *
              </label>
              <select
                {...register("courseInterest")}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">Select Course</option>
                <option value="ADCA">ADVANCE CERTIFICATE IN COMPUTER APPLICATION (ADCA)</option>
                <option value="DCA">DIPLOMA IN COMPUTER APPLICATION</option>
              </select>
              {errors.courseInterest && (
                <p className="text-red-500 text-sm mt-1">{errors.courseInterest.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Student Mobile *
              </label>
              <input
                type="tel"
                {...register("studentMobile")}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.studentMobile && (
                <p className="text-red-500 text-sm mt-1">{errors.studentMobile.message}</p>
              )}
            </div>
          </div>

          {/* Email and Alternate Mobile - Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email *
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Alternate Mobile
              </label>
              <input
                type="tel"
                {...register("alternateMobile")}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>

          {/* Date of Birth and Gender - Row 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Date Of Birth *
              </label>
              <input
                type="date"
                {...register("dob")}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.dob && (
                <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Gender *
              </label>
              <select
                {...register("gender")}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">Please Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
              )}
            </div>
          </div>

          {/* Referral Code - Row 6 */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Referral Code (If Any)
            </label>
            <input
              type="text"
              {...register("referralCode")}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Address Information - Row 7 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                State *
              </label>
              <select
                {...register("state")}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">Please Select State</option>
                <option value="Rajasthan">Rajasthan</option>
              </select>
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                City *
              </label>
              <input
                type="text"
                {...register("city")}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Postcode *
              </label>
              <input
                type="text"
                {...register("postcode")}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.postcode && (
                <p className="text-red-500 text-sm mt-1">{errors.postcode.message}</p>
              )}
            </div>
          </div>

          {/* Permanent Address - Row 8 */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Permanent Address *
            </label>
            <textarea
              {...register("permanentAddress")}
              rows={3}
              className="w-full px-4 py-2 border rounded-md"
            ></textarea>
            {errors.permanentAddress && (
              <p className="text-red-500 text-sm mt-1">{errors.permanentAddress.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}