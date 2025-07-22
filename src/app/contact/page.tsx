"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { cvData } from "../../data/cvData";

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    setSubmitted(true);
    reset();
  };

  return (
    <main className="max-w-xl mx-auto py-12 px-4 flex flex-col gap-8 bg-white/80 dark:bg-black/60 rounded-2xl shadow-xl backdrop-blur-md">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Contact</h1>
      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        <div><span className="font-semibold text-gray-900 dark:text-gray-100">Email:</span> <a href={`mailto:${cvData.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">{cvData.email}</a></div>
        <div><span className="font-semibold text-gray-900 dark:text-gray-100">Phone:</span> <a href={`tel:${cvData.phone.replace(/\s+/g, '')}`} className="text-blue-600 dark:text-blue-400 hover:underline">{cvData.phone}</a></div>
        <div><span className="font-semibold text-gray-900 dark:text-gray-100">Location:</span> {cvData.address}</div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col gap-4 border border-gray-100 dark:border-gray-800">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Send a Message</h2>
        <input {...register("name", { required: true })} placeholder="Your Name" className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 dark:text-gray-100" />
        {errors.name && <span className="text-red-500 text-sm text-gray-900 dark:text-red-400">Name is required</span>}
        <input {...register("email", { required: true, pattern: /.+@.+\..+/ })} placeholder="Your Email" className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 dark:text-gray-100" />
        {errors.email && <span className="text-red-500 text-sm text-gray-900 dark:text-red-400">Valid email is required</span>}
        <textarea {...register("message", { required: true })} placeholder="Your Message" rows={5} className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 dark:text-gray-100" />
        {errors.message && <span className="text-red-500 text-sm text-gray-900 dark:text-red-400">Message is required</span>}
        <button type="submit" className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-800 text-gray-900 dark:text-gray-100">Send</button>
        {isSubmitSuccessful && submitted && <div className="text-green-600 font-medium mt-2 text-gray-900 dark:text-green-400">Thank you! Your message has been sent.</div>}
      </form>
    </main>
  );
} 