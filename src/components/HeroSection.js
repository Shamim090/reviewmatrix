import React from "react";
import "../styles/HeroSection.css";
import SearchReview from "./SearchReview";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>অন্ধবিশ্বাস ধোকা দেয়!</h1>
        <h2>রিভিউ দিবে সত্যের সন্ধান</h2>
        <p>
          চটকদার বিজ্ঞাপনের ভিড়ে খাটি রিভিউ পড়ে অথেনটিক প্রোডাক্ট বিক্রি করে এমন
          ফেইসবুক পেইজ খুজে বের করুন। কোন পেইজ থেকে পণ্য কেনার আগে তাদের
          সম্পর্কে রিভিউ যাচাই করে নিন। নিজেও পণ্য কিনে রিভিও দিন যাতে অন্য
          ক্রেতারা উপকৃত হতে পারেন আপনার এই রিভিউ দ্বারা।
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
