"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Truck,
  CheckCircle,
  Star,
  MessageCircle,
  ArrowRight,
  Droplets,
  Shield,
  animate,
  variant
} from "lucide-react";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
    },
  };

  // Sample produce data
  const productsData = [
    {
      id: 1,
      name: "Tomatoes",
      farmer: "Ashok Kumar",
      region: "Colombo District",
      price: "₹120 per kg",
      image: "🍅",
      freshness: "Harvested today",
    },
    {
      id: 2,
      name: "Spinach",
      farmer: "Meera Singh",
      region: "Kandy District",
      price: "₹80 per bunch",
      image: "🥬",
      freshness: "Harvested today",
    },
    {
      id: 3,
      name: "Carrots",
      farmer: "Rajesh Patel",
      region: "Matara District",
      price: "₹100 per kg",
      image: "🥕",
      freshness: "Freshly picked",
    },
    {
      id: 4,
      name: "Bell Peppers",
      farmer: "Priya Sharma",
      region: "Gampaha District",
      price: "₹150 per kg",
      image: "🫑",
      freshness: "Harvested today",
    },
    {
      id: 5,
      name: "Bananas",
      farmer: "Kumar Estate",
      region: "Kurunegala District",
      price: "₹60 per bunch",
      image: "🍌",
      freshness: "Farm fresh",
    },
    {
      id: 6,
      name: "Strawberries",
      farmer: "Highland Berry Farm",
      region: "Nuwara Eliya District",
      price: "₹250 per kg",
      image: "🍓",
      freshness: "Just harvested",
    },
  ];

  const stats = [
    { number: "500+", label: "Trusted Farmers" },
    { number: "10,000+", label: "Happy Families" },
    { number: "24h", label: "Delivery Time" },
    { number: "100%", label: "Pesticide Free" },
  ];

  const steps = [
    {
      step: 1,
      title: "Browse & Pick",
      description: "Select from seasonal, verified produce with farmer details",
      icon: "🛒",
    },
    {
      step: 2,
      title: "We Harvest",
      description: "Farmers pick your items fresh, just for your order",
      icon: "🌾",
    },
    {
      step: 3,
      title: "Delivered Fresh",
      description: "Arrives at your doorstep within 24 hours, guaranteed",
      icon: "🚚",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Leaf className="w-8 h-8 text-[#2D6A4F]" />
            <span className="font-bold text-xl text-[#2D6A4F]">
              FreshDirect
            </span>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#FFB703] hover:bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold transition-all"
          >
            Order Now
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F8F9FA] to-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#2D6A4F] leading-tight">
                Harvested Today,
                <span className="text-[#FFB703]"> Delivered Tomorrow</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Farm-to-door freshness without middlemen. No pesticides. No
                preservatives. Just pure, organic produce from verified Sri
                Lankan farmers delivered within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FFB703] hover:bg-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  Order Now <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-[#2D6A4F] text-[#2D6A4F] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2D6A4F] hover:text-white transition-all"
                >
                  Learn More
                </motion.button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-[#D8F3DC] rounded-full border-2 border-white flex items-center justify-center text-sm"
                    >
                      👨‍🌾
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <strong>10,000+</strong> families trust us
                </p>
              </div>
            </motion.div>

            {/* Hero Image - Emoji Based */}
            <motion.div
              variants={itemVariants}
              className="relative h-96 sm:h-full flex items-center justify-center"
            >
              <motion.div
                animate={floatingVariants.animate}
                className="text-9xl sm:text-[200px] filter drop-shadow-2xl"
              >
                🥬
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-[#D8F3DC] to-transparent rounded-3xl opacity-40"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Villain Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#2D6A4F] mb-4">
              The Supermarket Problem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mass-produced vegetables sitting in warehouses for weeks, sprayed
              with pesticides, picked too early to survive transit. Your family
              deserves better.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Problem Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex gap-4 items-start">
                <div className="text-3xl">😤</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Chemical Residue
                  </h3>
                  <p className="text-gray-600">
                    Supermarket produce travels 1,000+ km, heavily treated with
                    pesticides and wax coatings.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-3xl">📅</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Stale Stock
                  </h3>
                  <p className="text-gray-600">
                    Picked 2-3 weeks ago. Nutrients fade. Taste diminishes.
                    Freshness? Gone.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-3xl">💰</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Middlemen Markup
                  </h3>
                  <p className="text-gray-600">
                    Farmer gets 10%, you pay 300% more. Our direct model
                    eliminates wastage.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Solution Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex gap-4 items-start">
                <div className="text-3xl">✨</div>
                <div>
                  <h3 className="text-xl font-bold text-[#2D6A4F] mb-2">
                    100% Organic
                  </h3>
                  <p className="text-gray-600">
                    Pesticide-free guaranteed. Direct from farmers who care
                    about your family's health.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-3xl">🌱</div>
                <div>
                  <h3 className="text-xl font-bold text-[#2D6A4F] mb-2">
                    Harvested Fresh
                  </h3>
                  <p className="text-gray-600">
                    Picked TODAY for YOUR order. Maximum nutrients. Maximum
                    flavor.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-3xl">🤝</div>
                <div>
                  <h3 className="text-xl font-bold text-[#2D6A4F] mb-2">
                    Fair Price
                  </h3>
                  <p className="text-gray-600">
                    Farmers earn fairly. You pay fairly. No hidden middlemen.
                    Transparent pricing.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2D6A4F]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <h3 className="text-3xl sm:text-4xl font-bold mb-2">
                  {stat.number}
                </h3>
                <p className="text-[#D8F3DC]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The 3-Step Plan Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#2D6A4F] mb-4">
              How FreshDirect Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three simple steps from farm to your table within 24 hours
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-[#F8F9FA] rounded-3xl p-8 h-full hover:shadow-xl transition-shadow">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-8 bg-[#FFB703] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="text-6xl mb-6 mt-4">{item.icon}</div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#2D6A4F] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-[#FFB703] text-3xl">
                      →
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Marketplace Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#2D6A4F] mb-4">
              This Week's Fresh Harvest
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Verified farmers. Named sources. Complete transparency.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {productsData.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-[#D8F3DC]"
              >
                {/* Product Image Emoji */}
                <div className="bg-[#D8F3DC] p-12 flex items-center justify-center">
                  <span className="text-7xl">{product.image}</span>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2D6A4F] mb-2">
                    {product.name}
                  </h3>

                  {/* Farmer Info */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">👨‍🌾</span>
                    <span className="text-sm font-semibold text-gray-700">
                      {product.farmer}
                    </span>
                  </div>

                  {/* Region */}
                  <p className="text-xs text-gray-500 mb-3">{product.region}</p>

                  {/* Freshness Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-green-600">
                      {product.freshness}
                    </span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#2D6A4F]">
                      {product.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#FFB703] hover:bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all"
                    >
                      +
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="bg-[#2D6A4F] hover:bg-[#1f4a38] text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              Browse All Products
            </button>
          </motion.div>
        </div>
      </section>

      {/* Success Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image/Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D8F3DC] to-[#FFB703] opacity-20 rounded-3xl"></div>
                <div className="text-8xl">👨‍👩‍👧‍👦</div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#2D6A4F] mb-4">
                  Healthy Families.
                  <span className="text-[#FFB703]"> Happy Homes.</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Every parent wants the best for their children. Fresh,
                  pesticide-free vegetables aren't a luxury—they're a necessity.
                  Our mission is to make it accessible to every family in Sri
                  Lanka.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: "✓", text: "More nutrients in every bite" },
                  { icon: "✓", text: "Better taste, better health" },
                  { icon: "✓", text: "No hidden chemicals" },
                  { icon: "✓", text: "Support local farmers" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-2xl text-[#2D6A4F]">{item.icon}</span>
                    <span className="text-lg text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#FFB703] hover:bg-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg w-full sm:w-auto transition-all"
              >
                Start Your Journey Today
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2D6A4F]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
              Ready for Fresh Vegetables?
            </h2>
            <p className="text-xl text-[#D8F3DC] mb-8 max-w-2xl mx-auto">
              Join 10,000+ happy families. Get your first order delivered fresh
              within 24 hours.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFB703] hover:bg-yellow-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center gap-2 shadow-lg"
            >
              Order Now <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <Leaf className="w-5 h-5" /> FreshDirect
            </h3>
            <p className="text-sm">Farm-to-door freshness without middlemen.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; 2024 FreshDirect. All rights reserved. Harvested today,
            delivered with care.
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/94XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
    </div>
  );
}
