"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  institute: yup.string().required("Institute selection is required"),
  abbreviation: yup.string().required("Abbreviation is required"),
  salutation: yup.string().required("Salutation is required"),
  studentName: yup.string().required("Student name is required"),
  courseInterest: yup.string().required("Course of interest is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  dob: yup.string().required("Date of birth is required"),
  fatherName: yup.string().required("Father/Husband name is required"),
  surname: yup.string().required("Surname is required"),
  motherName: yup.string().required("Mother name is required"),
  studentMobile: yup
    .string()
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Mobile number is required"),
  alternateMobile: yup.string().matches(/^[0-9]{10}$/, "Invalid mobile number"),
  gender: yup.string().required("Gender is required"),
  referralCode: yup.string(),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  postcode: yup.string().required("Postcode is required"),
  permanentAddress: yup.string().required("Permanent address is required"),
  message: yup.string(),
});

export default function CourseEnquiryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Submit to your backend here
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-800 py-4 px-6">
          <h1 className="text-2xl font-bold text-white">Course Enquiry Form</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          {/* Institute Selection */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Select Your Institute *
              </label>
              <select
                {...register("institute")}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Please Select</option>
                <option value="Krishna Computers">Krishna Computers</option>
                <option value="Other Institute">Other Institute</option>
              </select>
              {errors.institute && (
                <p className="text-red-500 text-sm mt-1">{errors.institute.message}</p>
              )}
            </div>
          </div>

          {/* Student Information - Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Abbreviation *
              </label>
              <input
                type="text"
                {...register("abbreviation")}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.abbreviation && (
                <p className="text-red-500 text-sm mt-1">{errors.abbreviation.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Salutation *
              </label>
              <select
                {...register("salutation")}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select One</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
              </select>
              {errors.salutation && (
                <p className="text-red-500 text-sm mt-1">{errors.salutation.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Student Name *
              </label>
              <input
                type="text"
                {...register("studentName")}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.studentName && (
                <p className="text-red-500 text-sm mt-1">{errors.studentName.message}</p>
              )}
            </div>
          </div>

          {/* Course of Interest */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Course of Interest *
            </label>
            <select
              {...register("courseInterest")}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Course</option>
              <option value="ADCA">ADVANCE CERTIFICATE IN COMPUTER APPLICATION (ADCA)</option>
              <option value="DCA">Diploma in Computer Application (DCA)</option>
              <option value="Tally">Tally with GST</option>
              <option value="Programming">Programming Courses</option>
            </select>
            {errors.courseInterest && (
              <p className="text-red-500 text-sm mt-1">{errors.courseInterest.message}</p>
            )}
          </div>

          {/* Email and Referral Code */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email *
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Referral Code (If Any)
              </label>
              <input
                type="text"
                {...register("referralCode")}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Date of Birth and Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Date Of Birth *
              </label>
              <input
                type="date"
                {...register("dob")}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.dob && (
                <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Student Mobile *
              </label>
              <input
                type="tel"
                {...register("studentMobile")}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                maxLength={10}
              />
              {errors.studentMobile && (
                <p className="text-red-500 text-sm mt-1">{errors.studentMobile.message}</p>
              )}
            </div>
          </div>

          {/* Family Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Father / Husband Name *
              </label>
              <input
                type="text"
                {...register("fatherName")}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.motherName && (
                <p className="text-red-500 text-sm mt-1">{errors.motherName.message}</p>
              )}
            </div>
          </div>

          {/* Alternate Mobile and Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Alternate Mobile
              </label>
              <input
                type="tel"
                {...register("alternateMobile")}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                maxLength={10}
              />
              {errors.alternateMobile && (
                <p className="text-red-500 text-sm mt-1">{errors.alternateMobile.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Gender *
              </label>
              <select
                {...register("gender")}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Please Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
              )}
            </div>
          </div>

          {/* Address Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                State *
              </label>
              <select
                {...register("state")}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Please Select State</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Delhi">Delhi</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Haryana">Haryana</option>
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
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.postcode && (
                <p className="text-red-500 text-sm mt-1">{errors.postcode.message}</p>
              )}
            </div>
          </div>

          {/* Permanent Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Permanent Address *
            </label>
            <textarea
              {...register("permanentAddress")}
              rows={3}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            {errors.permanentAddress && (
              <p className="text-red-500 text-sm mt-1">{errors.permanentAddress.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message us
            </label>
            <textarea
              {...register("message")}
              rows={3}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-md transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}